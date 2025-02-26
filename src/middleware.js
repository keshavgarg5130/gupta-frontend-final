import { NextResponse } from 'next/server';


export function middleware(req) {
    // Get the token from cookies (ensure 'auth_token' is the correct name)
    const token = req.cookies.get('auth_token');

    if (!token) {
        // Token doesn't exist, redirect to login page
        console.log('No token found. Redirecting to login.');
        return NextResponse.redirect(new URL('/login', req.url));
    }try{

    }catch(error){
        console.log('Error in authentication:', error);
        return NextResponse.redirect(new URL('/login', req.url));
    }

}

export const config = {
    matcher: ['/dashboard', '/profile'], // Add your routes here
};