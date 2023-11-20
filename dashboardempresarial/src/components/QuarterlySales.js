import React, { useEffect, useState } from 'react';
import { getVendasTrimestre } from '../services/HomeService';
import "../App.css";

const QuarterlySales = () =>{
    const [quarterlySales, setQuarterlySales] = useState([]);

    useEffect(() =>{
        let mounted = true;
        getVendasTrimestre().then(
            data =>{
                if(mounted){
                    setQuarterlySales(data)
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
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trimestre</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {quarterlySales.map((quar) =>
                            <tr key={quar.id}>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{quar.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{quar.espectativa}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{quar.totalVendaNoTrimestre}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{quar.trimestre}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{quar.valor}</td>
                                <td className="px-6 py-4 whitespace-nowrap texto-preto">{quar.quantidade}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default QuarterlySales;