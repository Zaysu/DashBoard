import axios from 'axios';

export async function deletTrendSales(trendSales_id){
    const response = await axios.delete('http://127.0.0.1:8000/metas-tendencias-vendas/' + trendSales_id + '/', {
       method: 'DELETE',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       }
   });
   return response.data;
}

export async function addTrendSales(trendSales){
    const response = await axios.post('http://127.0.0.1:8000/metas-tendencias-vendas/', {
        id: null,
        espectativa: trendSales.espectativa.value,
        totalVendaNoMes: trendSales.totalVendaNoMes.value,
        mes: trendSales.mes.value,
        valor: trendSales.valor.value
    });
    console.log(response)
    return response.data;
}

export async function updateTrendSales(tre, trendSales){
    const response = await axios.put('http://127.0.0.1:8000/metas-tendencias-vendas/' + tre + '/', {
        id: null,
        espectativa: trendSales.espectativa.value,
        totalVendaNoMes: trendSales.totalVendaNoMes.value,
        mes: trendSales.mes.value,
        valor: trendSales.valor.value
    });
    return response.data;
}