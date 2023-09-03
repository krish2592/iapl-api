import React, { useState } from 'react';
import './onlineAdmission.css'

function AdmissionForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    program: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement form submission logic here, e.g., sending data to an API.
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='adm-form-container'>
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="program">Program:</label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
          >
            <option value="">Select a program</option>
            <option value="hydrogen">Hydrogen (1st-standard)</option>
            <option value="helium">Helium (2nd-standard)</option>
            <option value="lithium">Lithium (3rd-standard)</option>
            <option value="berelium">Berelium (4th-standard)</option>
            <option value="boron">Boron (5th-standard)</option>
            <option value="carbon">Carbon (6th-standard)</option>
            <option value="nitrogen">Nitrogen (7th-standard)</option>
            <option value="oxygen">Oxygen (8th-standard)</option>
            <option value="flourene">Flourene (9th-standard)</option>
            <option value="neon">Neon (10th-standard)</option>
            <option value="sodium">Sodium (11th-standard)</option>
            <option value="magnesium">Magnesium (12th-standard)</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdmissionForm;