import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data, options }) => {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChart;