import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const RadialBarChart = ({ data }) => {
  return (
    <div className="radial-bar-chart">
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default RadialBarChart;
