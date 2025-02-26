import { createContext, useState, useEffect, useContext, ReactNode } from "react";
// @ts-ignore
import Cookies from "js-cookie"
// @ts-ignore
import jwtDecode from "jwt-decode"
interface User {
    id: string;
    email: string;
    name?: string;
}

interface AuthContextType {
    user: User | null;
    isUserLoggedIn: () => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
            try {
                const decodedUser: User = jwtDecode(token);
                setUser(decodedUser);
            } catch (error) {
                console.error("Invalid token", error);
            }
        }
    }, []);

    const isUserLoggedIn = () => !!user;

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isUserLoggedIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
