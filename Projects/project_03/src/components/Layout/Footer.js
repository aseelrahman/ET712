import React from 'react';
import '../../App.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} FootForward. All rights reserved.</p>
      <p>
        <a href="/privacy-policy">Privacy Policy</a> |
        <a href="/terms-of-service">Terms of Service</a>
      </p>
    </footer>
  );
}

export default Footer;
