import React from 'react';
import BasePage from '../components/BasePage';
import ListBusinessPerformance from '../components/ListBusinessPerformance';
import BusinessPerformance from '../components/BusinessPerformance';
import AddBusinessPerformanceModal from '../components/AddBusinessPerformanceModal';
import UpdateBusinessPerformanceModal from '../components/UpdateBusinessPerformanceModal';

const Desempenho = () => {
  return (
    <BasePage
      content={
        <>
          <h3 className='text-xl font-semibold text-gray-300 mb-4'>Gestão de Desempenho</h3>
          <ListBusinessPerformance
          />
        </>
      }
    />
  );
}

export default Desempenho;
