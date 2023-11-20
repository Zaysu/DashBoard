import React from 'react';
import BasePage from '../components/BasePage';
import ListTrendSales from '../components/ListTrendSales';
import TrendSales from '../components/TrendSales';
import AddTrendSalesModal from '../components/AddTrendSalesModal';
import UpdateTrendSalesModal from '../components/UpdateTrendSalesModal';

const Tendencias = () => {
  return (
    <BasePage
      content={
        <>
          <h3 className='text-xl font-semibold text-gray-300 mb-4'>Gestão de Tendências</h3>
          <ListTrendSales
          />
        </>
      }
    />
  );
}

export default Tendencias;

