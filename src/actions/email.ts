"use server";
import nodemailer from "nodemailer";

export async function sendEmail({
                                    to,
                                    subject,
                                    text,
                                }: {
    to: string;
    subject: string;
    text: string;
}) {
    if (!process.env.SMTP_HOST) {
        throw new Error("SMTP_HOST environment variable is not set");
    }
    if (!process.env.SMTP_PORT) {
        throw new Error("SMTP_PORT environment variable is not set");
    }
    if (!process.env.SMTP_USER) {
        throw new Error("SMTP_USER environment variable is not set");
    }
    if (!process.env.SMTP_PASS) {
        throw new Error("SMTP_PASS environment variable is not set");
    }
    if (!process.env.EMAIL_FROM) {
        throw new Error("EMAIL_FROM environment variable is not set");
    }

    // Create a reusable transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: parseInt(process.env.SMTP_PORT, 10) === 465, // true for port 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: to.toLowerCase().trim(),
        subject: subject.trim(),
        text: text.trim(),
    };

    try {
        const info = await transporter.sendMail(mailOptions);

        return {
            success: true,
            messageId: info.messageId,
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            message: "Failed to send email. Please try again later.",
        };
    }
}
