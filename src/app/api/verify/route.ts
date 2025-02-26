import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    const { phoneNumber, otp } = await request.json();

    if (!phoneNumber || !otp) {
        return NextResponse.json({ error: "Phone number and OTP are required" }, { status: 400 });
    }

    // Find the most recent OTP for this phone number
    const otpRecord = await prisma.oTP.findFirst({
        where: {
            phoneNumber,
            otp,
            expiresAt: {
                gt: new Date()
            }
        },

    });

    if (!otpRecord) {
        return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
    }

    // Delete the used OTP
    await prisma.oTP.delete({
        where: {
            id: otpRecord.id
        }
    });

    return NextResponse.json({ success: true });
}
