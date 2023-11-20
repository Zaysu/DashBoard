import axios from 'axios';

export async function deletMonthlySales(monthlySales_id){
    const response = await axios.delete('http://127.0.0.1:8000/desempenho-mensal-vendas/' + monthlySales_id + '/', {
       method: 'DELETE',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       }
   });
   return response.data;
}

export async function addMonthlySales(monthlySales){
    const response = await axios.post('http://127.0.0.1:8000/desempenho-mensal-vendas/', {
        id: null,
        espectativa: monthlySales.espectativa.value,
        totalVendaNoMes: monthlySales.totalVendaNoMes.value,
        mes: monthlySales.mes.value,
        valor: monthlySales.valor.value,
        quantidade: monthlySales.quantidade.value
    });
    console.log(response)
    return response.data;
}

export async function updateMonthlySales(mon, monthlySales){
    const response = await axios.put('http://127.0.0.1:8000/desempenho-mensal-vendas/' + mon + '/', {
        id: null,
        espectativa: monthlySales.espectativa.value,
        totalVendaNoMes: monthlySales.totalVendaNoMes.value,
        mes: monthlySales.mes.value,
        valor: monthlySales.valor.value,
        quantidade: monthlySales.quantidade.value
    });
    return response.data;
}