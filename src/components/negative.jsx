// Negative.js

import React from 'react';
import '../styles/result.css';

const Negative = () => {
  return (
    <div className="negative-container">
      <i className="negative-icon fas fa-check-circle"></i>
      <p className="negative-heading">Negative</p>
      <p className="negative-description">
        Congratulations on your negative result! To maintain a healthy lifestyle and avoid diabetes, consider the following tips:
        <br />
        <br />
        <span className="negative-description-item">
          <i className="negative-description-item-icon fas fa-apple"></i>
          Eat a balanced diet with plenty of fruits and vegetables.
        </span>
        <br />
        <span className="negative-description-item">
          <i className="negative-description-item-icon fas fa-dumbbell"></i>
          Engage in regular physical activity or exercise.
        </span>
        <br />
        <span className="negative-description-item">
          <i className="negative-description-item-icon fas fa-heart"></i>
          Limit the consumption of sugary and processed foods.
        </span>
        <br />
        <span className="negative-description-item">
          <i className="negative-description-item-icon fas fa-bed"></i>
          Get enough sleep and manage stress levels.
        </span>
        <br />
        <span className="negative-description-item">
          <i className="negative-description-item-icon fas fa-file-medical"></i>
          Monitor your blood sugar levels regularly if you have a family history of diabetes.
        </span>
      </p>
      <div className="negative-action">
        <a href="https://www.eufic.org/en/healthy-living/article/10-healthy-lifestyle-tips-for-adults" target='blank'>Learn More About Healthy Living</a>
      </div>
    </div>
  );
}

export default Negative;
