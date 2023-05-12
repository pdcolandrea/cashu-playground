import { CashuMint, CashuWallet } from "@cashu/cashu-ts";
import * as storage from "../crud";

export const MINT_URL = "https://8333.space:3338";
export const wallet = new CashuWallet(new CashuMint(MINT_URL));

export default class Cashi {
  balance = 0;

  constructor() {}

  initStorage = async () => {
    const proofs = await storage.getProofs();
    this.balance = proofs.reduce((prev, curr) => prev + curr.amount, 0);
  };

  depositLN = async () => {
    // fund db using LN
  };
  withdrawLN = async () => {
    // send to LN Invoice
  };

  depositECash = async () => {
    // fund db using ECash string
  };
  withdrawECash = async () => {
    // send funds using ECash string
  };
}
