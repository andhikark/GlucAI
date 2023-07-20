import pandas as pd
import joblib
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This enables CORS for the entire app

# Load the trained model
model = joblib.load('trained_model.joblib')

@app.route('/', methods=['POST'])
def predict():
    if request.method == 'POST':
        data = request.get_json()
        gender = int(data['gender'])
        age = int(data['age'])
        hypertension = int(data['hypertension'])
        heart_disease = int(data['heartDisease'])
        smoking_history = int(data['smokingHistory'])
        bmi = float(data['bmi'])
        HbA1c_level = float(data['hba1cLevel'])
        blood_glucose_level = float(data['bloodGlucoseLevel'])

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
        result = str(prediction[0])

        return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)
