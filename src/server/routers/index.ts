import { router as tRouter } from "../trpc/router";
import { appwriteRouter } from "./appwrite";

export const appRouter = tRouter({
  appwrite: appwriteRouter,
});

// Export type definition of the API for client-side type safety.
export type AppRouter = typeof appRouter;
