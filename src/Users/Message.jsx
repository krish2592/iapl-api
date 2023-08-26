import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]); // This state is for displaying messages.

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessages([...messages, message]); // Add the new message to the messages state.
      setMessage('');
    }
  };

  return (
    <div>
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder="Type your message..."
          value={message}
          onChange={handleInputChange}
        />
        {/* <button type="submit">Send</button> */}
      </form>
    </div>
  );
};

export default MessageInput;
