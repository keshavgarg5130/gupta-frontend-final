'use client';
import {useContext, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import AuthContext from "../../../context/AuthContext"; // or from 'next/router' if using Pages Router

const AuthCallback = () => {
    const router = useRouter();
    const {getUser} = useContext(AuthContext);

    useEffect(() => {
        const url = new URL(window.location.href);
        const token = url.searchParams.get("token");

        if (token) {
            localStorage.setItem("token", token);

            // Optional: also store in non-HttpOnly cookie
            document.cookie = `token=${token}; path=/`;
            getUser();
            // Redirect to dashboard or homepage
            router.push("/");
        } else {
            console.error("No token in URL.");
            router.push("/login?error=missing_token");
        }
    }, []);

    return <p>Signing you in...</p>;
};

export default AuthCallback;
