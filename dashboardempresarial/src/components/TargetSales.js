import React, { useEffect, useState } from 'react';
import { getMetas } from '../services/HomeService';
import "../App.css";

const TargetSales = () =>{
    const [targetSales, setTargetSales] = useState([]);

    useEffect(() =>{
        let mounted = true;
        getMetas().then(
            data =>{
                if(mounted){
                    setTargetSales(data)
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
                        {targetSales.map((tar) =>
                            <tr key={tar.id}>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{tar.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{tar.espectativa}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{tar.totalVendaNoMes}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{tar.trimestre}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{tar.valor}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default TargetSales;