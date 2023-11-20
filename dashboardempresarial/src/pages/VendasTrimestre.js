import React from 'react';
import BasePage from '../components/BasePage';
import ListQuarterlySales from '../components/ListQuarterlySales';
import QuarterlySales from '../components/QuarterlySales';
import AddQuarterlySalesModal from '../components/AddQuarterlySalesModal';
import UpdateQuarterlySalesModal from '../components/UpdateQuarterlySalesModal';


const VendasTrimestre = () => {
  return (
    <BasePage
      content={
        <>
          <h3 className='text-xl font-semibold text-gray-300 mb-4'>Gestão de Vendas Trimestrais</h3>
          <ListQuarterlySales  
        />
        </>
      }
    />
  );
}

export default VendasTrimestre;
