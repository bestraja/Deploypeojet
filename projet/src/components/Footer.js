import React from 'react';
import '../Layout/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h3>Contact</h3>
          <p>Address: 123 Example Street, City, State, Country</p>
          <p>Phone: (11) 1234-5678</p>
          <p>Email: contato@ventnik.com</p>
        </div>
        <div className="footer-section quick-links">
         
        </div>
       
      </div>
      <div className="footer-bottom">
        <p>&copy;© 2024 Vent Nik. All rights reserved..</p>
      </div>
    </footer>
  );
};

export default Footer;
