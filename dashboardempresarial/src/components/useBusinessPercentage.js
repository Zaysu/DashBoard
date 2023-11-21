import { useState, useEffect } from 'react';
import { fetchPerformaceBusinessPercentage } from '../services/BusinessPerformanceService';

const useBusinessPercentage = () => {
  const [percentagemBusiness, setPercentagemBusiness] = useState(0);

  useEffect(() => {
    async function fetchPercentagem() {
      try {
        const percentagem = await fetchPerformaceBusinessPercentage();
        setPercentagemBusiness(percentagem);
      } catch (error) {
        console.error('Erro ao buscar porcentagem de vendas:', error);
      }
    }

    fetchPercentagem();
  }, []);

  return percentagemBusiness;
};

export default useBusinessPercentage;