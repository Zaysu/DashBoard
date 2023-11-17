import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 'auto'}}>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
