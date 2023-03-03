import userEvent from "@testing-library/user-event";
import LoginCredentials from "./types/LoginCredentials";
import User from './types/User';

export async function checkUser(): Promise< {isLoggedIn: true; user: User;}|{isLoggedIn: false;}> {
     return (await fetch('/api/auth/user')).json()
    }

export async function login(loginCredentials: LoginCredentials): Promise<User> {
    const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(loginCredentials),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return res.json();
}


export async function logout(): Promise<void> {
    await fetch('/api/auth/logout', { method: 'POST'});
}