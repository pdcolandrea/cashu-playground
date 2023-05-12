import { Proof, getDecodedToken, getEncodedToken } from "@cashu/cashu-ts";
import * as storage from "./crud";
import Cashi, { MINT_URL, wallet } from "./src/wallet";
import { showInvoiceQR } from "./util";

const generateInvoice = async (amount: number) => {
  const { pr, hash } = await wallet.requestMint(amount);
  console.log(`[requestMint] Pay this invoice for ${amount} sat: `, {
    pr,
    hash,
  });
  showInvoiceQR(pr);

  await storage.insertLNInvoice({
    amount,
    hash,
    pr,
    status: "pending",
  });

  return { pr, hash };
};

const generateInvoiceWSearch = async (amount: number) => {
  const lnInvoice = await generateInvoice(amount);

  let retries = 20;
  const timer = setInterval(async () => {
    console.log(`Searching for hash: ${lnInvoice.hash}. ${retries} retries`);
    const encoded = await checkInvoiceHasBeenPaid(amount, lnInvoice.hash);
    if (encoded || retries === 0) {
      clearInterval(timer);
    }
    retries -= 1;
  }, 5000);
};

/**
 *
 * @param amount
 * @param hash
 * @ ECASH that can be spent
 */
const checkInvoiceHasBeenPaid = async (amount: number, hash: string) => {
  try {
    // if we pass here - invoice was paid
    const { proofs, newKeys } = await wallet.requestTokens(amount, hash);
    await storage.updateLNInvoice(hash, { status: "paid" });

    for (const p of proofs) {
      await storage.insertProof({
        amount: amount,
        C: p.C,
        id: p.id,
        secret: p.secret,
      });
    }

    console.log(JSON.stringify(newKeys));

    const encoded = getEncodedToken({
      token: [{ mint: MINT_URL, proofs: proofs }],
    });
    console.log({ encoded });
    await storage.insertToken({ amount, status: "paid", token: encoded });
    return encoded;
  } catch (err) {
    console.log("Waiting on LN invoice to be paid");
    // console.error(err);
  }
};

const rescanInvoices = async () => {
  // get recent invoices that are not paid
  const invoices = await storage.getAllInvoices();
  for (const invoice of invoices) {
    if (invoice.date < new Date()) {
      // expire
    }

    await checkInvoiceHasBeenPaid(invoice.amount, invoice.hash);
  }
};

const rescanProofs = async (proofs: Proof[]) => {
  console.warn("TO DO: USE TO SAFELY CALCULATE BALANCE");
  const ret = await wallet.checkProofsSpent(proofs);
};

async function startDeposit(amount: number) {
  await Promise.all([rescanInvoices()]);
}

async function App() {
  console.log(wallet.keys);
  // await startDeposit(1);

  // const p = await storage.getProofs();
  // await rescanProofs(p);
  // await sendToken(1, p);

  // const t =
  //   "cashuAeyJ0b2tlbiI6W3sibWludCI6Imh0dHBzOi8vODMzMy5zcGFjZTozMzM4IiwicHJvb2ZzIjpbeyJpZCI6IkkyeU4raVJZZmt6VCIsImFtb3VudCI6MSwic2VjcmV0IjoiSnhHUUhHZmM5UTFkTDdQQjZYaEFReUVyZllUWStObWYyQnpsTElxOTdjRT0iLCJDIjoiMDI0ZDBjMWMxMThjZjMxYWYxN2EzZTM1MDFhZDFkYWU1ZTljYmM5ODcxZTVjOWRiYjZhYTZkMThjOTQ1Zjc1NGZkIn1dfV19";
  // console.log(JSON.stringify(getDecodedToken(t)));
  const wa = new Cashi();
  await wa.rescanProofs();
  // const d = await wa.withdrawECash(1);
}

App();
