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

    if (!orderData) return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-lg">Loading order details...</p>
        </div>
    );

    const subtotal = orderData.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const gstAmount = subtotal * 0.18;
    const totalAmount = subtotal + gstAmount + (orderData.pricing.shipping || 0);

    return (
        <div className="p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-blue-800 mb-6">Bank Transfer Payment Instructions</h1>

                {/* Order Summary */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">Order Summary</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {orderData.cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{item.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Shipping Information */}
                {orderData.shippingDetails ? (
                    <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                        <h2 className="text-xl font-semibold mb-3 text-green-800">Shipping Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-medium text-green-700 mb-2">Delivery Address</h3>
                                <ul className="space-y-1">
                                    <li><strong>Address:</strong> {orderData.shippingDetails.address}</li>
                                    <li><strong>Landmark:</strong> {orderData.shippingDetails.landmark}</li>
                                    <li><strong>City:</strong> {orderData.shippingDetails.city}</li>
                                    <li><strong>State:</strong> {orderData.shippingDetails.state}</li>
                                    <li><strong>Pincode:</strong> {orderData.shippingDetails.pincode}</li>
                                    <li><strong>Country:</strong> {orderData.shippingDetails.country}</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium text-green-700 mb-2">Contact Information</h3>
                                <ul className="space-y-1">
                                    <li><strong>Mobile:</strong> {orderData.userDetails.mobile}</li>
                                    <li><strong>Alternate Mobile:</strong> {orderData.userDetails.altMobile}</li>
                                    <li><strong>Shipping Method:</strong> Doorstep Delivery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h2 className="text-xl font-semibold mb-3 text-blue-800">Shipping Information</h2>
                        <p className="text-blue-700">
                            <strong>Shipping Method:</strong> Self Pickup
                        </p>
                        <p className="mt-2 text-sm text-blue-600">
                            Please contact us to arrange pickup after payment verification.
                        </p>
                    </div>
                )}

                {/* Payment Breakdown */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">Payment Breakdown</h2>
                    <div className="grid grid-cols-2 gap-4 max-w-md">
                        <div className="text-gray-600">Subtotal:</div>
                        <div className="text-right">₹{subtotal.toFixed(2)}</div>

                        <div className="text-gray-600">GST (18%):</div>
                        <div className="text-right">₹{gstAmount.toFixed(2)}</div>

                        {orderData.pricing.shipping > 0 && (
                            <>
                                <div className="text-gray-600">Shipping:</div>
                                <div className="text-right">₹{orderData.pricing.shipping.toFixed(2)}</div>
                            </>
                        )}

                        <div className="font-semibold border-t pt-2 mt-2">Total Amount:</div>
                        <div className="font-semibold text-right border-t pt-2 mt-2">₹{totalAmount.toFixed(2)}</div>
                    </div>
                </div>

                {/* Bank Details */}
                <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h2 className="text-xl font-semibold mb-4 text-blue-800">Bank Transfer Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-medium text-blue-700 mb-2">Account Information</h3>
                            <ul className="space-y-2">
                                <li><strong>Account Holder:</strong> Gupta Associates</li>
                                <li><strong>Bank Name:</strong> Punjab National Bank</li>
                                <li><strong>Branch:</strong> GT Road, Ghaziabad</li>
                                <li><strong>Account No:</strong> 0180002100111805</li>
                                <li><strong>IFSC Code:</strong> PUNB0018000</li>
                                <li><strong>UPI ID:</strong> 9818091111@ptyes</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-blue-700 mb-2">Payment Verification</h3>
                            <p className="mb-3">For faster payment verification, please send payment screenshot to:</p>
                            <ul className="space-y-2">
                                <li><strong>WhatsApp:</strong> +91 88828 69662</li>
                                <li><strong>Email:</strong> guptaswitchgears@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Important Notes */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex">
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">Important Notes</h3>
                            <div className="mt-2 text-sm text-yellow-700">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Your order will be processed only after payment verification</li>
                                    <li>Verification may take up to 12 hours during business days</li>
                                    <li>Please keep your payment receipt for reference</li>
                                    <li>For urgent verification, call our support team at +91 88828 69662</li>
                                    <li>Business hours: 9:30 AM to 6:30 PM (Monday-Saturday)</li>
                                    <li>If you have opted for doorstep delivery,For any changes to delivery address or time, please contact us at least 24 hours
                                        before expected delivery
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Thank you for your order! We'll contact you once payment is verified.</p>
                </div>
            </div>
        </div>
    );
};

export default BankTransferPage;