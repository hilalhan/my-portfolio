import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  globalThis.prisma ||
  new PrismaClient({
    log: ["query", "warn", "error"], // optional
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}
