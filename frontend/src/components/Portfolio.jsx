import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
      <div className="space-y-4">
        {[1, 2, 3].map((project) => (
          <div key={project} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Project {project}</h2>
            <Link to={`/portfolio/project/${project}`} className="text-blue-500 mt-2 block">View Project</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;