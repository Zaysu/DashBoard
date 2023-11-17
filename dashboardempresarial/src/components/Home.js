import React from 'react';
import Navigation from './Navigation';
import DashboardCard from './DashboardCard';

const Home = () => {
  return (
    <div className='bg-gray-900 text-gray-50 h-screen flex flex-col'>
      <div className='flex flex-1 overflow-hidden'>
        <Navigation />
        <main className='flex-1 p-6 overflow-y-auto'>
          <h3 className='text-xl font-semibold text-gray-300 mb-4'>Dashboard</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <DashboardCard
              title="Card 1"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <DashboardCard
              title="Card 2"
              content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <DashboardCard
              title="Card 3"
              content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            />
          </div>

        </main>

      </div>
    </div>
  );
}

export default Home;