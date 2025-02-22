const NotFoundPage= () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="text-gray-600 mt-4">The page you're looking for doesn't exist.</p>
            <a href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md">
                Go Home
            </a>
        </div>
    );
}
export default NotFoundPage;
