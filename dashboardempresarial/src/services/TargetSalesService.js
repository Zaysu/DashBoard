import axios from 'axios';

export async function deletTargetSales(targetSales_id){
    const response = await axios.delete('http://127.0.0.1:8000/metas-vendas/' + targetSales_id + '/', {
       method: 'DELETE',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       }
   });
   return response.data;
}

export async function addTargetSales(targetSales){
    const response = await axios.post('http://127.0.0.1:8000/metas-vendas/', {
        id: null,
        espectativa: targetSales.espectativa.value,
        totalVendaNoMes: targetSales.totalVendaNoMes.value,
        mes: targetSales.mes.value,
        valor: targetSales.valor.value
    });
    console.log(response)
    return response.data;
}

export async function updateTargetSales(tar, targetSales){
    const response = await axios.put('http://127.0.0.1:8000/metas-vendas/' + tar + '/', {
        id: null,
        espectativa: targetSales.espectativa.value,
        totalVendaNoMes: targetSales.totalVendaNoMes.value,
        mes: targetSales.mes.value,
        valor: targetSales.valor.value
    });
    return response.data;
}

export const fetchTargetSalesPercentage = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/porcentagem-metas/');
      const porcentagem_por_ano = response.data.porcentagem_por_ano;
      return porcentagem_por_ano;
    } catch (error) {
      console.error('Erro ao obter a porcentagem de desempenho empresarial:', error);
      throw error; 
    }
  };