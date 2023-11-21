import axios from 'axios';

export async function deletQuarterlySales(quarterlySales_id){
    const response = await axios.delete('http://127.0.0.1:8000/desempenho-trimestral-vendas/' + quarterlySales_id + '/', {
       method: 'DELETE',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       }
   });
   return response.data;
}

export async function addQuarterlySales(quarterlySales){
    const response = await axios.post('http://127.0.0.1:8000/desempenho-trimestral-vendas/', {
        id: null,
        espectativa: quarterlySales.espectativa.value,
        totalVendaNoTrimestre: quarterlySales.totalVendaNoTrimestre.value,
        trimestre: quarterlySales.trimestre.value,
        valor: quarterlySales.valor.value,
        quantidade: quarterlySales.quantidade.value
    });
    console.log(response)
    return response.data;
}

export async function updateQuarterlySales(quar, quarterlySales){
    const response = await axios.put('http://127.0.0.1:8000/desempenho-trimestral-vendas/' + quar + '/', {
        id: null,
        espectativa: quarterlySales.espectativa.value,
        totalVendaNoTrimestre: quarterlySales.totalVendaNoTrimestre.value,
        trimestre: quarterlySales.trimestre.value,
        valor: quarterlySales.valor.value,
        quantidade: quarterlySales.quantidade.value
    });
    return response.data;
}

export const fetchQuarterlySalesBar = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/bar-vendatrimestral/');
      
      if (!response.ok) {
        throw new Error('Erro ao obter os dados da API');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ocorreu um erro:', error);
      throw error;
    }
  };