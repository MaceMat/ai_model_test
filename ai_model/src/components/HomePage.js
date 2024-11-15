import React, { useState } from 'react';
import './HomePage.css';

const HomePage = ({ addRow }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRow(formData);
    setFormData({ name: '', email: '' }); // Reset form
  };

  return (
    <main className="main-content">
      <h1>Welcome to My Website!</h1>
      <p>Please fill out the form below to add data to the News page.</p>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </main>
  );
};

export default HomePage;
