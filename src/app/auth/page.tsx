"use client"

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import {useState} from "react";

const LoginPage = () => {
    const router = useRouter();
    const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSendVerification = async () => {
        setLoading(true);
        setError('');
        setSuccessMessage('');
        try {
            const endpoint = loginMethod === 'email' ? '/api/magic-link' : '/api/otp';
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phoneNumber: loginMethod === 'phone' ? phoneNumber : null,
                    email: loginMethod === 'email' ? email : null
                }),
            });

            if (response.ok) {
                if (loginMethod === 'email') {
                    setSuccessMessage('Magic link sent! Please check your email.');
                } else {
                    setShowOtpInput(true);
                    setSuccessMessage('OTP sent successfully!');
                }
            } else {
                const data = await response.json();
                setError(data.error || 'Failed to send verification');
            }
        } catch (error) {
            setError('Failed to send verification');
        }
        setLoading(false);
    };

    const handleVerifyOtp = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('/api/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber, otp }),
            });

            if (response.ok) {
                router.push('/dashboard');
            } else {
                const data = await response.json();
                setError(data.error || 'Invalid OTP');
            }
        } catch (error) {
            setError('Failed to verify OTP');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50">
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-xl">
                <div>
                    <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Sign in to your account
                    </p>
                </div>

                {/* Google Sign In Button */}
                <div>
                    <button
                        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition duration-150"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        Continue with Google
                    </button>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
                        <p className="text-red-700">{error}</p>
                    </div>
                )}

                {successMessage && (
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-md">
                        <p className="text-green-700">{successMessage}</p>
                    </div>
                )}

                <div className="space-y-6">
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => {
                                setLoginMethod('phone');
                                setShowOtpInput(false);
                                setError('');
                                setSuccessMessage('');
                            }}
                            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                                loginMethod === 'phone'
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            Phone
                        </button>
                        <button
                            onClick={() => {
                                setLoginMethod('email');
                                setShowOtpInput(false);
                                setError('');
                                setSuccessMessage('');
                            }}
                            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                                loginMethod === 'email'
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            Email
                        </button>
                    </div>

                    <div className="space-y-4">
                        {loginMethod === 'phone' ? (
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter your phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    disabled={showOtpInput}
                                />
                            </div>
                        ) : (
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        )}

                        {showOtpInput && loginMethod === 'phone' && (
                            <div>
                                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                                    Enter OTP
                                </label>
                                <input
                                    id="otp"
                                    type="text"
                                    required
                                    maxLength={6}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter 6-digit OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                        )}
                    </div>

                    <div>
                        {!showOtpInput || loginMethod === 'email' ? (
                            <button
                                onClick={handleSendVerification}
                                disabled={loading || !(loginMethod === 'phone' ? phoneNumber : email)}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                            >
                                {loading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    loginMethod === 'phone' ? 'Send OTP' : 'Send Magic Link'
                                )}
                            </button>
                        ) : (
                            <div className="space-y-4">
                                <button
                                    onClick={handleVerifyOtp}
                                    disabled={loading || !otp}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                                >
                                    {loading ? 'Verifying...' : 'Verify OTP'}
                                </button>
                                <button
                                    onClick={() => {
                                        setShowOtpInput(false);
                                        setOtp('');
                                        setError('');
                                        setSuccessMessage('');
                                    }}
                                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                                >
                                    Change Phone Number
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
