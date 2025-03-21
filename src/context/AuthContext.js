"use client"

import { createContext, useState, } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const router = useRouter();

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

    return <AuthContext.Provider value={{ user, error, setUser, registerUser, loginUser }}>
        {children}
    </AuthContext.Provider>
}
export default AuthContext
