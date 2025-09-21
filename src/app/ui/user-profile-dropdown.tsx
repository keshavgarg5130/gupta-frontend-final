"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useContext } from "react"
import AuthContext from "@/context/AuthContext";


export function UserDropdownMenu(user: any) {
    const router = useRouter()
    const { logoutUser } = useContext(AuthContext)
    const userName = user?.user?.name || user?.user?.email?.slice(0, 10) || "User"

    const handleLogout = () => {
        logoutUser()
        router.push("/") // Optional: Redirect to home after logout
    }

    const handleMyOrders = () => {
        router.push("/my-orders") // Make sure this matches your orders page route
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='default' className="bg-green-600">{`Welcome ${userName}`}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/*<DropdownMenuGroup>*/}
                {/*    <DropdownMenuItem onClick={handleMyOrders}>*/}
                {/*        My Orders*/}
                {/*        <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>*/}
                {/*    </DropdownMenuItem>*/}
                {/*</DropdownMenuGroup>*/}
                {/*<DropdownMenuSeparator />*/}
                <DropdownMenuItem onClick={handleLogout}>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
