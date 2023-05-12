import { CashuMint, CashuWallet } from "@cashu/cashu-ts";

export const MINT_URL = "https://8333.space:3338";
export const wallet = new CashuWallet(new CashuMint(MINT_URL));
