import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info"] });

export const insertProof = (data: Prisma.ProofCreateInput) =>
  prisma.proof.create({ data });

export const getProofs = () => prisma.proof.findMany();

export const getPendingProofs = () =>
  prisma.proof.findMany({
    where: {
      status: "pending",
    },
    select: {
      amount: true,
      C: true,
      id: true,
      secret: true,
    },
  });

export const updateProof = (id: string, data: Prisma.ProofUpdateInput) =>
  prisma.proof.update({
    where: { id },
    data,
  });

export const deleteSingleProof = (id: string) =>
  prisma.proof.delete({
    where: {
      id,
    },
  });

export const deleteAllProofs = () => prisma.proof.deleteMany();

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

export const getAllTokens = (data?: Prisma.TokenFindManyArgs) =>
  prisma.token.findMany(data);

export const getAllInvoices = () =>
  prisma.lNInvoice.findMany({
    where: {
      status: {
        not: "paid",
      },
    },
  });
