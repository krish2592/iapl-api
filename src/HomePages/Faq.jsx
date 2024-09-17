import React, { useState } from 'react';
import './faq.css';

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

const Faq = () => {
  const faqData = [
    {
      question: 'Why to choose Infytech MEP DESIGN CONSULTANTS?',
      answer: '',
    },
    {
      question: 'How Infytech MEP Consultants is different from others?',
      answer: '',
    },
    {
      question: 'What is some of the key features in Infytech?',
      answer: '',
    },
    {
      question: 'What if Infytech will not meet your expectation',
      answer: '',
    }
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Faq;