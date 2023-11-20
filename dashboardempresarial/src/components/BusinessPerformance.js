import React, { useEffect, useState } from 'react';
import { getDesempenho } from '../services/HomeService';
import "../App.css";

const BusinessPerformance = () =>{
    const [businessPerformance, setBusinessPerformance] = useState([]);

    useEffect(() =>{
        let mounted = true;
        getDesempenho().then(
            data =>{
                if(mounted){
                    setBusinessPerformance(data)
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
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {businessPerformance.map((bus) =>
                            <tr key={bus.id}>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{bus.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{bus.espectativa}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{bus.totalVendaAnual}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{bus.mes}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{bus.valor}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BusinessPerformance;