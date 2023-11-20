import React from 'react';
import BasePage from '../components/BasePage';
import ListMonthlySales from '../components/ListMonthlySales';
import MonthlySales from '../components/MonthlySales';
import AddMonthlySalesModal from '../components/AddMonthlySalesModal';
import UpdateMonthlySalesModal from '../components/UpdateMonthlySalesModal';

const VendasMensais = () => {
  return (
    <BasePage
      content={
        <>
          <h3 className='text-xl font-semibold text-gray-300 mb-4'>Gestão de Vendas Mensais</h3>
          <ListMonthlySales  
          />
        </>
      }
    />
  );
}

export default VendasMensais;

