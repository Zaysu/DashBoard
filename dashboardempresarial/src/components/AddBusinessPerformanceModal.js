import React, {useState} from "react";
import { addBusinessPerformance } from "../services/BusinessPerformanceService";
import { AiOutlineClose } from 'react-icons/ai';

const AddBusinessPerformanceModal = (props) =>{

    const [formData, setFormData] = useState({
        espectativa: "",
        totalVendaAnual: "",
        mes: "",
        valor: ""
    });
    
    const handleSumbit = async (e) =>{
        e.preventDefault();
        addBusinessPerformance(e.target)
        .then((result)=>{
            props.setUpdated(true);
            props.onHide();
            setFormData({
                espectativa: "",
                totalVendaAnual: "",
                mes: "",
                valor: ""
            });
        },
        (error) =>{
            alert("Não foi possível adicionar os Dados");
        })
    }

    return(
        <div className={`fixed inset-0 ${props.show ? '' : 'hidden'} overflow-y-auto`}>
            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white w-full md:w-1/2 p-6 rounded-lg relative">
                        <h2 className="text-lg font-semibold mb-4 text-black">
                            Preencha os dados do Desempenho Empresarial
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
                                        className="w-full border border-black rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2"
                                        type="number"
                                        name="espectativa"
                                        required
                                        placeholder=""
                                        value={formData.espectativa}
                                        onChange={(e) => setFormData({ ...formData, espectativa: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1" htmlFor="vendas">
                                        Vendas
                                    </label>
                                    <input
                                        className="w-full border border-black rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2"
                                        type="number"
                                        name="totalVendaAnual"
                                        required
                                        placeholder=""
                                        value={formData.totalVendaAnual}
                                        onChange={(e) => setFormData({ ...formData, totalVendaAnual: e.target.value })}
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
                                        value={formData.mes}
                                        onChange={(e) => setFormData({ ...formData, mes: e.target.value })}
                                        
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
                                        value={formData.valor}
                                        onChange={(e) => setFormData({ ...formData, valor: e.target.value })}
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


export default AddBusinessPerformanceModal;