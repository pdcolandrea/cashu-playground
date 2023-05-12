import { MINT_URL, wallet } from "./wallet";
import * as storage from "../crud";
import { Proof, getDecodedToken, getEncodedToken } from "@cashu/cashu-ts";

// https://github.com/gandlafbtc/cashu-tools/blob/master/src/Faucet.ts#L93
export const sendECash = async (amount: number, proofs: Proof[]) => {
  const { returnChange, send } = await wallet.send(amount, proofs);

  // set all proofs = returnChange?

  // what about tokens? I think they are fine but not sure

  const encoded = getEncodedToken({
    token: [
      {
        mint: MINT_URL,
        proofs: send,
      },
    ],
  });

  return encoded;
};

export const sendToWallet = async (invoice: string, proofs: Proof[]) => {
  // TODO: AMOUNT CHECKING
  const tx = await wallet.payLnInvoice(invoice, proofs);
};

export const redeem = async () => {
  // const tx = wallet.mint.mint({outputs: [{}]})
};
