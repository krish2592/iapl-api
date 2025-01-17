import React, { useState } from 'react';
import axios from 'axios';
import '../Users/contactUs.css';
import MessageInput from './Message';
import Header from '../Homes/Header';
import Footer from '../Homes/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

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
        email: email,
        phone: phone,
        messages: messages
      };
      const response = await axios.post("http://localhost:4000/submitUserQuery", data);
      if (response.status === 200 && response.statusText === "OK") {
        if (response.data.contactExist) {
          contactExistMessage(response.data.message);
        } else if (response.data.emailExist) {
          emailExistMessage(response.data.message);
        } else {
          setSuccessMessage(response.data.message); // Update the success message state
        }
      } else {

      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <html>
      <Header />
      <div className='header-contact-us'><div className='header-contact-us-h1'>Contact Us</div></div>
      <body className='register-user-container'>
        <div className='contact-box'>
          {/* <div className='user-add'>
            <div><h3 className='user-add-headr'><b>Delhi-NCR</b></h3></div>
            <div>B5/1, Raju Park</div>
            <div>Khanpur, Devli</div>
            <div>New Delhi-110062</div>
            <br/>
            <div><h3 className='user-add-headr'>Email:</h3></div>
            <div>sachink@infytechai.com</div>
            <div>infomakeindia@gmail.com</div>
            <br/>
            <div><h3 className='user-add-headr'>Phone:</h3></div>
            <div>+91 8920523740</div>
          </div> */}
          <div className='contact-mainbox-1'>
            <div className='contact-mainbox-1-sub1'>
              <div className='contact-mainbox-1-sub1-icon'><FontAwesomeIcon icon={faPhone} style={{ fontSize: '25px' }} /></div>
              <div className='contact-mainbox-1-sub1-phone-tag'>Phone Number</div>
              <div className='contact-mainbox-1-sub1-pnum'>+91 8920523740</div>
            </div>
            <div className='contact-mainbox-1-sub2'>
              <div className='contact-mainbox-1-sub2-icon'> <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '25px' }} /></div>
              <div className='contact-mainbox-1-sub2-email-tag'>Email</div>
              <div className='contact-mainbox-1-sub2-email1'>sachink@infytechai.com</div>
              <div className='contact-mainbox-1-sub2-email2'>skm@infytechai.com</div>
              <div className='contact-mainbox-1-sub2-email3'>infomakeindia@gmail.com</div>
            </div>
          </div>
          <div className='contact-mainbox-2'>
            <div className='contact-mainbox-2-sub1'>
              <div className='contact-mainbox-2-sub1-icon'><FontAwesomeIcon icon={faLocationDot} style={{ fontSize: '25px' }} /></div>
              <div className='contact-mainbox-2-sub1-add-tag'>Address</div>
              <div className='contact-mainbox-2-sub1-addl1'>B5/1, Raju Park</div>
              <div className='contact-mainbox-2-sub1-addl2'>Khanpur, Devli</div>
              <div className='contact-mainbox-2-sub1-addl3'>New Delhi-110062</div>
            </div>
            <div className='contact-mainbox-2-sub2'>
              <div className='contact-mainbox-2-sub2-icon'><FontAwesomeIcon icon={faClock} style={{ fontSize: '25px' }} /></div>
              <div className='contact-mainbox-2-sub2-wh'>Working Hour</div>
              <div className='contact-mainbox-2-sub2-day'>Monday To Saturday</div>
              <div className='contact-mainbox-2-sub2-tmg'>9:00AM - 6:00PM</div>
            </div>
          </div>
        </div>
        {/* <div className='user-form-container'>
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
                         <button className='u-submit' type="submit">Submit</button>
                        {successMessage && <h3>{successMessage}</h3>}
                     </div>
                </form>
            </div> */}
      </body>
      <Footer />
    </html>
  );
}

export default ContactUs;