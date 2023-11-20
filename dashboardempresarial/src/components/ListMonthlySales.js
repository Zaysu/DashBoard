import React, {useEffect, useState} from "react";
import {getVendasMensais} from "../services/HomeService";
import {deletMonthlySales} from "../services/MonthlySalesService";
import AddMonthlySalesModal from './AddMonthlySalesModal';
import UpdateMonthlySalesModal from './UpdateMonthlySalesModal';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const ListMonthlySales = () =>{
 const [monthlySales, setMonthlySales] = useState([])
 const [addModalShow, setAddModalShow] = useState(false)
 const [editModalShow, setEditModalShow] = useState(false);
 const [editMonthlySales, setEditMonthlySales] = useState([])
 const [isUpdated, setIsUpdated] = useState(false);
 const [selected, setSelected] = useState(0);
 
useEffect(() =>{
    let mounted = true;
    if (monthlySales.length && !isUpdated) {
        return;
    }
    getVendasMensais()
        .then(data =>{
            if(mounted) {
                setMonthlySales(data);
            }
        })
        return () => {
            mounted=false;
            setIsUpdated(false);
        }
}, [isUpdated, monthlySales])
const handleUpdate = (e, mon, índice) =>{
    setSelected(índice)
    e.preventDefault();
    setEditModalShow(true);
    setEditMonthlySales(mon);
};

const handleAdd = (e) =>{
    e.preventDefault();
    setAddModalShow(true);
}

const handleDelete = (e, monthlySales_id) =>{
    if (window.confirm("Tem certeza que deseja deletar?")){
    e.preventDefault();
    deletMonthlySales(monthlySales_id)
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
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Quantidade</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Ação</th>
                    </tr>
                </thead>
                <tbody className="listando">
                    {monthlySales.map((mon, índice) => (
                        <tr key={mon.id} className="border-b border-gray-200">
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{mon.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{mon.espectativa}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{mon.totalVendaNoMes}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{mon.mes}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{mon.valor}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{mon.quantidade}</td>
                            <td className="px-4 py-2">
                                <button
                                    className="mr-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                                    onClick={(event) => handleDelete(event, mon.id)}
                                >
                                    <AiOutlineDelete className="h-5 w-5 mr-1" />
                                </button>
                                <button
                                    className="mr-2 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                                    onClick={event => handleUpdate(event,mon, índice)}
                                >
                                    <AiOutlineEdit className="h-5 w-5 mr-1" />
                                </button>
                                <UpdateMonthlySalesModal
                                    show={editModalShow}
                                    data={monthlySales[selected]}
                                    monthlySales={editMonthlySales}
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
                    Adicionar Desempenho das Vendas Mensais
                </button>
                <AddMonthlySalesModal
                    show={addModalShow}
                    setUpdated={setIsUpdated}
                    onHide={AddModelClose}
                />
            </div>
        </div>
    </div>
)
}

export default ListMonthlySales;