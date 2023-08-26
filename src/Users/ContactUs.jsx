import React, { useState } from 'react';
import axios from 'axios';
import  '../Users/contactUs.css';
import MessageInput from './Message';

export const ContactUs = (props) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [messages, setMessages] = useState([]);
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

    const handleSendMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
      };

    const submitUserQuery = async (e) => {
        e.preventDefault();
        try {
          const data = {
            fullName: fullName,
            email:email, 
            phone: phone,
            messages: messages
            };
          const response = await axios.post("http://localhost:4000/submitUserQuery", data);
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
                <h2>Contact Us</h2>
                <form className='user-form' onSubmit={submitUserQuery} action='POST'>
                    <div className="uname">
                        <input className="u-fname" value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Full Name" id="fullName" name="fullName" required/>
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
                     <div className="umessage">
                        <MessageInput onSendMessage={handleSendMessage} />
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

export default ContactUs;