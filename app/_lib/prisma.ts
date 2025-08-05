import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
  cachedPrisma: PrismaClient | undefined
}

const prisma =
  process.env.NODE_ENV === "production"
    ? new PrismaClient()
    : (globalForPrisma.cachedPrisma ??
      (globalForPrisma.cachedPrisma = new PrismaClient()))

export const db = prisma
