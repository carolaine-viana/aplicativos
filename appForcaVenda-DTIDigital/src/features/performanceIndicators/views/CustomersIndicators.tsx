import React from 'react';

import { Typography, ProgressBarIndicator } from '@shared/components';
import { ITimeCourse } from 'shared/types';
// import { ICustomersIndicatorsReadDto } from 'shared/models';

import { Content } from './PerformanceSC';
import IndicatorCard from './IndicatorCard';
import IndicatorLabelValue from './IndicatorLabelValue';

interface ICustomersIndicatorsProps {
  // data?: {
  //   month: {
  //     objetivo: number;
  //     realizado: number;
  //     gap: number;
  //   };
  //   week: {
  //     objetivo: number;
  //     realizado: number;
  //     gap: number;
  //   };
  // };
}

const indicator = {
  title: 'Clientes',
  description: `Objetivo: Desafio da quantidade de clientes distintos atendidos durante o período.
  Realizado: Quantidade de clientes distintos atendidos durante o período.
  GAP: Quantidade de clientes distintos, que faltam para atingir o objetivo do período.
  % de atingimento: Percentual de cumprimento do realizado em relação ao objetivo.`,
};

const CustomersIndicators: React.FC<ICustomersIndicatorsProps> = ({ data, onPressInfo }) => {
  const renderContent = (selectedTab: ITimeCourse['monthWeek']) => {
    const dataTab = data?.[selectedTab];

    return (
      <>
        <Content>
          <IndicatorLabelValue label="Objetivo" value={dataTab?.customersForecast} />
          <IndicatorLabelValue label="Realizado" value={dataTab?.customersResult} />
          <IndicatorLabelValue label="GAP de clientes" value={dataTab?.customersGap} />
          <ProgressBarIndicator
            renderLabel={() => (
              <Typography variant="overlineMedium" color="gray300">
                % de atingimento
              </Typography>
            )}
            progressbarProps={{
              steps: 100,
              step: dataTab?.customersPercentage,
              fulfillment: dataTab?.customersFulfillment,
            }}
          />
        </Content>
      </>
    );
  };

  return (
    <IndicatorCard
      indicatorTitle={indicator.title}
      indicatorIconName="users"
      renderTabContent={(tab) => renderContent(tab)}
      onPressInfo={() => onPressInfo(indicator)}
    />
  );
};

export default CustomersIndicators;
