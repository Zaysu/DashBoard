import React from 'react';
import BarChart from './BarGraph';
import DashboardCardBase from './DashboardCardBase';
import { CurrencyCircleDollar } from "@phosphor-icons/react";

const DashboardCardBar = ({ title, content, data, options, cardStyles }) => {
  return (
    <DashboardCardBase
      title={title}
      content={content}
      icon={<CurrencyCircleDollar size={32} />}
      cardStyles={cardStyles}
    >
      <BarChart options={options} data={data} />
    </DashboardCardBase>
  );
}

export default DashboardCardBar;