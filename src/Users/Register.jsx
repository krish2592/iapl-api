import React, { useState } from 'react';
import axios from 'axios';

export const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const options = ["male", "female", "transgender", "other"];
    const [gender, setGender] = useState(options[0]);
    const [profession, setProfession] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState('');
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
    const [password, setPassword] = useState('');
    const [otherDetails , setOtherDescription] = useState('');
    const [contactExist, contactExistMessage] = useState("");
    const [emailExist, emailExistMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const registerUser = async (e) => {
        e.preventDefault();
        try {
          const data = {
            firstName: firstName,
            lastName: lastName,
            gender:gender,
            profession: profession,
            email:email, 
            phone: phone,
            address: address,
            street: street,
            city: city,
            state: state,
            country: country,
            zipcode: zipcode,
            password: password,
            otherDetails: otherDetails
            };
          const response = await axios.post("http://localhost:4000/registerUser", data);
          if (response.status === 200 && response.statusText === "OK") {
            if(response.data.contactExist) {
              contactExistMessage(response.data.message);
            } else if(response.data.emailExist) {
              emailExistMessage(response.data.message);
            } else {
              setSuccessMessage(response.data.message); // Update the success message state
            } 
          } else {

          }
        } catch(err) {
          console.log(err);
        }
    }

    return (
        <div className='register-form-container'>
            <h2>New User Registeration</h2>
        <form className='register-form' onSubmit={registerUser} action='POST'>
                <label htmlFor="firstName">First Name</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" id="firstName" name="firstName" required/>
                <label htmlFor="lastName">Last Name</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" id="lastName" name="lastName"/>
                <label htmlFor="gender">Gender</label>
                <select value={gender} onChange={e => setGender(e.target.value)}>
                {options.map((value) => (
                <option value={value} key={value}>
                {value}
                </option>
                ))}
                </select>
                <label htmlFor="profession">Profession</label>
                <input value={profession} onChange={(e) => setProfession(e.target.value)} type="text" placeholder="Profession" id="profession" name="profession"/>
                <label htmlFor="Phone">Contact</label>
                <input value={phone} onChange={isValidContact} type="text" placeholder="Phone number" id="phone" name="phone" required/>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {contactExist && <p>{contactExist}</p>}
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" id="email" name="email" required/>
                {emailExist && <p>{emailExist}</p>}
            <label htmlFor="address">Address</label>
            <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" id="address" name="address" required/>
            <input value={street} onChange={(e) => setStreet(e.target.value)} type="text" placeholder="Street" id="street" name="street"/>
            <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" id="city" name="city" required/>
            <input value={state} onChange={(e) => setState(e.target.value)} type="text" placeholder="State" id="state" name="state"/>
            <input value={country} onChange={(e) => setCountry(e.target.value)} type="text" placeholder="Country" id="country" name="country" required/>
            <input value={zipcode} onChange={(e) => setZipcode(e.target.value)} type="text" placeholder="Zipcode" id="zipcode" name="zipcode" required/>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
            <label htmlFor="otherDetails">Any Other Details</label>
            <input value={otherDetails} onChange={(e) => setOtherDescription(e.target.value)} type="text" placeholder="Any other details" id="details" name="details"/>
            <button type="submit">Register</button>
            {successMessage && <h3>{successMessage}</h3>}
        </form>
        <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    );
}

export default Register;