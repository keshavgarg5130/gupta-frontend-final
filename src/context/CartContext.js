"use client"

import {createContext,  useState, useEffect} from "react";
import {useRouter} from "next/navigation";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const router = useRouter

    useEffect(() => {setCartToState()},[])


    const setCartToState = () => {
        setCart(
            localStorage.getItem('cart')
                ? JSON.parse(localStorage.getItem('cart'))
                : []
        )
    }

    const addItemToCart = async ({
                                     productId,
                                     name,
                                     mPrice,
                                     price,
                                     image,
                                     quantity = 1,
                                 }) => {
        const item = {
            productId,
            name,
            mPrice,
            price,
            image,
            quantity,
        };

        // Ensure cartItems is initialized properly
        const cartItems = cart?.cartItems || [];

        // Check if the item already exists in the cart
        const isItemExist = cartItems.find((i) => i.productId === productId);

        let newCartItems;

        if (isItemExist) {
            // If item exists, update its quantity
            newCartItems = cartItems.map((i) =>
                i.productId === productId ? item : i
            );
        } else {
            // If item does not exist, add it to the cart
            newCartItems = [...cartItems, item];
        }

        // Update localStorage and state
        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
        setCartToState();
    };

    const deleteItemFromCart = (id) => {
        const newCartItems = cart?.cartItems?.filter((e)=> e.productId !== id)
        localStorage.setItem("cart", JSON.stringify({cartItems: newCartItems}));
        setCartToState()
    }

    return <CartContext.Provider value={{ cart, addItemToCart, deleteItemFromCart }}>
        {children}
    </CartContext.Provider>
}

export default CartContext;