import React, { Suspense } from "react";
import Checkout from "../ui/auth/Checkout";


export default function CheckoutPage() {
    return (
        <Suspense fallback={<div>Loading checkout...</div>}>
            <Checkout />
        </Suspense>
    );
}
