import React from 'react';
import ProgressBar from './ProgressBar';
import PieChart from './PieChart'; 
import {CurrencyCircleDollar } from "@phosphor-icons/react";

const DashboardCard = ({ title, content, type, data, percent }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <CurrencyCircleDollar size={32} /><h4 className="text-lg font-semibold text-gray-300">{title}</h4>
      <p className="text-gray-400 mt-2">{content}</p>
      {type === 'progress' && <ProgressBar percent={percent} />}
      {type === 'pie' && <PieChart data={data} />}

    </div>
  );
}

export default DashboardCard;