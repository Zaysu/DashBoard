import React from 'react';

const DashboardCard = ({ title, content }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold text-gray-300">{title}</h4>
      <p className="text-gray-400 mt-2">{content}</p>
    </div>
  );
}

export default DashboardCard;
