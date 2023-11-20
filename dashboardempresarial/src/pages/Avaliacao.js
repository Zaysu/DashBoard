import React from 'react';
import BasePage from '../components/BasePage';
import ListTargetSales from '../components/ListTargetSales';
import TargetSales from '../components/TargetSales';
import AddTargetSalesModal from '../components/AddTargetSalesModal';
import UpdateTargetSalesModal from '../components/UpdateTargetSalesModal';

const Avaliacao = () => {
  return (
    <BasePage
      content={
        <>
          <h3 className='text-xl font-semibold text-gray-300 mb-4'>Gestão de Avaliação de Metas</h3>
          <ListTargetSales
          />
        </>
      }
    />
  );
}

export default Avaliacao;
