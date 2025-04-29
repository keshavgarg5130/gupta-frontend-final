"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ForgotPasswordModalProps {
    isOpen: boolean
    onClose: () => void
}

export function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [step, setStep] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    if (!isOpen) return null

    const handleRequestOTP = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch("https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/forgot_password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            })

            if (response.ok) {
                setStep(2)
            } else {
                let message = "Failed to send OTP"
                try {
                    const data = await response.json()
                    message = data.message || message
                } catch (e) {
                    console.error("Failed to parse JSON:", e)
                }
                alert(message)
            }
        } catch (error) {
            console.error("OTP request error:", error)
            alert("An error occurred while requesting OTP")
        } finally {
            setIsLoading(false)
        }
    }

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch("https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/reset_password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    otp,
                    newPassword,

                }),
            })

            if (response.ok) {
                alert("Password reset successful")
                onClose()
            } else {
                const data = await response.json()
                alert(data.message || "Password reset failed")
                setStep(2)
            }
        } catch (error) {
            console.error("Password reset error:", error)
            alert("An error occurred during password reset")
            setStep(1)
        } finally {
            setIsLoading(false)
            setStep(2)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
                    <X size={20} />
                </button>

                <h2 className="mb-6 text-center text-2xl font-bold text-black">Reset Password</h2>

                {step === 1 ? (
                    <form onSubmit={handleRequestOTP} className="space-y-4">
                        <div className="space-y-2 text-black">
                            <Label htmlFor="reset-email">Email</Label>
                            <Input
                                id="reset-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Sending..." : "Send OTP"}
                        </Button>
                    </form>
                ) : (
                    <form onSubmit={handleResetPassword} className="space-y-4">
                        <div className="space-y-2 text-black">
                            <Label htmlFor="otp">6-Digit OTP</Label>
                            <Input
                                id="otp"
                                type="text"
                                value={otp}
                                onChange={(e) => {
                                    // Only allow numbers and max 6 digits
                                    const value = e.target.value.slice(0, 6)
                                    setOtp(value)
                                }}
                                placeholder="Enter 6-digit OTP"
                                required
                                maxLength={6}

                            />
                        </div>

                        <div className="space-y-2 text-black">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input
                                id="new-password"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter new password"
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Resetting..." : "Reset Password"}
                        </Button>

                    </form>
                )}
            </div>
        </div>
    )
}

