import React, { useState } from 'react';

function BMI() {
    const [gender, setGender] = useState('male');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [unitSystem, setUnitSystem] = useState('metric');
    const [bmr, setBMR] = useState(null);

    const calculateBMR = () => {
        let bmrValue;
        const heightInMeters = unitSystem === 'metric' ? height / 100 : height * 0.0254;
        const weightInKg = unitSystem === 'metric' ? weight : weight * 0.453592;
        if (gender === 'male') {
            bmrValue = 88.362 + (13.397 * weightInKg) + (4.799 * heightInMeters) - (5.677 * age);
        } else {
            bmrValue = 447.593 + (9.247 * weightInKg) + (3.098 * heightInMeters) - (4.330 * age);
        }
        setBMR(bmrValue.toFixed(2));
    };

    return (
        <div className="container mx-auto p-4 border-2 border-white w-[500px] text-white  ">
            <h2 className="text-2xl font-bold mb-4">BMR Calculator</h2>
            <div className="mb-4">
                <label className="block mb-1">Gender:</label>
                <select value={gender} onChange={e => setGender(e.target.value)} className="rounded border-gray-300 text-black">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div>
      
            <div className="mb-4">
                <label className="block mb-1">Height ({unitSystem === 'metric' ? 'cm' : 'in'}):</label>
                <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="rounded border-gray-300 text-black "  />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Weight ({unitSystem === 'metric' ? 'kg' : 'lbs'}):</label>
                <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="rounded border-gray-300 text-black" />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Age (years):</label>
                <input type="number" value={age} onChange={e => setAge(e.target.value)} className="rounded border-gray-300 text-black" />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Unit System:</label>
                <select value={unitSystem} onChange={e => setUnitSystem(e.target.value)} className="rounded border-gray-300 text-black">
                    <option value="metric">Metric</option>
                    <option value="us">US</option>
                </select>
            </div>
            </div>
      

            <button onClick={calculateBMR} className="bg-blue-500 text-white px-4 py-2 rounded">Calculate BMR</button>
            {bmr && <div className="mt-4">Your Basal Metabolic Rate (BMR) is: {bmr} calories per day.</div>}
        </div>
    );
}

export default BMI;
