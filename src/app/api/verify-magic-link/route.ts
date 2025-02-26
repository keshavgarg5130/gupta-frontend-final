import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
        return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login?error=invalid-token`);
    }

    const magicLink = await prisma.magicLink.findFirst({
        where: {
            token,
            expiresAt: {
                gt: new Date()
            }
        }
    });

    if (!magicLink) {
        return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login?error=expired-token`);
    }

    // Set authentication cookie or session here

    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/dashboard`);
}
