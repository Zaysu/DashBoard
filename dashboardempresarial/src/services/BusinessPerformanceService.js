import axios from 'axios';

export async function deletBusinessPerformance(businessPerformance_id){
    const response = await axios.delete('http://127.0.0.1:8000/desempenho-empresarial/' + businessPerformance_id + '/', {
       method: 'DELETE',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       }
   });
   return response.data;
}

export async function addBusinessPerformance(businessPerformance){
    const response = await axios.post('http://127.0.0.1:8000/desempenho-empresarial/', {
        id: null,
        espectativa: businessPerformance.espectativa.value,
        totalVendaAnual: businessPerformance.totalVendaAnual.value,
        mes: businessPerformance.mes.value,
        valor: businessPerformance.valor.value
    });
    console.log(response)
    return response.data;
}

export async function updateBusinessPerformance(bus, businessPerformance){
    const response = await axios.put('http://127.0.0.1:8000/desempenho-empresarial/' + bus + '/', {
        id: null,
        espectativa: businessPerformance.espectativa.value,
        totalVendaAnual: businessPerformance.totalVendaAnual.value,
        mes: businessPerformance.mes.value,
        valor: businessPerformance.valor.value
    });
    return response.data;
}


export const fetchPerformaceBusinessPercentage = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/porcentagem-desempenhoempresarial/');
      const porcentagem_por_ano = response.data.porcentagem_por_ano;
      return porcentagem_por_ano;
    } catch (error) {
      console.error('Erro ao obter a porcentagem de desempenho empresarial:', error);
      throw error; 
    }
  };