import { useState, useEffect } from 'react';
import { fetchTargetSalesPercentage } from '../services/TargetSalesService';

const useTargetSalesPercentage = () => {
  const [percentagemTargetSales, setpercentagemTargetSales] = useState(0);

  useEffect(() => {
    async function fetchPercentagem() {
      try {
        const percentagem = await fetchTargetSalesPercentage();
        setpercentagemTargetSales(percentagem);
      } catch (error) {
        console.error('Erro ao buscar porcentagem de vendas:', error);
      }
    }

    fetchPercentagem();
  }, []);

  return percentagemTargetSales;
};

export default useTargetSalesPercentage;