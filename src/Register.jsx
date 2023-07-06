import React, { useState } from 'react';

export const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const options = ["male", "female", "transgender", "other"];
    const [gender, setGender] = useState(options[0]);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const isValidContact = (e) => {
      const input = e.target.value;
      const cleanedInput = input.replace(/\D/g, '');
    if (input !== cleanedInput) {
      setErrorMessage('Number is not valid');
    } else {
      setErrorMessage('');
      setPhone(cleanedInput);
    }
    };
    const [profession, setProfession] = useState('');
    const [password, setPassword] = useState('');
    const [otherDetails , setOtherDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email,firstName,lastName,phone,profession,password,otherDetails,gender);
    }

    return (
        <>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" name="firstName"/>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" id="lastName" name="lastName"/>
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                <select value={gender} onChange={e => setGender(e.target.value)}>
                {options.map((value) => (
                <option value={value} key={value}>
                {value}
                </option>
                ))}
                </select>
            </div>
            <div>
                <label htmlFor="profession">Profession</label>
                <input value={profession} onChange={(e) => setProfession(e.target.value)} type="text" placeholder="Profession" id="profession" name="profession"/>
            </div>
            <div>
                <label htmlFor="Phone">Contact</label>
                <input value={phone} onChange={isValidContact} type="text" placeholder="Phone number" id="phone" name="phone"/>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" id="email" name="email"/>
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            </div>
            <div>
            <label htmlFor="otherDetails">Any Other Details</label>
            <input value={otherDetails} onChange={(e) => setOtherDescription(e.target.value)} type="text" placeholder="Any other details" id="details" name="details"/>
            </div>
            <button type="submit">Register</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </>
    );
}