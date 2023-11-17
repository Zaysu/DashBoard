const labels = ['1', '2', '3', '4'];
export const data = {
  
  labels,
  datasets: [
      {
          label: 'Expectativa de Vendas',
          data: labels.map((() => Math.floor(Math.random() * 100))),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'red',
          borderWidth: 1
      },
      {
          label: 'Vendas Realizadas',
          data: labels.map((() => Math.floor(Math.random() * 100))),
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
