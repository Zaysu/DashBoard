import React from 'react';
import Navigation from './Navigation';

const BasePage = ({ content }) => {
  return (
    <div className='bg-gray-900 text-gray-50 h-screen flex flex-col'>
      <div className='flex flex-1 overflow-hidden'>
        <Navigation />
        <main className='flex-1 p-6 overflow-y-auto'>
          {content}
        </main>
      </div>
    </div>
  );
}

export default BasePage;
