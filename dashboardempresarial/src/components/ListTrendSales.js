import React, {useEffect, useState} from "react";
import {getTendencias} from "../services/HomeService";
import {deletTrendSales} from "../services/TrendSalesService";
import AddTrendSalesModal from './AddTrendSalesModal';
import UpdateTrendSalesModal from './UpdateTrendSalesModal';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const ListTrendSales = () =>{
 const [trendSales, setTrendSales] = useState([])
 const [addModalShow, setAddModalShow] = useState(false)
 const [editModalShow, setEditModalShow] = useState(false);
 const [editTrendSales, setEditTrendSales] = useState([])
 const [isUpdated, setIsUpdated] = useState(false);
 const [selected, setSelected] = useState(0);
 
useEffect(() =>{
    let mounted = true;
    if (trendSales.length && !isUpdated) {
        return;
    }
    getTendencias()
        .then(data =>{
            if(mounted) {
                setTrendSales(data);
            }
        })
        return () => {
            mounted=false;
            setIsUpdated(false);
        }
}, [isUpdated, trendSales])
const handleUpdate = (e, tre, índice) =>{
    setSelected(índice)
    e.preventDefault();
    setEditModalShow(true);
    setEditTrendSales(tre);
};

const handleAdd = (e) =>{
    e.preventDefault();
    setAddModalShow(true);
}

const handleDelete = (e, trendSales_id) =>{
    if (window.confirm("Tem certeza que deseja deletar?")){
    e.preventDefault();
    deletTrendSales(trendSales_id)
    .then((result)=>{
        alert(result)
        setIsUpdated(true)
    },
    (error) =>{
        alert("Não foi possivel deletar os dados")
    })
    }
}

let AddModelClose=()=>setAddModalShow(false)
let EditModelClose=()=>setEditModalShow(false)
return(
    <div className="container mx-auto">
        <div className="flex flex-col">
            <p id="manage"></p>
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">ID</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Expectativas</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Vendas</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Mês</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Valor</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Ação</th>
                    </tr>
                </thead>
                <tbody className="listando">
                    {trendSales.map((tre, índice) => (
                        <tr key={tre.id} className="border-b border-gray-200">
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{tre.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{tre.espectativa}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{tre.totalVendaNoMes}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{tre.mes}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{tre.valor}</td>
                            <td className="px-4 py-2">
                                <button
                                    className="mr-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                                    onClick={(event) => handleDelete(event, tre.id)}
                                >
                                    <AiOutlineDelete className="h-5 w-5 mr-1" />
                                </button>
                                <button
                                    className="mr-2 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                                    onClick={event => handleUpdate(event,tre, índice)}
                                >
                                    <AiOutlineEdit className="h-5 w-5 mr-1" />
                                </button>
                                <UpdateTrendSalesModal
                                    show={editModalShow}
                                    data={trendSales[selected]}
                                    trendSales={editTrendSales}
                                    setUpdated={setIsUpdated}
                                    onHide={EditModelClose}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={handleAdd}
                >
                    Adicionar Desempenho das Metas de Vendas
                </button>
                <AddTrendSalesModal
                    show={addModalShow}
                    setUpdated={setIsUpdated}
                    onHide={AddModelClose}
                />
            </div>
        </div>
    </div>
)
}

export default ListTrendSales;