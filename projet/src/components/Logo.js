
import React from 'react';
import logo from '../assett/logo.png'; 
import '../Layout/Logo.css'

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Company Logo" className="logo-image" />
    </div>
  );
};

export default Logo;
