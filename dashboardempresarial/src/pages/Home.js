import React from 'react';
import BasePage from '../components/BasePage';
import '../services/chartConfig';
import DashboardCardProgress from '../components/DashboardCardProgress';
import DashboardCardBar from '../components/DashboardCardBar';
import DashboardCardPie from '../components/DashboardCardPie';
import { pieChartData } from '../components/ChartData'; 
import { data, options } from '../components/DataBar'; 
import useSalesPercentage from '../components/useSalesPercentage';
import useBusinessPercentage from '../components/useBusinessPercentage'; 
import useTargetSalesPercentage from '../components/useTargetSalesPercentage'; 


const Home = () => {
  const percentagemVendas = useSalesPercentage();
  const percentagemBusiness = useBusinessPercentage();
  const targetSalesPercentage = useTargetSalesPercentage();

  return (
    <BasePage
      content={
        <>
          <h3 className='text-xl font-semibold text-gray-300 mb-4'>Dashboard</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <DashboardCardProgress
              title="Gráfico de Desempenho Empresarial"
              content="Análise de Desempenho Anual"
              percent={percentagemBusiness}
            />
            <DashboardCardProgress
              title="Gráfico de Tendências de Venda"
              content="Análise das Vendas Mensais ao Longo do Ano."
              percent={percentagemVendas}
            />
            <DashboardCardProgress
              title="Gráfico de Avaliação de Metas"
              content="Acompanhamento do Progresso em Direção às Metas Empresariais"
              percent={targetSalesPercentage}
            />
          </div>
          <div className="flex">
            <DashboardCardBar
              title="Desempenho Trimestral de Vendas"
              content="Comparação das Expectativas x Vendas por Trimestre no Ano Atual"
              data={data}
              options={options}
              cardStyles={{width: '100%', height: '820px', margin: 20}}
            />
            <DashboardCardPie
              title="Desempenho Mensal de Vendas"
              content="Comparação das Vendas por Mês no Ano Atual"
              data={pieChartData}
              cardStyles={{width: '50%', margin: 20 }}
            />
          </div>
        </>
      }
    />
  );
}

export default Home;
