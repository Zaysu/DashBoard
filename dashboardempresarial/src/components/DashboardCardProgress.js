import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressCircle';
import DashboardCardBase from './DashboardCardBase';
import { CurrencyCircleDollar } from "@phosphor-icons/react";
import axios from 'axios';

const DashboardCardProgress = ({ title, content, cardStyles }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/porcentagem-vendas/')
      .then(response => {
        const mediaPorcentagem = response.data.media_porcentagem;
        setPercent(mediaPorcentagem);
      })
      .catch(error => {
        console.error('Erro ao obter a porcentagem de vendas:', error);
      });
  }, []);

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
