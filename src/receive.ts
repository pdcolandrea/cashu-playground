import { wallet } from "./wallet";
import * as storage from "../crud";

export const receiveECash = async (cashu: string) => {
  const { token } = await wallet.receive(cashu);
  console.log(JSON.stringify(token));

  for (const p of token.token[0].proofs) {
    await storage.insertProof({
      amount: p.amount,
      C: p.C,
      id: p.id,
      secret: p.secret,
    });
  }

  return token;
};
