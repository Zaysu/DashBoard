import { ListDashes, CircleDashed, Gauge, Basket, Browsers } from "@phosphor-icons/react";

const Navigation = () => {
  return (
    <aside className='w-72 bg-gray-800 p-6'>
      <nav className='bg-gray-800 rounded-lg mb-4 space-y-2 p-2'>
        <NavLink icon={<ListDashes size={32} />} text="Resultados" link="resultados"/>
        <NavLink icon={<CircleDashed size={32} />} text="Cadastro Desempenho" link="desempenho"/>
        <NavLink icon={<Gauge size={32} />} text="Cadastro Tendências de Venda" link="tendencias"/>
        <NavLink icon={<Basket size={32} />} text="Cadastro Avaliação de Metas" link="avaliacao"/>
        <NavLink icon={<Browsers size={32} />} text="Cadastro Trimestral de Vendas" link="vendas-trimestre"/>
        <NavLink icon={<Browsers size={32} />} text="Cadastro Mensal de Vendas" link="vendas-mensais"/>
      </nav>
    </aside>
  );
};

const NavLink = ({ icon, text , link}) => {
  return (
    <a href={link} className='flex items-center gap-2 font-semibold text-gray-300 hover:text-white'>
      {icon} | {text}
    </a>
  );
};

export default Navigation;
