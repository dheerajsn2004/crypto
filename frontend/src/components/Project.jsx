import React, { useState } from 'react';

const Project = ({ match }) => {
  const [decryptedText, setDecryptedText] = useState('');
  const projectNumber = match.params.projectNumber;

  const handleSubmit = () => {
    // Add logic to validate decryptedText and award points
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Project {projectNumber}</h1>
      <textarea
        readOnly
        value="Encrypted text here"
        className="w-full p-4 border border-gray-300 rounded-md mb-4"
      />
      <input
        type="text"
        placeholder="Enter decrypted text"
        value={decryptedText}
        onChange={(e) => setDecryptedText(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-md mb-4"
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
    </div>
  );
};

export default Project;