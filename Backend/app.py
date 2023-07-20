from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:80"}})  # Replace with your React app's URL

@app.route('/result', methods=['POST'])
def predict():
    try:
        gender = request.form['gender']
        age = request.form['age']
        hypertension = request.form['hypertension']
        heart_disease = request.form['heartDisease']
        smoking_history = request.form['smokingHistory']
        bmi = request.form['bmi']
        HbA1c_level = request.form['hba1cLevel']
        blood_glucose_level = request.form['bloodGlucoseLevel']

        model = joblib.load('trained_model.joblib')

        new_instance = pd.DataFrame({
            'gender': [gender],
            'age': [age],
            'hypertension': [hypertension],
            'heart_disease': [heart_disease],
            'smoking_history': [smoking_history],
            'bmi': [bmi],
            'HbA1c_level': [HbA1c_level],
            'blood_glucose_level': [blood_glucose_level]
        })

        # Make the prediction
        prediction = model.predict(new_instance)

        return str(prediction[0])

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(port=5000)  # Change the port to the desired Flask server port
