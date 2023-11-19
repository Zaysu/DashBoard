import React from 'react';
import ProgressBar from './ProgressCircle';
import DashboardCardBase from './DashboardCardBase';
import { CurrencyCircleDollar } from "@phosphor-icons/react";

const DashboardCardProgress = ({ title, content, percent, cardStyles }) => {
  return (
    <DashboardCardBase
      title={title}
      content={content}
      icon={<CurrencyCircleDollar size={32} />}
      cardStyles={cardStyles}
    >
      <ProgressBar percent={percent} />
    </DashboardCardBase>
  );
}

export default DashboardCardProgress;
