import React, { useState } from 'react';
import './communityForm.css';

const CommunityForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submission logic here
    console.log('Form data submitted:', formData);
    // Reset form after submission
    setFormData({
      title: '',
      content: '',
    });
  };

  return (
    <div className="community-form-container">
      <h2>Write a Blog Post or Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <label>Content:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommunityForm;