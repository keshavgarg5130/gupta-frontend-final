import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    const { phoneNumber } = await request.json();
    const twilio = require('twilio');
    const accountSid = process.env.TWILIO_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = new twilio(accountSid, authToken);

    if (!phoneNumber) {
        return NextResponse.json({ error: "Phone number is required" }, { status: 400 });
    }

    // Generate a random OTP (6 digits)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save the OTP to the database (or cache it, e.g., in Redis)
    await prisma.oTP.create({
        data: {
            phoneNumber,
            otp,
            expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5-minute expiration
        },
    });

    // Send OTP (e.g., via Twilio or another SMS provider)
    client.messages.create({
        body: `Your OTP for GUPTA SWITCHGEARS login is: ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: `+91${phoneNumber}`
    })

        .then((message: { sid: string }) => {
            console.log('Message sent successfully! SID:', message.sid);
        })
        .catch((error: Error) => {
            console.error('Error sending message:', error);
        });
    console.log(`Sending OTP ${otp} to phone number ${phoneNumber}`);

    return NextResponse.json({ success: true });
}
