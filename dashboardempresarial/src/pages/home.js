import React from 'react';
import { Circle, Line } from 'rc-progress';
import {Gauge, ListDashes, Basket, CircleDashed, Browsers, CurrencyCircleDollar } from "@phosphor-icons/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const options = {
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

export const dataPie = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [
    {
      label: '% de vendas',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


export default function Home() {

  return (
    <div className='bg-gray-900 text-gray-50 h-screen flex flex-col'>
      <div className='flex flex-1 overflow-hidden'>
        <aside className='w-72 bg-gray-800 p-6'>
          <nav className='bg-gray-800 rounded-lg mb-4 space-y-2 p-2'>
            <a
              href="/"
              className='flex items-center gap-2 font-semibold text-gray-300 hover:text-white'>
              <ListDashes size={32} /> | Resultados
            </a>
            <a
              href="/"
              className='flex items-center gap-2 font-semibold text-gray-300 hover:text-white'>
              <CircleDashed size={32} /> | Cadastro Desempenho
            </a>
            <a
              href="/"
              className='flex items-center gap-2 font-semibold text-gray-300 hover:text-white'>
               <Gauge size={32} /> | Cadastro Tendências de Venda
            </a>
            <a
              href="/"
              className='flex items-center gap-2 font-semibold text-gray-300 hover:text-white'>
              <Basket size={32} /> | Cadastro Avaliação de Metas
            </a>
            <a
              href="/"
              className='flex items-center gap-2 font-semibold text-gray-300 hover:text-white'>
             <Browsers size={32} /> | Cadastro Trimestral de Vendas
            </a>
            <a
              href="/"
              className='flex items-center gap-2 font-semibold text-gray-300 hover:text-white'>
             <Browsers size={32} /> | Cadastro  Mensal de Vendas
            </a>
          </nav>
        </aside>
        <main className='flex-1 p-6 overflow-y-auto'>
          <h3 className='text-xl font-semibold text-gray-300 mb-4'>Dashboard</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <CurrencyCircleDollar size={32} /> <h4 className="text-lg font-semibold text-gray-300">Gráfico de Desempenho Empresarial</h4>
              <p className="text-gray-400 mt-2">Análise de Desempenho Anual</p>
              <br/>
              <div style={{ margin: 20 }}>
                <div style={{ fontSize: '19px' }}>Porcentagem: {30}%</div>
                <Line 
                  percent={30} 
                  strokeColor="#D9D9D9" 
                  strokeWidth={3} 
                  trailColor='#4682B4' 
                  trailWidth={3}
                  strokeLinecap='round' 
                  gapDegree={0}
                  gapPosition='top'
                  //className='lineBar' 
                  //style={{}} 
                /> 
              </div>
              <center>
              <div style={{ margin: 20, height: 200, width: 200}}>
                <Circle 
                  percent={30} 
                  strokeColor="#D9D9D9" 
                  strokeWidth={5} 
                  trailColor='#4682B4' 
                  trailWidth={5}
                  strokeLinecap='round' 
                  //className='lineBar' 
                  //style={{}} 
                /> 
              </div>
              </center>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <CurrencyCircleDollar size={32} /> <h4 className="text-lg font-semibold text-gray-300">Gráfico de Tendências de Venda</h4>
              <p className="text-gray-400 mt-2">Análise das Vendas Mensais ao Longo do Ano.</p>
              <div style={{ margin: 20 }}>
              <div style={{ fontSize: '19px' }}>Porcentagem: {40}%</div>
                <Line 
                  percent={40} 
                  strokeColor="#D9D9D9" 
                  strokeWidth={3} 
                  trailColor='#4682B4' 
                  trailWidth={3}
                  strokeLinecap='round' 
                  gapDegree={0}
                  gapPosition='top'
                  //className='lineBar' 
                  //style={{}} 
                /> 
              </div>
              <center>
              <div style={{ margin: 20, height: 200, width: 200}}>
                <Circle 
                  percent={40} 
                  strokeColor="#D9D9D9" 
                  strokeWidth={5} 
                  trailColor='#4682B4' 
                  trailWidth={5}
                  strokeLinecap='round' 
                  //className='lineBar' 
                  //style={{}} 
                /> 
              </div>
              </center>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <CurrencyCircleDollar size={32} /> <h4 className="text-lg font-semibold text-gray-300">Gráfico de Avaliação de Metas</h4>
              <p className="text-gray-400 mt-2">Acompanhamento do Progresso em Direção às Metas Empresariais</p>
              <div style={{ margin: 20 }}>
              <div style={{ fontSize: '19px' }}>Porcentagem: {50}%</div>
                <Line 
                  percent={50} 
                  strokeColor="#D9D9D9" 
                  strokeWidth={3} 
                  trailColor='#4682B4' 
                  trailWidth={3}
                  strokeLinecap='round' 
                  gapDegree={0}
                  gapPosition='top'
                  //className='lineBar' 
                  //style={{}} 
                /> 
              </div>
              <center>
              <div style={{ margin: 20, height: 200, width: 200}}>
                <Circle 
                  percent={50} 
                  strokeColor="#D9D9D9" 
                  strokeWidth={5} 
                  trailColor='#4682B4' 
                  trailWidth={5}
                  strokeLinecap='round' 
                  //className='lineBar' 
                  //style={{}} 
                /> 
              </div>
              </center>
            </div>
          </div>

          <div className="flex">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md" style={{width: '100%', height: '820px', margin: 20}}>
            <CurrencyCircleDollar size={32} /> <h4 className="text-lg font-semibold text-gray-300">Desempenho Trimestral de Vendas</h4>
              <p className="text-gray-400 mt-2">Comparação das Expectativas x Vendas por Trimestre no Ano Atual</p>
              <Bar options={options} data={data} />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md" style={{width: '50%', margin: 20 }}>
              <h4 className="text-lg font-semibold text-gray-300"> <CurrencyCircleDollar size={32} /> Desempenho Mensal de Vendas</h4>
              <p className="text-gray-400 mt-2">Comparação das Vendas por Mês no Ano Atual</p>
              <div style={{ width: '100%', height: 'auto'}}>
                  <Pie data={dataPie} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
