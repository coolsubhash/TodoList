import React, { useState } from 'react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100; // Assuming height is entered in centimeters

    if (!isNaN(weightInKg) && !isNaN(heightInMeters) && heightInMeters > 0) {
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      setBmiResult(bmi.toFixed(2));
    } else {
      // Handle invalid input
      setBmiResult(null);
    }
  };

  return (
    <div className='bg-indigo-500 max-w-xs rounded overflow-hidden shadow-md bg-primary mt-5 p-3 mx-auto'>
      <h1>BMI Calculator</h1>
      <br/>
      <label>
        Weight (kg):
        <input type="text" placeholder='enter the text' value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        Height (cm):
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <br />
      <br/>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmiResult !== null && (
        <div>
          <h2>Your BMI: {bmiResult}</h2>
          <p>
            Interpretation:
            {bmiResult < 18.5
              ? ' Underweight'
              : bmiResult < 25
              ? ' Normal weight'
              : bmiResult < 30
              ? ' Overweight'
                  : ' Obesity'}
          </p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator; 
