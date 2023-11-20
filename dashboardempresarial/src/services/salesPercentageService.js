import axios from 'axios';

export const fetchSalesPercentage = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/porcentagem-vendas/');
      const mediaPorcentagem = response.data.media_porcentagem;
      return mediaPorcentagem;
    } catch (error) {
      console.error('Erro ao obter a porcentagem de vendas:', error);
      throw error; 
    }
  };