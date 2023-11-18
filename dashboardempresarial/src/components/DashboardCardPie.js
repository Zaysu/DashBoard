import React from 'react';
import PieChart from './PieChart';
import DashboardCardBase from './DashboardCardBase';
import { CurrencyCircleDollar } from "@phosphor-icons/react";

const DashboardCardPie = ({ title, content, data, cardStyles }) => {
  return (
    <DashboardCardBase
      title={title}
      content={content}
      icon={<CurrencyCircleDollar size={32} />}
      cardStyles={cardStyles}
    >
      <PieChart data={data} />
    </DashboardCardBase>
  );
}

export default DashboardCardPie;
