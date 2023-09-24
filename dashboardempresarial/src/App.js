import React from 'react';
import BarChart from './BarChart';


export default function App() {
  return (
    <div className='bg-gray-900 text-gray-50 h-screen flex flex-col'>
      <div className='flex flex-1 overflow-hidden'>
        <aside className='w-72 bg-gray-800 p-6'>
          <nav className='bg-gray-800 rounded-lg mb-4 space-y-2 p-2'>
            <a
              href="/"
              className='flex items-center gap-2 font-semibold text-gray-300 hover:text-white'>
              Dashboard
            </a>
            <a
              href="/"
              className='flex items-center gap-2 font-semibold text-gray-300 hover:text-white'>
              Kanban
            </a>
            <a
              href="/"
              className='flex items-center gap-2 font-semibold text-gray-300 hover:text-white'>
              Inbox
            </a>
            <a
              href="/"
              className='flex items-center gap-2 font-semibold text-gray-300 hover:text-white'>
              E-Commerce
            </a>
            <a
              href="/"
              className='flex items-center gap-2 font-semibold text-gray-300 hover:text-white'>
              Pages
            </a>
          </nav>
        </aside>
        <main className='flex-1 p-6 overflow-y-auto'>
          <h3 className='text-xl font-semibold text-gray-300 mb-4'>Dashboard</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-300">Card 1</h4>
              <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-300">Card 2</h4>
              <p className="text-gray-400 mt-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-300">Card 3</h4>
              <p className="text-gray-400 mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
          </div>
         
        </main>
       
      </div>
      
    </div>
  );
}
