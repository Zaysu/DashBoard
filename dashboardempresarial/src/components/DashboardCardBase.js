import React from 'react';

const DashboardCardBase = ({ title, content, icon, children, cardStyles }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md" style={{
      width: cardStyles?.width || '',
      height: cardStyles?.height || '',
      margin: cardStyles?.margin || ''
    }}>
      <div className="flex items-center mb-4">
        {icon}
        <h4 className="text-lg font-semibold text-gray-300 ml-2">{title}</h4>
      </div>
      <p className="text-gray-400">{content}</p>
      <br />
      {children}
    </div>
  );
}

export default DashboardCardBase;
