import React, { useState } from 'react';
import '../styles/form.css';
import axios from 'axios';

const Form = () => {
  const [predictionResult, setPredictionResult] = useState('');
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    hypertension: '-1',
    heartDisease: '-1',
    smokingHistory: '-1',
    bmi: '',
    hba1cLevel: '',
    bloodGlucoseLevel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Make a POST request to the Flask backend
    axios.post('http://localhost:5000/result', formData)
      .then((response) => {
        // Handle the response from the backend (prediction)
        setPredictionResult(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="form-container">
      <h1>Patient Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select name="gender" id="gender" required onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            min="0"
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="hypertension">Hypertension:</label>
          <select
            name="hypertension"
            id="hypertension"
            onChange={handleChange}
          >
            <option value="">Select Option</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="heartDisease">Heart Disease:</label>
          <select
            name="heartDisease"
            id="heartDisease"
            onChange={handleChange}
          >
            <option value="">Select Option</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="smokingHistory">Smoking History:</label>
          <select
            name="smokingHistory"
            id="smokingHistory"
            onChange={handleChange}
          >
            <option value="0">Never</option>
            <option value="1">No Info</option>
            <option value="2">Current</option>
            <option value="3">Former</option>
            <option value="4">Ever</option>
            <option value="5">Not Current</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="bmi">BMI:</label>
          <input
            type="number"
            step="0.01"
            name="bmi"
            id="bmi"
            min="0.00"
            placeholder=" Example: 22.60"
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="hba1cLevel">HbA1c Level:</label>
          <input
            type="number"
            step="0.01"
            name="hba1cLevel"
            id="hba1cLevel"
            min="0.00"
            placeholder="Example: 5.5"
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bloodGlucoseLevel">Blood Glucose Level:</label>
          <input
            type="number"
            step="0.01"
            name="bloodGlucoseLevel"
            id="bloodGlucoseLevel"
            min="0.00"
            placeholder="Example: 90"
            required
            onChange={handleChange}
          />
        </div>

        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default Form;
