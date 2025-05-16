"use server";

import { Account, Client } from "node-appwrite";
import { env } from "@/env";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(env.NEXT_PUBLIC_APP_WRITE_ENDPOINT)
    .setProject(env.NEXT_PUBLIC_APP_WRITE_PROJECT_ID);

  const session = (await cookies()).get("my-custom-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminAccount() {
  const client = new Client()
    .setEndpoint(env.NEXT_PUBLIC_APP_WRITE_ENDPOINT)
    .setProject(env.NEXT_PUBLIC_APP_WRITE_PROJECT_ID)
    .setKey(env.APP_WRITE_API_KEY);

  return {
    get account() {
      return new Account(client);
    },
  };
}

// src/server/routers/appwrite.ts
import { publicProcedure, router } from '../trpc/router';
import { z } from 'zod';

export const appwriteRouter = router({
  // Example query: Fetch Appwrite project information
  getProjectInfo: publicProcedure.query(async ({ ctx }) => {
    // Insert your secure Appwrite client call here.
    return { projectName: 'My Appwrite Project', status: 'active' };
  }),

  // Example mutation: Create an item via Appwrite
  createItem: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Call Appwrite's API to create an item. Replace with actual logic.
      return { success: true, item: input };
    }),
});
