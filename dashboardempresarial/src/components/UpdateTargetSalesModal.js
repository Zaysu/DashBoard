import React from "react";
import { updateTargetSales } from "../services/TargetSalesService";
import { AiOutlineClose } from 'react-icons/ai';

const UpdateTargetSalesModal = (props) =>{

    const handleSumbit = (e) =>{
        e.preventDefault();
        updateTargetSales(props.targetSales.id, e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
            props.onHide()
        },
        (error) =>{
            alert("Não foi possível editar os Dados");
        })

    }

    return(
        <div className={`fixed inset-0 ${props.show ? '' : 'hidden'} overflow-y-auto`}>
            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white w-full md:w-1/2 p-6 rounded-lg relative">
                        <h2 className="text-lg font-semibold mb-4 text-black">
                            Modifique os dados do Desempenho das Metas de Vendas
                        </h2>
                        <button
                            className="bg-transparent hover:bg-gray-200 text-black py-2 px-4 rounded absolute top-0 right-0"
                            onClick={props.onHide}
                        >   
                            <AiOutlineClose size={20} />
                        </button>
                        <div className="mb-4 text-black">
                            <form onSubmit={handleSumbit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1" htmlFor="expectativas">
                                        Expectativas
                                    </label>
                                    <input
                                        className="w-full border border-black rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2 "
                                        type="number"
                                        name="espectativa"
                                        required
                                        placeholder=""
                                        defaultValue={props.data.espectativa}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1" htmlFor="vendas">
                                        Vendas
                                    </label>
                                    <input
                                        className="w-full border border-black rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2"
                                        type="number"
                                        name="totalVendaNoMes"
                                        required
                                        placeholder=""
                                        defaultValue={props.data.totalVendaNoMes}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1" htmlFor="mes">
                                        Mês
                                    </label>
                                    <input
                                        className="w-full border border-black rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2"
                                        type="number"
                                        name="mes"
                                        required
                                        placeholder=""
                                        defaultValue={props.data.mes}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1" htmlFor="valor">
                                        Valor
                                    </label>
                                    <input
                                        className="w-full border border-black rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2"
                                        type="number"
                                        name="valor"
                                        required
                                        placeholder=""
                                        defaultValue={props.data.valor}
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                                        type="submit"
                                    >
                                        Registrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UpdateTargetSalesModal;