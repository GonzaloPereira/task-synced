import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Copyright © {year} Gonzalo Pereira</p>
    </div>
  );
}
export default Footer;
