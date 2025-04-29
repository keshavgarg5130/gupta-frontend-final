"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import toast from "react-hot-toast";

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
    onForgotPassword: () => void
}

export function LoginModal({ isOpen, onClose, onForgotPassword }: LoginModalProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    if (!isOpen) return null

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch("https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/signup_email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            })
            const data = await response.json();

            if (data.token) {
                localStorage.setItem("token", data.token);
            }

            if (response.ok) {
                // Handle successful login

                toast.success("Logged in successfully")
                onClose()
            } else {
                // Handle login error
                const data = await response.json()
                alert(data.message || "Login failed")
                toast.error(data.message || "Login failed")
            }
        } catch (error) {
            console.error("Login error:", error)
            alert("An error occurred during login")
        } finally {
            setIsLoading(false)
        }
    }

    const handleGoogleLogin = () => {
        const GOOGLE_CLIENT_ID = "357067236710-im66m9iq94g759mqt23va1k9a35seuso.apps.googleusercontent.com";
        const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
        const SCOPE = "openid email profile";

        const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
        url.searchParams.set("client_id", GOOGLE_CLIENT_ID!);
        url.searchParams.set("redirect_uri", REDIRECT_URI!);
        url.searchParams.set("response_type", "code");
        url.searchParams.set("scope", SCOPE);
        url.searchParams.set("access_type", "offline");
        url.searchParams.set("prompt", "consent");
        // Redirect to Google OAuth
        window.location.href = url.toString();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
                    <X size={20}/>
                </button>
                <h2 className="mb-6 text-center text-2xl text-black font-bold">Login/SignUp</h2>
                <Button type="button" className=" bg-blue-700 mt-8 h-12 w-full hover:bg-blue-400"
                        onClick={handleGoogleLogin}>
                    Login with Google
                </Button>
                <div className="mt-8 flex items-center">
                    <Separator className="w-44"/>
                    <span className="mx-2 text-sm text-gray-500">OR</span>
                    <Separator className="w-44"/>
                </div>
                <form onSubmit={handleEmailLogin} className="space-y-4">
                    <div className="space-y-2 text-black">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="space-y-2 text-black">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login with Email"}
                    </Button>

                    <div className="text-center">
                        <button type="button" onClick={onForgotPassword}
                                className="text-sm text-blue-600 hover:underline">
                            Forgot Password?
                        </button>
                    </div>
                </form>


            </div>
        </div>
    )
}

