import React, { useState } from 'react';
import axios from 'axios';
import {validatePassword} from '../validator';

export const Login = (props) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loginError, loginErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState("");
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
            userId: userId,
            password: password
            };
            const response = await axios.post("http://localhost:4000/loginUser", data);
            if (response.status === 200 && response.data.isUserExist) {
                setSuccessMessage("success");
                window.open("http://localhost:3000/user") 
            }
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
            <label htmlFor="userId">UserId</label>
            <input value={userId} onChange={(e) => setUserId(e.target.value)} type="userId" placeholder="Email/Phone" id="userId" name="userId" required/>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
            {errorMessage && <p style={{ color: 'white' }}>{errorMessage}</p>}
            <button type="submit">Log In</button>
            {successMessage && <h3>{successMessage}</h3>}
        </form>
        <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    );
}

export default Login;