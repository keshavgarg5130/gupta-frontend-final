"use client";

import { ErrorBoundary } from 'react-error-boundary';
import Checkout from "../ui/auth/Checkout";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

// Then wrap your Checkout component:
<ErrorBoundary FallbackComponent={ErrorFallback}>
    <Checkout />
</ErrorBoundary>