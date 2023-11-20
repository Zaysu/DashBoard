import React, {useEffect, useState} from "react";
import {getVendasTrimestre} from "../services/HomeService";
import {deletQuarterlySales} from "../services/QuarterlySalesService";
import AddQuarterlySalesModal from './AddQuarterlySalesModal';
import UpdateQuarterlySalesModal from './UpdateQuarterlySalesModal';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const ListQuarterlySales = () =>{
 const [quarterlySales, setQuarterlySales] = useState([])
 const [addModalShow, setAddModalShow] = useState(false)
 const [editModalShow, setEditModalShow] = useState(false);
 const [editQuarterlySales, setEditQuarterlySales] = useState([])
 const [isUpdated, setIsUpdated] = useState(false);
 const [selected, setSelected] = useState(0);
 
useEffect(() =>{
    let mounted = true;
    if (quarterlySales.length && !isUpdated) {
        return;
    }
    getVendasTrimestre()
        .then(data =>{
            if(mounted) {
                setQuarterlySales(data);
            }
        })
        return () => {
            mounted=false;
            setIsUpdated(false);
        }
}, [isUpdated, quarterlySales])
const handleUpdate = (e, qua, índice) =>{
    setSelected(índice)
    e.preventDefault();
    setEditModalShow(true);
    setEditQuarterlySales(qua);
};

const handleAdd = (e) =>{
    e.preventDefault();
    setAddModalShow(true);
}

const handleDelete = (e, quarterlySales_id) =>{
    if (window.confirm("Tem certeza que deseja deletar?")){
    e.preventDefault();
    deletQuarterlySales(quarterlySales_id)
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
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Trimestre</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Valor</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Quantidade</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Ação</th>
                    </tr>
                </thead>
                <tbody className="listando">
                    {quarterlySales.map((qua, índice) => (
                        <tr key={qua.id} className="border-b border-gray-200">
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{qua.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{qua.espectativa}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{qua.totalVendaNoTrimestre}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{qua.trimestre}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{qua.valor}</td>
                            <td className="px-6 py-4 whitespace-nowrap texto-preto">{qua.quantidade}</td>
                            <td className="px-4 py-2">
                                <button
                                    className="mr-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                                    onClick={(event) => handleDelete(event, qua.id)}
                                >
                                    <AiOutlineDelete className="h-5 w-5 mr-1" />
                                </button>
                                <button
                                    className="mr-2 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                                    onClick={event => handleUpdate(event,qua, índice)}
                                >
                                    <AiOutlineEdit className="h-5 w-5 mr-1" />
                                </button>
                                <UpdateQuarterlySalesModal
                                    show={editModalShow}
                                    data={quarterlySales[selected]}
                                    quarterlySales={editQuarterlySales}
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
                    Adicionar Desempenho das Vendas Trimestrais
                </button>
                <AddQuarterlySalesModal
                    show={addModalShow}
                    setUpdated={setIsUpdated}
                    onHide={AddModelClose}
                />
            </div>
        </div>
    </div>
)
}

export default ListQuarterlySales;