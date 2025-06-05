"use client";

import React, { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { product } from "@/app/interfaces/product";
import CartContext from "@/context/CartContext";
import toast from "react-hot-toast";
import eventEmitter from "../lib/emiter";

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
        });
        toast.success(toastMessage);
        eventEmitter.emit("itemAdded", "itemAdded");
    };

    return (
        <button
            onClick={addToCartHandler}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 hover:bg-green-600 hover:text-white text-sm font-medium uppercase tracking-wide transition-colors duration-300 shadow-sm hover:shadow-md"
        >
            <ShoppingCartIcon className="w-5 h-5" />
            <span>Add to Cart</span>
        </button>
    );
};

export default AddToCartButton;
