import { NextRequest } from "next/server";

export async function createContext({ req }: { req : NextRequest }) {
    return { req };
}

export type Context = Awaited<ReturnType<typeof createContext>>