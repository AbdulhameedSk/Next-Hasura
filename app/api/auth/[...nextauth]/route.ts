import NextAuth from "next-auth";
import type { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/lib/auth";

const handler = (req: NextRequest, res: NextResponse) =>
  NextAuth(req as any, res as any, authOptions);

export { handler as GET, handler as POST };