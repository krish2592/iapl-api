import React, { useState } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <alreadyRegister>
        <form onSubmit={submitHandler}>
            <label htmlFor="email">Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
            />
            <label htmlFor="password">Password</label>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
                id="password"
                name="password"
            />
            <button type="submit">Log In</button>
        </form>
        <button type='submit'>Don't have an account? Register here</button>
        </alreadyRegister>
    );
}
