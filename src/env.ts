import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        APP_WRITE_ENDPOINT: z.string().url().default("https://cloud.appwrite.io/v1"),
        APP_WRITE_PROJECT_ID: z.string().min(1),
    },
    client: {
    },
    // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
    runtimeEnv: {
        APP_WRITE_ENDPOINT: process.env.APP_WRITE_ENDPOINT,
        APP_WRITE_PROJECT_ID: process.env.APP_WRITE_PROJECT_ID,
    },
    // For Next.js >= 13.4.4, you only need to destructure client variables:
    // experimental__runtimeEnv: {
    //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
    // }
});