import React from 'react';

const companies = [
  { name: 'Google', description: 'Upcoming placement drive for SDE roles.', logo: '/path-to-logo' },
  { name: 'Microsoft', description: 'Learn more about software engineering opportunities.', logo: '/path-to-logo' },
  // Add more companies here
];

const PlacementsPage = () => {
  return (
    <div id="placements" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Placements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-200 transition-all">
            <img src={company.logo} alt={company.name} className="h-16 w-auto mb-4" />
            <h3 className="text-xl font-semibold">{company.name}</h3>
            <p className="mt-2">{company.description}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacementsPage;
