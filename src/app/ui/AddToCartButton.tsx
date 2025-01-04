"use client";

import React, { useContext } from 'react'
import { ShoppingCartIcon } from "lucide-react";
import { product } from "@/app/interfaces/product";
import CartContext from "@/context/CartContext";
import toast from "react-hot-toast";
import eventEmitter from '../lib/emiter';

const AddToCartButton = (product: product) => {
    const { addItemToCart } = useContext(CartContext);
    const toastMessage = "Item added successfully.";

    const addToCartHandler = () => {
        addItemToCart({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0].url,
            mPrice: product.mPrice,
            quantity: 1,
        })
        toast.success(toastMessage)
        eventEmitter.emit('itemAdded', 'itemAdded');
    }
    return (
        <button onClick={addToCartHandler}>
            <ShoppingCartIcon />
        </button>
    )
}
export default AddToCartButton
