import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer text-center">
      <div className="container">
        <div className="footer-inner text-white py grid">
          <div className="footer-item">
            <h3 className="footer-head">About Us</h3>
            <div className="icon">
              <h1>GlucAI</h1>
            </div>
            <p className="text text-md">Leveraging machine learning, we raise diabetes awareness and provide accurate risk assessment tools.</p>
            <p className="text text-sm">&copy; {currentYear} GlucAI. All rights reserved.</p>
            <p className="text text-xm">Development team : Wena Harilegawa and Andhika Restu</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
