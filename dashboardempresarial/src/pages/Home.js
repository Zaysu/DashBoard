import React from 'react';
import BasePage from '../components/BasePage';
import Navigation from '../components/Navigation';
import DashboardCard from '../components/DashboardCard';
import { pieChartData } from '../components/ChartData'; 
import { data, options } from '../components/DataBar'; 

const Home = () => {
  return (
    <BasePage
      content={
        <>
          <h3 className='text-xl font-semibold text-gray-300 mb-4'>Dashboard</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <DashboardCard
              title="Gráfico de Desempenho Empresarial"
              content="Análise de Desempenho Anual"
              type="progress"
              percent={30}
            />
            <DashboardCard
              title="Gráfico de Tendências de Venda"
              content="Análise das Vendas Mensais ao Longo do Ano."
              type="progress"
              percent={40}
            />
            <DashboardCard
              title="Gráfico de Desempenho Empresarial"
              content="Acompanhamento do Progresso em Direção às Metas Empresariais"
              type="progress"
              percent={50}
            />
          </div>
          <div className="flex">
            <DashboardCard
              title="Desempenho Trimestral de Vendas"
              content="Comparação das Expectativas x Vendas por Trimestre no Ano Atual"
              type="bar"
              data={data}
              options={options}
              cardStyles={{ width: '100%', height: '620px', margin: 20 }}
            />
            <DashboardCard
              title="Desempenho Mensal de Vendas"
              content="Comparação das Vendas por Mês no Ano Atual"
              type="pie"
              data={pieChartData}
              cardStyles={{ width: '50%', margin: 20 }}
            />
          </div>
        </>
      }
    />
  );
}

export default Home;
