import React from 'react';
import { Link } from 'react-router-dom';

const DraftBox = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Draft</h1>
      <div className="space-y-4">
        {/* Replace with dynamic draft messages */}
        {[1, 2, 3].map((msg) => (
          <div key={msg} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Draft {msg}</h2>
            <p className="mt-2">This is the content of draft {msg}...</p>
            <Link to={`/inbox/draft/${msg}`} className="text-blue-500 mt-2 block">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DraftBox;