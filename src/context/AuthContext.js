"use client"

import { createContext, useState, } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);


    const router = useRouter();
    const logoutUser = async () => {
        try {
            await axios.post(
                'https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/logout',
                {},
                { withCredentials: true }
            );

            // Optional: clear any local state
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    const getUser = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log("JWT Token:", token); // ✅ check if this is logging

            const res = await fetch('https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/auth/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                credentials: 'include', // optional: only needed if you're using cookies
            });

            if (!res.ok) {
                throw new Error(`Failed to fetch user: ${res.status}`);
            }

            const data = await res.json(); // ✅ parse JSON
            console.log("User data:", data); // ✅ debug log

            setUser(data?.user);
        } catch (error) {
            console.error("Error fetching user:", error);
            setUser(null);
        }
    };

    const registerUser = async ({ name, email, password, number }) => {
        try {
            const { data } = await axios.post("https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/users",
                { name, email, password, number })

            if (data?.user) {
                localStorage.setItem('token', data.token)
                router.push('/')
            }
        } catch (error) {
            setError(error?.response?.data?.message)
        }
    }
    const loginUser = async (email, password) => {
        try {
            const { data } = await axios.post("https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/login", {
                email,
                password,
            });


            // Store token in localStorage or cookies
            localStorage.setItem("token", data.token);
            setUser(data.user); // Update user state
            router.push("/"); // Redirect to home page
        } catch (err) {
            setError(err.response?.data?.error || "An unexpected error occurred");
            console.log("Login Error:", err.response?.data);
        }
    };

    return <AuthContext.Provider value={{ user, error, setUser,getUser, logoutUser, registerUser, loginUser }}>
        {children}
    </AuthContext.Provider>
}
export default AuthContext
