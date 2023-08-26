import React, { useState } from 'react';
import axios from 'axios';
import  '../Users/Users.css'

export const RegisterUser = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
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
    const [contactExist, contactExistMessage] = useState("");
    const [emailExist, emailExistMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const registerUser = async (e) => {
        e.preventDefault();
        try {
          const data = {
            firstName: firstName,
            lastName: lastName,
            email:email, 
            phone: phone,
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
    <htm>
        <body className='register-user-container'>
            <div className='user-form-container'>
                <h2>Register</h2>
                <form className='user-form' onSubmit={registerUser} action='POST'>
                    <div className="uname">
                        <input className="u-fname" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" id="firstName" name="firstName" required/>
                    </div>
                    <div className="uname">
                        <input className="u-lname" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" id="lastName" name="lastName"/>
                    </div>
                    <div className="uphone">
                        <input className="u-phone" value={phone} onChange={isValidContact} type="text" placeholder="Phone number" id="phone" name="phone" required/>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        {contactExist && <p>{contactExist}</p>}
                    </div>
                    <div className="uemail">
                        <input className="u-email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" id="email" name="email" required/>
                        {emailExist && <p>{emailExist}</p>}
                     </div>
                     <div className="usubmit">
                         <button className='u-submit' type="submit">Register</button>
                        {successMessage && <h3>{successMessage}</h3>}
                     </div>
                </form>
            </div>
        </body>
    </htm>
    );
}

export default RegisterUser;