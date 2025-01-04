"use client";

import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";


const Login = () => {
    const { loginUser, error } = useContext(AuthContext);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(formData.email, formData.password);
    };

    return (
        <div className="w-full flex justify-center items-center flex-col min-h-[500px]">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/3">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="p-2 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="p-2 border rounded"
                />
                <button type="submit" className="bg-themeBlue text-white p-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
