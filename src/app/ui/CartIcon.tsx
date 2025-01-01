'use client'

import { useEffect, useState } from "react"
import eventEmitter from "../lib/emiter"

const CartIcon = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const eventHandler = () => {
            const cart = localStorage.getItem('cart')
            if (cart) {
                setCount(JSON.parse(cart).cartItems.length)
            }
        }
        eventHandler();
        eventEmitter.on('itemAdded', eventHandler);
        return (() => {
            eventEmitter.off('itemAdded', eventHandler)
        })
    }, [])

    return (
        <a className="h-full pt-2 flex items-center justify-center" href="/cart">
            <div className="w-30px relative">
                <img src="/cartIcon.png" className="h-[30px] w-[30px]" />
                <div className="absolute text-xs h-[21px] w-[21px] rounded-full -top-2 -right-2 z-50 bg-themeBlue border-white border flex justify-center items-center">{count}</div>
            </div>
        </a>
    )
}

export default CartIcon
