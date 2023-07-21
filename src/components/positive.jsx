// Positive.js

import React from 'react';
import '../styles/result.css';

const Positive = () => {
  const handleCheckProfessional = () => {
    // When the button is clicked, open Google with a search for nearby hospitals
    window.open('https://www.google.com/search?q=nearby+hospitals', '_blank');
  };

  return (
    <div className="positive-container">
      <i className="positive-icon fas fa-heartbeat"></i>
      <p className="positive-heading">Positive</p>
      <p className="positive-description">
      We are sorry to hear that your diabetes test result came back positive. 
      It's important to take immediate action and seek guidance from a nearby hospital or 
      doctor for further evaluation and personalized care. 
      
      <br /> 
      <br />
      Early detection and management play a vital role in 
      maintaining good health and preventing complications. You are not alone in this journey, 
      and healthcare professionals are here to support you every step of the way.

      <br />
      <br /> 
      Remember, positive lifestyle changes and proper medical care can make a significant difference in managing diabetes effectively.
      </p>
      <div className="positive-action">
        <button onClick={handleCheckProfessional}>Check Professional</button>
      </div>
    </div>
  );
}

export default Positive;
