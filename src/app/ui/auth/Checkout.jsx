"use client";

import React, {useContext, useEffect, useState} from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import * as z from "zod";
import CartContext from "../../../context/CartContext";
import AuthContext from "../../../context/AuthContext";
import { toast } from 'react-hot-toast';

const Checkout = () => {
    const router = useRouter();
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const searchParams = useSearchParams();
    const shippingMethod = searchParams.get("method") || "self";
    const { cart, addItemToCart, deleteItemFromCart } = useContext(CartContext);
    const {user, getUser} = useContext(AuthContext);
    useEffect(() => {
        getUser();
    }, []);
    const userEmail = user?.email
    console.log(user)
    console.log(userEmail)
    const FREE_SHIPPING_THRESHOLD = 5000;
    const DOORSTEP_SHIPPING_FEE = 500;

    const [gstInvoice, setGstInvoice] = useState(false);

    const initialFormState = {
        mobile: "",
        altMobile: "",
        pincode: "",
        state: "",
        city: "",
        country: "",
        address: "",
        landmark: "",
        gstNumber: "",
        businessName: "",
        businessPhone: "",
        billingAddress: "",
        billingCity: "",
        billingState: "",
        billingCountry: "",
        billingPincode: "",
        billingLandmark: "",
    };

    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState({});

    // Zod schemas
    const baseSchema = z.object({
        mobile: z
            .string()
            .regex(/^[6-9]\d{9}$/, "Invalid mobile number")
            .nonempty("Mobile number is required"),
        altMobile: z
            .string()
            .regex(/^[6-9]\d{9}$/, "Invalid alternate mobile number")
            .nonempty("Alternate mobile number is required"),
    });

    const doorstepSchema = z.object({
        pincode: z.string().regex(/^\d{6}$/, "Invalid pincode").nonempty("Pincode is required"),
        state: z.string().nonempty("State is required"),
        city: z.string().nonempty("City is required"),
        country: z.string().nonempty("Country is required"),
        address: z.string().nonempty("Address is required"),
        landmark: z.string().nonempty("Landmark is required"),
    });

    const gstSchema = z.object({
        gstNumber: z
            .string()
            .regex(
                /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                "Invalid GST Number"
            )
            .nonempty("GST Number is required"),
        businessName: z.string().nonempty("Business Name is required"),
        businessPhone: z
            .string()
            .regex(/^[6-9]\d{9}$/, "Invalid Business Phone")
            .nonempty("Business Phone is required"),
        billingAddress: z.string().nonempty("Billing Address is required"),
        billingCity: z.string().nonempty("Billing City is required"),
        billingState: z.string().nonempty("Billing State is required"),
        billingCountry: z.string().nonempty("Billing Country is required"),
        billingPincode: z.string().regex(/^\d{6}$/, "Invalid Billing Pincode").nonempty("Billing Pincode is required"),
        billingLandmark: z.string().nonempty("Billing Landmark is required"),
    });

    const validate = () => {
        let schema = baseSchema;
        if (shippingMethod === "doorstep") {
            schema = schema.merge(doorstepSchema);
        }
        if (gstInvoice) {
            schema = schema.merge(gstSchema);
        }

        const result = schema.safeParse(form);

        if (!result.success) {
            // Map Zod errors to a flat errors object
            const zodErrors = {};
            for (const issue of result.error.issues) {
                zodErrors[issue.path[0]] = issue.message;
            }
            setErrors(zodErrors);
            return false;
        }

        setErrors({});
        return true;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const  handleContinueToPay = async () => {
        const isValid = validate();
        if (!isValid) {
            alert("Please fill all the required fields");
            return;
        }
        setShowPaymentModal(true);
    };
    const handlePayment = async (method) => {
        console.log("Payment method selected:", method);

        try {
            // First show loading state
            toast.loading("Processing payment...");

            const payload = {
                userEmail,
                shippingMethod,
                PaymentMethod: method,
                gstInvoice,
                userDetails: {
                    mobile: form.mobile,
                    altMobile: form.altMobile,
                },
                shippingDetails: shippingMethod === "doorstep" ? {
                    pincode: form.pincode,
                    state: form.state,
                    city: form.city,
                    country: form.country,
                    address: form.address,
                    landmark: form.landmark,
                } : null,
                gstDetails: gstInvoice ? {
                    gstNumber: form.gstNumber,
                    businessName: form.businessName,
                    businessPhone: form.businessPhone,
                    billingAddress: form.billingAddress,
                    billingCity: form.billingCity,
                    billingState: form.billingState,
                    billingCountry: form.billingCountry,
                    billingPincode: form.billingPincode,
                    billingLandmark: form.billingLandmark,
                } : null,
                cartItems: cart?.cartItems || [],
                pricing: {
                    amount: amountWithoutTax,
                    tax: taxAmount,
                    shipping: shippingCharge,
                    total: totalAmount,
                },
            };

            const res = await fetch("https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();

            // Dismiss loading toast
            toast.dismiss();

            // Show success message
            toast.success("Payment processed successfully!");

            // Redirect based on payment method
            if (method === "bank") {
                localStorage.setItem("orderDetails", JSON.stringify(payload));
                router.push("/checkout/direct-transfer");
            } else if (method === "phonepe") {
                router.push("/payment-gateway/phonepe");
            } else if (method === "cod") {
                router.push("/order-success/cod-confirmation");
            }

            setShowPaymentModal(false);
        } catch (error) {
            console.error("Checkout error:", error);
            // Dismiss any existing toasts
            toast.dismiss();
            // Show error message
            toast.error("Something went wrong while processing your order.");
        }
    };
    const increaseQty = (item) => {
        const newQty = item.quantity + 1;
        if (newQty > Number(item.stock)) return;
        addItemToCart({ ...item, quantity: newQty });
    };

    const decreaseQty = (item) => {
        const newQty = item.quantity - 1;
        if (newQty <= 0) return;
        addItemToCart({ ...item, quantity: newQty });
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

    return (
        <section className="py-10 px-4 max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8">
            {/* LEFT */}
            <div className="md:w-3/4 space-y-6">
                <div>
                    <label className="flex items-center gap-2 text-blue-700 font-medium">
                        <input
                            type="checkbox"
                            checked={gstInvoice}
                            onChange={() => setGstInvoice(!gstInvoice)}
                        />
                        Get GST Invoice(claim Input tax credit on your purchase)
                    </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <input
                            name="mobile"
                            placeholder="Mobile Number"
                            value={form.mobile}
                            onChange={handleInputChange}
                            className={`border p-2 rounded ${
                                errors.mobile ? "border-red-500" : ""
                            }`}
                        />
                        {errors.mobile && (
                            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <input
                            name="altMobile"
                            placeholder="Alternate Mobile Number"
                            value={form.altMobile}
                            onChange={handleInputChange}
                            className={`border p-2 rounded ${
                                errors.altMobile ? "border-red-500" : ""
                            }`}
                        />
                        {errors.altMobile && (
                            <p className="text-red-500 text-sm mt-1">{errors.altMobile}</p>
                        )}
                    </div>
                </div>

                {shippingMethod === "doorstep" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { name: "pincode", placeholder: "Pincode" },
                            { name: "state", placeholder: "State" },
                            { name: "city", placeholder: "City" },
                            { name: "country", placeholder: "Country" },
                            { name: "address", placeholder: "Address", fullWidth: true },
                            { name: "landmark", placeholder: "Landmark", fullWidth: true },
                        ].map(({ name, placeholder, fullWidth }) => (
                            <div
                                key={name}
                                className={`flex flex-col ${
                                    fullWidth ? "md:col-span-2" : ""
                                }`}
                            >
                                <input
                                    name={name}
                                    placeholder={placeholder}
                                    value={(form)[name]}
                                    onChange={handleInputChange}
                                    className={`border p-2 rounded ${
                                        errors[name] ? "border-red-500" : ""
                                    }`}
                                />
                                {errors[name] && (
                                    <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {gstInvoice && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { name: "gstNumber", placeholder: "GST Number" },
                            { name: "businessName", placeholder: "Business Name" },
                            { name: "businessPhone", placeholder: "Business Phone" },
                            { name: "billingAddress", placeholder: "Billing Address", fullWidth: true },
                            { name: "billingCity", placeholder: "City" },
                            { name: "billingState", placeholder: "State" },
                            { name: "billingCountry", placeholder: "Country" },
                            { name: "billingPincode", placeholder: "Pincode" },
                            { name: "billingLandmark", placeholder: "Landmark", fullWidth: true },
                        ].map(({ name, placeholder, fullWidth }) => (
                            <div
                                key={name}
                                className={`flex flex-col ${
                                    fullWidth ? "md:col-span-2" : ""
                                }`}
                            >
                                <input
                                    name={name}
                                    placeholder={placeholder}
                                    value={(form)[name]}
                                    onChange={handleInputChange}
                                    className={`border p-2 rounded ${
                                        errors[name] ? "border-red-500" : ""
                                    }`}
                                />
                                {errors[name] && (
                                    <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Cart Items */}
                <div className="space-y-4">
                    {cart?.cartItems?.map((item) => (
                        <div
                            key={item.productId}
                            className="border p-4 rounded flex flex-col sm:flex-row gap-4 items-center bg-yellow-50"
                        >
                            <Image
                                src={item.image}
                                width={60}
                                height={60}
                                alt={item.name}
                                className="rounded"
                            />
                            <div className="flex-1">
                                <p className="font-medium text-lg text-blue-800">{item.name}</p>
                                <p className="text-sm text-gray-600">
                                    ₹{item.price} x {item.quantity}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => decreaseQty(item)}
                                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                                >
                                    -
                                </button>
                                <span className="font-semibold text-lg">{item.quantity}</span>
                                <button
                                    onClick={() => increaseQty(item)}
                                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                                >
                                    +
                                </button>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <p className="font-semibold text-blue-800">
                                    ₹{(item.price * item.quantity).toFixed(2)}
                                </p>
                                <button
                                    onClick={() => deleteItemFromCart(item.productId)}
                                    className="text-red-600 hover:underline text-sm"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT */}
            <aside className="md:w-1/4 border p-4 rounded space-y-4 bg-white shadow-sm flex flex-col">
                <ul className="space-y-2 flex-grow">
                    <li className="flex justify-between text-blue-700 font-medium">
                        <span>Amount:</span>
                        <span>₹{(amountWithoutTax || 0).toFixed(2)}</span>
                    </li>
                    <li className="flex justify-between text-green-700 font-medium">
                        <span>Tax (18%):</span>
                        <span>₹{taxAmount}</span>
                    </li>
                    <li className="flex justify-between text-yellow-700 font-medium">
                        <span>Shipping:</span>
                        <span>₹{shippingCharge}</span>
                    </li>
                    <li className="flex justify-between font-bold text-lg border-t pt-2 text-black">
                        <span>Total:</span>
                        <span>₹{totalAmount}</span>
                    </li>
                </ul>

                <div className="space-y-3">
                    <button
                        onClick={handleContinueToPay}
                        className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
                    >
                        Continue to Pay
                    </button>
                    <Link
                        href="/cart"
                        className="block w-full text-center border border-gray-300 p-3 rounded hover:bg-gray-100 transition text-blue-700 font-medium"
                    >
                        Back to Cart
                    </Link>
                </div>
            </aside>
            {showPaymentModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={() => setShowPaymentModal(false)}
                >
                    <div
                        className="bg-white rounded-lg p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-semibold mb-4 text-center">Choose Payment Method</h2>

                        <div className="space-y-3">
                            <button
                                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePayment("bank");
                                }}
                            >
                                Direct Bank Transfer or UPI (0% Fee) (Recommended)
                            </button>

                            <button
                                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePayment("phonepe");
                                }}
                            >
                                PhonePe Payment Gateway (2% Fee) Supports Credit Cards
                            </button>

                            {shippingMethod === "doorstep" && (
                                <button
                                    className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePayment("cod");
                                    }}
                                >
                                    Cash on Delivery (1% Fee)
                                </button>
                            )}
                        </div>

                        <button
                            className="mt-4 text-sm text-gray-500 hover:underline block mx-auto"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowPaymentModal(false);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Checkout;