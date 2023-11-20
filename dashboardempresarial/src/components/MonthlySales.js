import React, { useEffect, useState } from 'react';
import { getVendasMensais } from '../services/HomeService';
import "../App.css";

const MonthlySales = () =>{
    const [monthlySales, setMonthlySales] = useState([]);

    useEffect(() =>{
        let mounted = true;
        getVendasMensais().then(
            data =>{
                if(mounted){
                    setMonthlySales(data)
                }
            })
            return () => mounted = false;
    }, [])

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col">
                <p id="before-table"></p>
                <table className="min-w-full divide-y divide-gray-200" id="dataTable">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expectativas</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendas</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mês</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {monthlySales.map((mon) =>
                            <tr key={mon.id}>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{mon.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{mon.espectativa}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{mon.totalVendaNoMes}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{mon.mes}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{mon.valor}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{mon.quantidade}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MonthlySales;