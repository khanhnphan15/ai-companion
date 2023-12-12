import { PrismaClient } from "@prisma/client";

// Declare the global prisma instance
declare global {
  var prisma: PrismaClient | undefined;
}

// Initialize and export the Prisma client
const prismadb = globalThis.prisma || new PrismaClient();

// Set up global prisma instance in development to allow hot-reloading
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

// Handle cleanup on application shutdown
export const cleanupPrisma = async (): Promise<void> => {
  if (prismadb) {
    await prismadb.$disconnect();
  }
};

// Ensure cleanup on process exit
process.on("beforeExit", async () => {
  await cleanupPrisma();
});

export default prismadb;
