import React from 'react';
import BarChart from './BarChart';
import { Circle, Line } from 'rc-progress';

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
              <h4 className="text-lg font-semibold text-gray-300">Radial Bar</h4>
              <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <br/>
              <div style={{ margin: 20 }}>
                <div style={{ fontSize: '19px' }}>Porcentagem: {30}%</div>
                <Line 
                  percent={30} 
                  strokeColor="#D9D9D9" 
                  strokeWidth={3} 
                  trailColor='#4682B4' 
                  trailWidth={3}
                  strokeLinecap='round' 
                  gapDegree={0}
                  gapPosition='top'
                  //className='lineBar' 
                  //style={{}} 
                /> 
              </div>
              <center>
              <div style={{ margin: 20, height: 200, width: 200}}>
                <Circle 
                  percent={30} 
                  strokeColor="#D9D9D9" 
                  strokeWidth={5} 
                  trailColor='#4682B4' 
                  trailWidth={5}
                  strokeLinecap='round' 
                  //className='lineBar' 
                  //style={{}} 
                /> 
              </div>
              </center>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-300">Card 2</h4>
              <p className="text-gray-400 mt-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div style={{ margin: 20 }}>
              <div style={{ fontSize: '19px' }}>Porcentagem: {40}%</div>
                <Line 
                  percent={40} 
                  strokeColor="#D9D9D9" 
                  strokeWidth={3} 
                  trailColor='#4682B4' 
                  trailWidth={3}
                  strokeLinecap='round' 
                  gapDegree={0}
                  gapPosition='top'
                  //className='lineBar' 
                  //style={{}} 
                /> 
              </div>
              <center>
              <div style={{ margin: 20, height: 200, width: 200}}>
                <Circle 
                  percent={40} 
                  strokeColor="#D9D9D9" 
                  strokeWidth={5} 
                  trailColor='#4682B4' 
                  trailWidth={5}
                  strokeLinecap='round' 
                  //className='lineBar' 
                  //style={{}} 
                /> 
              </div>
              </center>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-300">Card 3</h4>
              <p className="text-gray-400 mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              <div style={{ margin: 20 }}>
              <div style={{ fontSize: '19px' }}>Porcentagem: {50}%</div>
                <Line 
                  percent={50} 
                  strokeColor="#D9D9D9" 
                  strokeWidth={3} 
                  trailColor='#4682B4' 
                  trailWidth={3}
                  strokeLinecap='round' 
                  gapDegree={0}
                  gapPosition='top'
                  //className='lineBar' 
                  //style={{}} 
                /> 
              </div>
              <center>
              <div style={{ margin: 20, height: 200, width: 200}}>
                <Circle 
                  percent={50} 
                  strokeColor="#D9D9D9" 
                  strokeWidth={5} 
                  trailColor='#4682B4' 
                  trailWidth={5}
                  strokeLinecap='round' 
                  //className='lineBar' 
                  //style={{}} 
                /> 
              </div>
              </center>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
