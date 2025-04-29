"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {LoginModal} from "@/app/ui/auth/login-dialog";
import {ForgotPasswordModal} from "@/app/ui/auth/forgot-password-modal";



export function LoginButton() {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false)

    const handleForgotPassword = () => {
        setShowLoginModal(false)
        setShowForgotPasswordModal(true)
    }

    return (
        <>
            <Button onClick={() => setShowLoginModal(true)}>Login</Button>

            <LoginModal
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onForgotPassword={handleForgotPassword}
            />

            <ForgotPasswordModal
                isOpen={showForgotPasswordModal}
                onClose={() => {
                    setShowForgotPasswordModal(false)
                    setShowLoginModal(true)
                }}
            />
        </>
    )
}

