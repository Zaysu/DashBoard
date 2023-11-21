import { fetchQuarterlySalesBar } from '../services/QuarterlySalesService.js';
const apiData = await fetchQuarterlySalesBar();

const apiLabels = apiData.labels;
const expectativaVendas = apiData.expectativaVendas;
const vendasRealizadas = apiData.vendasRealizadas;

export const data = {
  labels: apiLabels,
  datasets: [
    {
      label: 'Expectativa de Vendas',
      data: expectativaVendas,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'red',
      borderWidth: 1
    },
    {
      label: 'Vendas Realizadas',
      data: vendasRealizadas,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'blue',
      borderWidth: 1
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Dataset',
    },
  },
};
