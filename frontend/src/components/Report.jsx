import React, { useState } from 'react';

const Report = () => {
  const [answers, setAnswers] = useState({});
  const questions = [
    "Question 1?",
    "Question 2?",
    "Question 3?",
    // Add more questions as needed
  ];

  const handleInputChange = (e, index) => {
    const newAnswers = { ...answers, [index]: e.target.value };
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Add logic to validate answers and award points
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Report</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">{question}</h2>
            <input
              type="text"
              value={answers[index] || ''}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full p-4 border border-gray-300 rounded-md mt-2"
            />
          </div>
        ))}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Report;