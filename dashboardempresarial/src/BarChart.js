import React from 'react';
import { XYPlot, VerticalBarSeries, XAxis, YAxis } from 'react-vis';

const BarChart = () => {
  const data = [
    { x: 'Janeiro', y: 65 },
    { x: 'Fevereiro', y: 59 },
    { x: 'Março', y: 80 },
    { x: 'Abril', y: 81 },
    { x: 'Maio', y: 56 },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold text-gray-300 mb-4">Gráfico de Barras</h4>
      <XYPlot xType="ordinal" width={300} height={200} className="mx-auto">
        <VerticalBarSeries data={data} />
        <XAxis />
        <YAxis />
      </XYPlot>
    </div>
  );
};

export default BarChart;
