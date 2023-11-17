import axios from 'axios';

export async function getVendasMensais() {
    const response = await axios.get('http://127.0.0.1:8000/desempenho-mensal-vendas/');
    return response.data;
}

export async function getVendasMensaisId(id) {
    const response = await axios.get(`http://127.0.0.1:8000/desempenho-mensal-vendas/${id}`);
    return response.data;
}

export async function getVendasTrimestre() {
    const response = await axios.get('http://127.0.0.1:8000/desempenho-trimestral-vendas/');
    return response.data;
}

export async function getVendasTrimestreId(id) {
    const response = await axios.get(`http://127.0.0.1:8000/desempenho-trimestral-vendas/${id}`);
    return response.data;
}

export async function getMetas() {
    const response = await axios.get('http://127.0.0.1:8000/metas-vendas/');
    return response.data;
}

export async function getMetasId(id) {
    const response = await axios.get(`http://127.0.0.1:8000/metas-vendas/${id}`);
    return response.data;
}

export async function getTendencias() {
    const response = await axios.get('http://127.0.0.1:8000/metas-tendencias-vendas/');
    return response.data;
}

export async function getTendenciasId(id) {
    const response = await axios.get(`http://127.0.0.1:8000/metas-tendencias-vendas/${id}`);
    return response.data;
}

export async function getDesempenho() {
    const response = await axios.get('http://127.0.0.1:8000/desempenho-empresarial/');
    return response.data;
}

export async function getDesempenhoId(id) {
    const response = await axios.get(`http://127.0.0.1:8000/desempenho-empresarial/${id}`);
    return response.data;
}



