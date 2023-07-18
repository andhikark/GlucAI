import React from 'react';
import '../styles/form.css'

const Form = () => {
  return (
    <div className="form-container">
      <h1>Formulir Data Pasien</h1>
      <form method="POST">
        <div className="form-group">
            <label htmlFor="gender">Gender:</label>
                <select name="gender" id="gender" required>
                    <option value="">Select Gender</option>
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                </select>
        </div>


        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" id="age" min="0" required />
        </div>

        <div className="form-group">
          <label htmlFor="hypertension">Hypertension:</label>
          <select name="hypertension" id="hypertension">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="heart_disease">Heart Disease:</label>
          <select name="heart_disease" id="heart_disease">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="smoking_history">Smoking History:</label>
          <select name="smoking_history" id="smoking_history">
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
          <input type="number" step="0.01" name="bmi" id="bmi" min = "0.00" placeholder=' Example : 22.60' required />
        </div>

        <div className="form-group">
          <label htmlFor="HbA1c_level">HbA1c Level:</label>
          <input type="number" step="0.01" name="HbA1c_level" id="HbA1c_level" min = "0.00" placeholder='Example : 5.5' required />
        </div>

        <div className="form-group">
          <label htmlFor="blood_glucose_level">Blood Glucose Level:</label>
          <input type="number" step="0.01" name="blood_glucose_level" id="blood_glucose_level" min = "0.00"  placeholder='Example : 90' required />
        </div>

        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default Form;
