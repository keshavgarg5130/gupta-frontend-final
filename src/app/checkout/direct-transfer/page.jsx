"use client";

import React, { useEffect, useState } from "react";

const BankTransferPage = () => {
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const storedOrder = localStorage.getItem("orderDetails");
        if (storedOrder) {
            setOrderData(JSON.parse(storedOrder));
        }
    }, []);

    if (!orderData) return <p>Loading order details...</p>;

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Bank Transfer Instructions</h1>

            <h2 className="text-lg font-medium mb-2">Cart Items:</h2>
            <ul className="mb-4">
                {orderData.cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} x {item.quantity} — ₹{item.price * item.quantity}
                    </li>
                ))}
            </ul>

            <h2 className="text-lg font-medium mb-2">Total Amount: ₹{orderData.pricing.total}</h2>

            <div className="mt-6 p-4 border rounded">
                <h3 className="font-semibold mb-2">Bank Details:</h3>
                <p>Account Holder Name: Gupta Switchgears</p>
                <p>Account Number: 1234567890</p>
                <p>IFSC Code: ABCD0123456</p>
                <p>Bank Name: HDFC Bank</p>
                <p>UPI ID: gupta@hdfcbank</p>
            </div>

            <p className="text-sm text-gray-600 mt-4">
                ⚠️ Your order will be confirmed only after payment is verified. This may take up to 12 hours. For queries, call/WhatsApp us at +91-9876543210 (9 AM - 6 PM).
            </p>
        </div>
    );
};

export default BankTransferPage;
