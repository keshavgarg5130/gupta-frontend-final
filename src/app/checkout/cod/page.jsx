"use client";

import React, { useEffect, useState } from "react";

const CODPage = () => {
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
    const codCharge = subtotal * 0.01;
    const totalAmount = subtotal + gstAmount + (orderData.pricing.shipping || 0) + codCharge;

    return (
        <div className="p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-blue-800 mb-6">Cash on Delivery (COD) Order Confirmation</h1>

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

                {/* Shipping Address */}
                {orderData.shippingDetails && (
                    <div className="mb-8 p-4 bg-gray-50 rounded border">
                        <h2 className="text-xl font-semibold mb-3">Shipping Address</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <p><strong>Address:</strong> {orderData.shippingDetails.address}</p>
                            <p><strong>Landmark:</strong> {orderData.shippingDetails.landmark}</p>
                            <p><strong>City:</strong> {orderData.shippingDetails.city}</p>
                            <p><strong>State:</strong> {orderData.shippingDetails.state}</p>
                            <p><strong>Pincode:</strong> {orderData.shippingDetails.pincode}</p>
                            <p><strong>Country:</strong> {orderData.shippingDetails.country}</p>
                            <p><strong>Contact:</strong> {orderData.userDetails.mobile}</p>
                            <p><strong>Alt. Contact:</strong> {orderData.userDetails.altMobile}</p>
                        </div>
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

                        <div className="text-gray-600">COD Charge (1%):</div>
                        <div className="text-right">₹{codCharge.toFixed(2)}</div>

                        <div className="font-semibold border-t pt-2 mt-2">Total Payable:</div>
                        <div className="font-semibold text-right border-t pt-2 mt-2">₹{totalAmount.toFixed(2)}</div>
                    </div>
                </div>

                {/* Delivery Information */}
                <div className="mb-8 p-6 bg-green-50 rounded-lg border border-green-200">
                    <h2 className="text-xl font-semibold mb-4 text-green-800">Delivery Information</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium text-green-700 mb-2">Standard Delivery</h3>
                            <ul className="space-y-1">
                                <li>• Estimated delivery time: 5-7 business days</li>
                                <li>• Our delivery partner will contact you before delivery</li>
                                <li>• Please keep exact change ready for payment</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-green-700 mb-2">Need Express Delivery?</h3>
                            <p className="mb-2">For express shipping or any other queries, contact our support team:</p>
                            <ul className="space-y-1">
                                <li>• <strong>Call/WhatsApp:</strong> +91 88828 69662</li>
                                <li>• <strong>Email:</strong> guptaswitchgears@gmail.com</li>
                                <li>• Business hours: 9:30 AM to 6:30 PM (Monday-Saturday)</li>
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
                                    <li>Please verify all items before making payment to the delivery agent</li>
                                    <li>Our executive will call you before delivery</li>
                                    <li>For any changes to delivery address or time, please contact us at least 24 hours before expected delivery</li>
                                    <li>COD orders may take slightly longer to process than prepaid orders</li>
                                    <li>Please check all products at the time of delivery as returns are more complex for COD orders</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Thank you for your order! We'll contact you soon with delivery updates.</p>
                </div>
            </div>
        </div>
    );
};

export default CODPage;