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
      question: 'Why should one invest/donate?',
      answer: 'Ensuring access to high-quality education for all students with potential, despite their financial constraints and limited access to skilled faculty, is our mission. We invite you to contribute to our cause through a unique donation cum investment opportunity. Your support will enable thousands of deserving students to unlock their educational and career potential. In return for your generous donation cum investment, we offer you the opportunity to become a shareholder in our initiative, allowing you to not only make a positive impact on the lives of these students but also share in the success of our endeavor. Join us in empowering the next generation and making quality education accessible to all. Together, we can create a brighter future for these talented individuals. Your contribution matters.',
    },
    {
      question: 'How much you can invest/donate?',
      answer: 'You have the flexibility to commence your investment or contribution with a modest initial amount. This allows individuals to participate and support our cause, regardless of their financial capacity, making it accessible to a wider range of potential supporters. Your decision to start with a small amount can still have a significant impact and contribute to our shared mission.',
    },
    {
       question: 'What future benefits might you receive after making an investment/donations?',
       answer: 'For each donation cum investment, we are pleased to offer you a share of our company contingent upon our success. Your support not only furthers our collective goals but also entitles you to ownership in our organization, provided that we achieve the desired outcomes.',
    },
    {
        question: 'What is the maximum loss you would incur if you invest/donate to us?',
        answer: 'In the event that we do not achieve success, your potential loss is limited to a maximum of your donation amount. However, if we succeed in our mission, the impact will be profound. Thousands of students will gain access to high-quality education, which in turn will empower them to create employment opportunities and contribute significantly to society. Your contribution has the potential to yield a substantial return on investment, multiplying the impact of your generosity. By supporting our cause, you not only assist in fostering knowledge and opportunity but also position yourself to receive a substantial return on your investment.',
    },
  ];

  return (
    <div>
    <div className="faq-container">
      <h1>Donation Cum Investment</h1>
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
      <div className='qr-container'>
        <h1>Invest/Donate us through UPI</h1>
        <div className='qr-code'>
        <img className='qr-img' src={qrcode}/>
        </div>
      </div>
    </div>
  );
};

export default Donation;