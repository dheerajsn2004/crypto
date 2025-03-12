import React from 'react';
import { Link } from 'react-router-dom';

const Inbox = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Inbox</h1>
      <div className="flex space-x-4">
        <Link to="/inbox/sent" className="px-4 py-2 bg-blue-500 text-white rounded-md">Sent</Link>
        <Link to="/inbox/draft" className="px-4 py-2 bg-blue-500 text-white rounded-md">Draft</Link>
      </div>
      <div className="mt-4">
        {/* Add logic to display sent and draft messages here */}
      </div>
    </div>
  );
};

export default Inbox;