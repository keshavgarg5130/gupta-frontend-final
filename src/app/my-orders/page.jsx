"use client";

import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";


const OrdersPage = () => {
    const { getUser } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState("");
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Get user email on component mount
    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser();
            setUserEmail(user?.email || "");
        };
        fetchUser();
    }, [getUser]);

    // Fetch orders when userEmail changes
    useEffect(() => {
        if (!userEmail) return;

        const fetchOrders = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/order/${userEmail}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch orders");
                }
                const data = await response.json();
                setOrders(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [userEmail]);

    // Fetch details for a specific order
    const fetchOrderDetails = async (orderId) => {
        try {
            setLoading(true);
            const response = await fetch(`https://gupta-backend.vercel.app/api/37b51f00-d824-4384-8ee0-1e8965151640/order/${orderId}`);
            if (!response.ok) {
                throw new Error("Failed to fetch order details");
            }
            const data = await response.json();
            setSelectedOrder(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (error) return <div className="container mx-auto px-4 py-8">Failed to load orders: {error}</div>;
    if (loading) return <div className="container mx-auto px-4 py-8">Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

            {!selectedOrder ? (
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Order History</h2>
                    {orders.length === 0 ? (
                        <p>You haven't placed any orders yet.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border">Order #</th>
                                    <th className="py-2 px-4 border">Date</th>
                                    <th className="py-2 px-4 border">Amount</th>
                                    <th className="py-2 px-4 border">Payment Method</th>
                                    <th className="py-2 px-4 border">Shipping</th>
                                    <th className="py-2 px-4 border">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border">{order.customOrderId}</td>
                                        <td className="py-2 px-4 border">
                                            {new Date(order.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="py-2 px-4 border">₹{order.total.toFixed(2)}</td>
                                        <td className="py-2 px-4 border">{order.PaymentMethod || "N/A"}</td>
                                        <td className="py-2 px-4 border">{order.shippingMethod}</td>
                                        <td className="py-2 px-4 border">
                                            <button
                                                onClick={() => fetchOrderDetails(order.id)}
                                                className="text-blue-600 hover:underline"
                                                disabled={loading}
                                            >
                                                {loading ? "Loading..." : "View Details"}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <button
                        onClick={() => setSelectedOrder(null)}
                        className="mb-4 text-blue-600 hover:underline"
                    >
                        ← Back to orders
                    </button>

                    <h2 className="text-xl font-bold mb-4">
                        Order #: {selectedOrder.customOrderId}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h3 className="font-semibold mb-2">Order Details</h3>
                            <p>
                                <strong>Date:</strong>{" "}
                                {new Date(selectedOrder.createdAt).toLocaleString()}
                            </p>
                            <p>
                                <strong>Total:</strong> ₹{selectedOrder.total.toFixed(2)}
                            </p>
                            <p>
                                <strong>Payment Method:</strong> {selectedOrder.PaymentMethod}
                            </p>
                            <p>
                                <strong>Shipping Method:</strong> {selectedOrder.shippingMethod}
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Shipping Address</h3>
                            <p>{selectedOrder.address}</p>
                            {selectedOrder.landmark && <p>Landmark: {selectedOrder.landmark}</p>}
                            <p>
                                {selectedOrder.city}, {selectedOrder.state} - {selectedOrder.pincode}
                            </p>
                            <p>{selectedOrder.country}</p>
                            <p>
                                <strong>Contact:</strong> {selectedOrder.mobile}
                            </p>
                            {selectedOrder.altMobile && (
                                <p>
                                    <strong>Alt. Contact:</strong> {selectedOrder.altMobile}
                                </p>
                            )}
                        </div>
                    </div>

                    {selectedOrder.gstInvoice && (
                        <div className="mb-6 p-4 bg-gray-50 rounded">
                            <h3 className="font-semibold mb-2">GST Details</h3>
                            <p>
                                <strong>Business Name:</strong> {selectedOrder.businessName}
                            </p>
                            <p>
                                <strong>GST Number:</strong> {selectedOrder.gstNumber}
                            </p>
                            <p>
                                <strong>Business Phone:</strong> {selectedOrder.businessPhone}
                            </p>
                            {selectedOrder.billingAddress && (
                                <>
                                    <h4 className="font-medium mt-2">Billing Address</h4>
                                    <p>{selectedOrder.billingAddress}</p>
                                    <p>
                                        {selectedOrder.billingCity}, {selectedOrder.billingState} -{" "}
                                        {selectedOrder.billingPincode}
                                    </p>
                                    <p>{selectedOrder.billingCountry}</p>
                                </>
                            )}
                        </div>
                    )}

                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Items Ordered</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border">Product</th>
                                    <th className="py-2 px-4 border">Price</th>
                                    <th className="py-2 px-4 border">Qty</th>
                                    <th className="py-2 px-4 border">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                {selectedOrder.items.map((item) => (
                                    <tr key={item.id}>
                                        <td className="py-2 px-4 border">{item.name}</td>
                                        <td className="py-2 px-4 border">₹{item.price.toFixed(2)}</td>
                                        <td className="py-2 px-4 border">{item.quantity}</td>
                                        <td className="py-2 px-4 border">
                                            ₹{(item.price * item.quantity).toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
                        <h3 className="font-semibold mb-2">Need Help?</h3>
                        <p>
                            For any queries regarding your order, please contact our support team:
                        </p>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <strong>Phone/WhatsApp:</strong> +91 88828 69662
                            </li>
                            <li>
                                <strong>Email:</strong> guptaswitchgears@gmail.com
                            </li>
                        </ul>
                        <p className="mt-2 text-sm">
                            Business hours: 9:30 AM to 6:30 PM (Monday-Saturday)
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrdersPage;