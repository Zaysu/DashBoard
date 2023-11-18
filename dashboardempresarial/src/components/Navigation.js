import React from 'react';
import { ListDashes, CircleDashed, Gauge, Basket, Browsers } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <aside className='w-72 bg-gray-800 p-6'>
      <nav className='bg-gray-800 rounded-lg mb-4 space-y-2 p-2'>
        <CustomNavLink icon={<ListDashes size={32} />} text="Resultados" link="/" />
        <CustomNavLink icon={<CircleDashed size={32} />} text="Cadastro Desempenho" link="/desempenho" />
        <CustomNavLink icon={<Gauge size={32} />} text="Cadastro Tendências de Venda" link="/tendencias" />
        <CustomNavLink icon={<Basket size={32} />} text="Cadastro Avaliação de Metas" link="/avaliacao" />
        <CustomNavLink icon={<Browsers size={32} />} text="Cadastro Trimestral de Vendas" link="/vendas-trimestre" />
        <CustomNavLink icon={<Browsers size={32} />} text="Cadastro Mensal de Vendas" link="/vendas-mensais" />
      </nav>
    </aside>
  );
};

const CustomNavLink = ({ icon, text, link }) => {
  return (
    <NavLink to={link} className='flex items-center gap-2 font-semibold text-gray-300 hover:text-white'>
      {icon} | {text}
    </NavLink>
  );
};

export default Navigation;
