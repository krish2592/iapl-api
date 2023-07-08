import React, { useState } from 'react';
import axios from 'axios';
import {validatePassword} from './validator';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loginError, loginErrorMessage] = useState('');
    const userLogin = async (e) => {
        e.preventDefault();
        try {
            if (!validatePassword(password)) {
                setErrorMessage(
                  'Password must include at least one special character [@ $ ! % ? &], one uppercase, one lowercase, one number, and should be 8 to 15 characters long'
                );
                return;
            }
            const data = {
            email:email, 
            password: password
            };
            await axios.post("http://localhost:4000/loginUser", data);
        } catch (err) {
            loginErrorMessage(
                'wrong credentials'
              );
            return;
        }
    }
    
    return (
        <div className='login-form-container'>
        <h2>Login</h2>
        {loginError && <p style={{ color: 'white' }}>{loginError}</p>}
        <form className='login-form' onSubmit={userLogin} action='POST'>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" required/>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
            {errorMessage && <p style={{ color: 'white' }}>{errorMessage}</p>}
            <button type="submit">Log In</button>
        </form>
        <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    );
}
