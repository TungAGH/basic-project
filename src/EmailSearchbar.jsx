import React, { useState } from 'react';
import './App.css';

const EmailSearchbar = ({ onSearch }) => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(email);
  };

  return (
    <form className="email-search-form" onSubmit={handleSearch}>
      <input 
        type="email" 
        value={email} 
        onChange={handleInputChange} 
        placeholder="Your Email Address" 
        className="email-search-input"
      />
      <button type="submit" className="email-search-button">SUBSCRIBE</button>
    </form>
  );
};

export default EmailSearchbar;
