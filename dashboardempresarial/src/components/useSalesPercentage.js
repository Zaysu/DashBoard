import { useState, useEffect } from 'react';
import { fetchSalesPercentage } from '../services/salesPercentageService';

const useSalesPercentage = () => {
  const [percentagemVendas, setPercentagemVendas] = useState(0);

  useEffect(() => {
    async function fetchPercentagem() {
      try {
        const percentagem = await fetchSalesPercentage();
        setPercentagemVendas(percentagem);
      } catch (error) {
        console.error('Erro ao buscar porcentagem de vendas:', error);
      }
    }

    fetchPercentagem();
  }, []);

  return percentagemVendas;
};

export default useSalesPercentage;