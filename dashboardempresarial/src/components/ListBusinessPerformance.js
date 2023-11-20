import React, {useEffect, useState} from "react";
import {getDesempenho} from "../services/HomeService";
import {deletBusinessPerformance} from "../services/BusinessPerformanceService";
import AddBusinessPerformanceModal from './AddBusinessPerformanceModal';
import UpdateBusinessPerformanceModal from './UpdateBusinessPerformanceModal';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const ListBusinessPerformance = () =>{
 const [businessPerformance, setBusinessPerformance] = useState([])
 const [addModalShow, setAddModalShow] = useState(false)
 const [editModalShow, setEditModalShow] = useState(false);
 const [editBusinessPerformance, setEditBusinessPerformance] = useState([])
 const [isUpdated, setIsUpdated] = useState(false);
 const [selected, setSelected] = useState(0);
 
useEffect(() =>{
    let mounted = true;
    if (businessPerformance.length && !isUpdated) {
        return;
    }
    getDesempenho()
        .then(data =>{
            if(mounted) {
                setBusinessPerformance(data);
            }
        })
        return () => {
            mounted=false;
            setIsUpdated(false);
        }
}, [isUpdated, businessPerformance])
const handleUpdate = (e, bus, índice) =>{
    setSelected(índice)
    e.preventDefault();
    setEditModalShow(true);
    setEditBusinessPerformance(bus);
};

const handleAdd = (e) =>{
    e.preventDefault();
    setAddModalShow(true);
}

const handleDelete = (e, businessPerformance_id) =>{
    if (window.confirm("Tem certeza que deseja deletar?")){
    e.preventDefault();
    deletBusinessPerformance(businessPerformance_id)
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
                    {businessPerformance.map((bus, índice) => (
                        <tr key={bus.id} className="border-b border-gray-200">
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{bus.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{bus.espectativa}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{bus.totalVendaAnual}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{bus.mes}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{bus.valor}</td>
                            <td className="px-4 py-2">
                                <button
                                    className="mr-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                                    onClick={(event) => handleDelete(event, bus.id)}
                                >
                                    <AiOutlineDelete className="h-5 w-5 mr-1" />
                                </button>
                                <button
                                    className="mr-2 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                                    onClick={event => handleUpdate(event,bus, índice)}
                                >
                                    <AiOutlineEdit className="h-5 w-5 mr-1" />
                                </button>
                                <UpdateBusinessPerformanceModal
                                    show={editModalShow}
                                    data={businessPerformance[selected]}
                                    businessPerformance={editBusinessPerformance}
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
                    Adicionar Desempenho Empresarial
                </button>
                <AddBusinessPerformanceModal
                    show={addModalShow}
                    setUpdated={setIsUpdated}
                    onHide={AddModelClose}
                />
            </div>
        </div>
    </div>
)
}

export default ListBusinessPerformance;