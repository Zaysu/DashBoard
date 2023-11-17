import React from 'react';
import ProgressBar from './ProgressCircle';
import PieChart from './PieChart';
import BarChart from './BarGraph';
import { CurrencyCircleDollar } from "@phosphor-icons/react";

const DashboardCard = ({ title, content, type, data, percent, options, cardStyles }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md"  style={{
      width: cardStyles?.width || '',
      height: cardStyles?.height || '',
      margin: cardStyles?.margin || ''
    }}>
      <CurrencyCircleDollar size={32} />
      <h4 className="text-lg font-semibold text-gray-300">{title}</h4>
      <p className="text-gray-400 mt-2">{content}</p><br />
      {type === 'progress' && <ProgressBar percent={percent} />}
      {type === 'pie' && <PieChart data={data} />}
      {type === 'bar' && <BarChart options={options} data={data} />}
    </div>
  );
}

export default DashboardCard;
