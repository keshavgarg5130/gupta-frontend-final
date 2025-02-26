const handleGoogleLogin = () => {
    const googleAuthUrl = new URL("https://accounts.google.com/o/oauth2/auth");

    const params = {
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        redirect_uri: "http://localhost:3000/api/37b51f00-d824-4384-8ee0-1e8965151640/auth/google/callback",
        response_type: "code",
        scope: "openid profile email",
        access_type: "offline",
        prompt: "consent",
    };

    // @ts-ignore
    googleAuthUrl.search = new URLSearchParams(params).toString();

    window.location.href = googleAuthUrl.toString(); // Redirect to Google
};

export default function Login() {
    return (
        <button onClick={handleGoogleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
            Login with Google
        </button>
    );
}
