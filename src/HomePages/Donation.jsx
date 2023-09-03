import React, { useState } from 'react';
import './donation.css';
import qrcode from '../Images/QrCode.png'

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        {question}
        <span className={`icon ${isOpen ? 'open' : 'closed'}`}>&#x25BC;</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const Donation = () => {
  const faqData = [
    {
      question: 'Why should one donate?',
      answer: '',
    },
    {
      question: 'Why do we require donations?',
      answer: '',
    },
    {
       question: 'What future benefits might you receive after making a donation?',
       answer: '',
    },
    {
        question: 'What is the maximum loss you would incur if you donate to us?',
        answer: '',
    },
    {
        question: 'Will we provide records for how this money will be spent?',
        answer: '',
      },
  ];

  return (
    <div>
    <div className="faq-container">
      <h1>Donation</h1>
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
      <div className='qr-container'>
        <h1>Donate us through UPI</h1>
        <div className='qr-code'>
        <img className='qr-img' src={qrcode}/>
        </div>
      </div>
    </div>
  );
};

export default Donation;