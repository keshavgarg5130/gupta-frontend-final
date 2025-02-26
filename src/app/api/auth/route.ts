import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            if (!user.email) {
                // If email is undefined, throw an error or handle appropriately
                console.error("User email is undefined during sign-in.");
                return false;
            }

            // Check if the user already exists
            const existingUser = await prisma.user.findUnique({
                where: { email: user.email },
            });

            // Automatically sign up the user if they don't exist
            if (!existingUser) {
                await prisma.user.create({
                    data: {
                        email: user.email, // Ensure email is always a string
                        name: user.name ?? "Default Name"// Name can be null if not provided
                    },
                });
            }

            return true;
        },
    },
    pages: {
        signIn: "/login",
    },
});

export { handler as GET, handler as POST };
