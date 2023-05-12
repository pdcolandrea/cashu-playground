import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info"] });

export const insertProof = (data: Prisma.ProofCreateInput) =>
  prisma.proof.create({ data });

export const getProofs = () => prisma.proof.findMany();

export const insertLNInvoice = (data: Prisma.LNInvoiceCreateInput) =>
  prisma.lNInvoice.create({ data });

export const updateLNInvoice = (
  hash: string,
  data: Prisma.LNInvoiceUpdateInput
) =>
  prisma.lNInvoice.update({
    where: {
      hash,
    },
    data,
  });

export const insertToken = (data: Prisma.TokenCreateInput) =>
  prisma.token.create({ data });

export const getAllInvoices = () =>
  prisma.lNInvoice.findMany({
    where: {
      status: {
        not: "paid",
      },
    },
  });
