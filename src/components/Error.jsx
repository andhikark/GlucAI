import React from 'react';
import '../App.css'

const Error = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-text">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default Error;