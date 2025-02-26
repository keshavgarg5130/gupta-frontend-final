import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { email } = await request.json();
    const SMTP_HOST = process.env.SMTP_HOST
    const SMTP_PORT = process.env.SMTP_PORT
    const SMTP_USER = process.env.SMTP_USER
    const SMTP_PASSWORD = process.env.SMTP_PASSWORD

    if (!email) {
        return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Generate a unique magic link token
    const token = Math.random().toString(36).substring(2);

    // Save the token to the database
    await prisma.magicLink.create({
        data: {
            email,
            token,
            expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5-minute expiration
        },
    });

    // Updated magic link URL to use the verification endpoint
    const magicLinkUrl = `${process.env.NEXTAUTH_URL}/api/verify-magic-link?token=${token}`;

    try {
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT),
            secure: false,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASSWORD,
            },
        } as nodemailer.TransportOptions);

        const mailOptions = {
            from: SMTP_USER,
            to: email,
            subject: 'Login Link for Gupta Switchgears',
            html: `
            <h1>Welcome to Gupta Switchgears</h1>
            <p>Click the link below to log in to your account:</p>
            <a href="${magicLinkUrl}" style="padding: 12px 24px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 6px; display: inline-block; margin: 16px 0;">Login to Your Account</a>
            <p>This link will expire in 5 minutes.</p>
            <p>If you didn't request this login link, please ignore this email.</p>
            `
        }

        await transporter.sendMail(mailOptions)
        return NextResponse.json({ success: true, message: 'Magic link sent successfully!' })
    }
    catch(error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to send magic link" }, { status: 500 });
    }
}
