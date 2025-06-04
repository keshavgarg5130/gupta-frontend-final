"use client";

import React, {useContext, useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartContext from "../../context/CartContext";
import AuthContext from "../../context/AuthContext";
import {LoginModal} from "@/app/ui/auth/login-dialog";
import {ForgotPasswordModal} from "@/app/ui/auth/forgot-password-modal";

const Cart = () => {
    const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);
    const {user, getUser} = useContext(AuthContext);
    useEffect(() => {
        getUser();
    }, []);
    const router = useRouter();

    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false)

    const handleForgotPassword = () => {
        setShowLoginModal(false)
        setShowForgotPasswordModal(true)
    }


    const [shippingMethod, setShippingMethod] = useState("self");

    const FREE_SHIPPING_THRESHOLD = 5000;
    const DOORSTEP_SHIPPING_FEE = 500;

    const increaseQty = (cartItem) => {
        const newQty = cartItem?.quantity + 1;
        if (newQty > Number(cartItem.stock)) return;

        const item = { ...cartItem, quantity: newQty };
        addItemToCart(item);
    };

    const decreaseQty = (cartItem) => {
        const newQty = cartItem?.quantity - 1;
        if (newQty <= 0) return;

        const item = { ...cartItem, quantity: newQty };
        addItemToCart(item);
    };

    const amountWithoutTax = cart?.cartItems?.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );

    const taxAmount = (amountWithoutTax * 0.18).toFixed(2);

    const shippingCharge =
        shippingMethod === "doorstep" && amountWithoutTax < FREE_SHIPPING_THRESHOLD
            ? DOORSTEP_SHIPPING_FEE
            : 0;

    const totalAmount = (
        Number(amountWithoutTax) +
        Number(taxAmount) +
        Number(shippingCharge)
    ).toFixed(2);

    const amountToFreeShipping =
        shippingMethod === "doorstep" && amountWithoutTax < FREE_SHIPPING_THRESHOLD
            ? FREE_SHIPPING_THRESHOLD - amountWithoutTax
            : 0;

    const progress = Math.min((amountWithoutTax / FREE_SHIPPING_THRESHOLD) * 100, 100);

    const handleCheckout = () => {
        if (!user) {
            setShowLoginModal(true);
            return;
        }

        router.push(`/checkout?method=${shippingMethod}`);
    };

    return (
        <>
            <section className="py-5 sm:py-7 bg-blue-100">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-2">
                        {cart?.cartItems?.length || 0} Item(s) in Cart
                    </h2>
                </div>
            </section>

            {cart?.cartItems?.length > 0 && (
                <section className="py-10">
                    <div className="container max-w-screen-xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <main className="md:w-3/4">
                                <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                                    {cart?.cartItems?.map((cartItem) => (
                                        <div key={cartItem.name}>
                                            <div className="flex flex-wrap lg:flex-row gap-5 mb-4">
                                                <div className="w-full lg:w-2/5 xl:w-2/4">
                                                    <figure className="flex leading-5">
                                                        <div>
                                                            <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                                                                <Image height={100} width={100} src={cartItem.image} alt={cartItem.name} />
                                                            </div>
                                                        </div>
                                                        <figcaption className="ml-3">
                                                            <p className="hover:text-blue-600">
                                                                {cartItem.name}
                                                            </p>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                                <div className="w-24">
                                                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                                        <button
                                                            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer"
                                                            onClick={() => decreaseQty(cartItem)}
                                                        >
                                                            <span className="m-auto text-2xl font-thin">−</span>
                                                        </button>
                                                        <input
                                                            type="number"
                                                            className="text-center w-full bg-gray-300 font-semibold text-md text-gray-900 outline-none"
                                                            value={cartItem.quantity}
                                                            readOnly
                                                        />
                                                        <button
                                                            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                                            onClick={() => increaseQty(cartItem)}
                                                        >
                                                            <span className="m-auto text-2xl font-thin">+</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="leading-5">
                                                        <p className="font-semibold">
                                                            ₹{(cartItem.price * cartItem.quantity).toFixed(2)}
                                                        </p>
                                                        <small className="text-gray-400">
                                                            ₹{cartItem.price} / per item
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="flex-auto">
                                                    <div className="float-right">
                                                        <a
                                                            className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                                                            onClick={() =>
                                                                deleteItemFromCart(cartItem?.productId)
                                                            }
                                                        >
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="my-4" />
                                        </div>
                                    ))}
                                </article>
                            </main>
                            <aside className="md:w-1/4">
                                <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                                    <div className="mb-5">
                                        <label className="block text-gray-700 font-medium mb-2">Free delivery above ₹5000</label>
                                        <label className="block text-gray-700 font-medium mb-2">Shipping Method:</label>
                                        <div className="space-y-2">
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name="shipping"
                                                    value="self"
                                                    checked={shippingMethod === "self"}
                                                    onChange={() => setShippingMethod("self")}
                                                    className="form-radio"
                                                />
                                                <span>Self Ship (₹0)</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name="shipping"
                                                    value="doorstep"
                                                    checked={shippingMethod === "doorstep"}
                                                    onChange={() => setShippingMethod("doorstep")}
                                                    className="form-radio"
                                                />
                                                <span>
                                                    Delivery on Doorstep{" "}
                                                    {amountWithoutTax < FREE_SHIPPING_THRESHOLD
                                                        ? `(₹${DOORSTEP_SHIPPING_FEE})`
                                                        : `(Free)`}
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <ul className="mb-5">
                                    <li className="flex justify-between text-gray-600 mb-1">
                                            <span>Amount before Tax:</span>
                                            <span>₹{amountWithoutTax.toFixed(2)}</span>
                                        </li>
                                        <li className="flex justify-between text-gray-600 mb-1">
                                            <span>TAX (18%):</span>
                                            <span>₹{taxAmount}</span>
                                        </li>
                                        <li className="flex justify-between text-gray-600 mb-1">
                                            <span>Shipping:</span>
                                            <span>₹{shippingCharge}</span>
                                        </li>
                                        <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                                            <span>Total price:</span>
                                            <span>₹{totalAmount}</span>
                                        </li>
                                    </ul>

                                    {/* Free Shipping Progress Message */}
                                    {shippingMethod === "doorstep" && amountToFreeShipping > 0 && (
                                        <div className="mb-4">
                                            <p className="text-sm text-red-600 mb-1">
                                                Add ₹{amountToFreeShipping.toFixed(0)} more to get <strong>free doorstep delivery</strong>
                                            </p>
                                            <div className="w-full h-3 bg-red-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-green-500 transition-all duration-300"
                                                    style={{ width: `${progress}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        onClick={handleCheckout}
                                        className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-themeBlue border border-transparent rounded-md hover:bg-green-700 cursor-pointer"
                                    >
                                        Proceed to Checkout
                                    </button>
                                    <LoginModal
                                        isOpen={showLoginModal}
                                        onClose={() => setShowLoginModal(false)}
                                        onForgotPassword={handleForgotPassword}
                                    />

                                    {/* Forgot Password Modal */}
                                    <ForgotPasswordModal
                                        isOpen={showForgotPasswordModal}
                                        onClose={() => {
                                            setShowForgotPasswordModal(false);
                                            setShowLoginModal(true);
                                        }}
                                    />

                                    <Link
                                        href="/"
                                        className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-themeBlue bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                                    >
                                        Back to shop
                                    </Link>
                                </article>
                            </aside>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Cart;
