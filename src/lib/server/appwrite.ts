import { Client, Account } from "node-appwrite";
import { env } from "@/env";
const client = new Client();

client
    .setEndpoint(env.NEXT_PUBLIC_APP_WRITE_ENDPOINT)
    .setProject(env.NEXT_PUBLIC_APP_WRITE_PROJECT_ID)
    .setKey(env.APP_WRITE_API_KEY);

