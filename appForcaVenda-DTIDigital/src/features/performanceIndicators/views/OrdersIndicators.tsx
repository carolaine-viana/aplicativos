import React from 'react';

// import { ICustomersIndicatorsReadDto } from 'shared/models';
import { Typography, ProgressBarIndicator } from '@shared/components';
import { ITimeCourse } from 'shared/types';
import { getCurrency } from 'shared/utils';

import IndicatorLabelValue from './IndicatorLabelValue';
import IndicatorCard from './IndicatorCard';
import { Content } from './PerformanceSC';

interface OrdersIndicatorsProps {
  data?: {
    month: {
      objetivo: number;
      realizado: number;
      ticketMedio: number;
    };
    week: {
      objetivo: number;
      realizado: number;
      ticketMedio: number;
    };
  };
}

// TODO: ALTERAR PROPS QUANDO INTEGRADO
const OrdersIndicators: React.FC<OrdersIndicatorsProps> = ({
  data = {
    month: {
      objetivo: 0,
      realizado: 0,
      ticketMedio: 0,
    },
    week: {
      objetivo: 0,
      realizado: 0,
      ticketMedio: 0,
    },
  },
}) => {
  const renderContent = (selectedTab: ITimeCourse['monthWeek']) => {
    if (data) {
      const dataTab = data[selectedTab];
      return (
        <Content>
          <IndicatorLabelValue label="Objetivo" value={dataTab.objetivo} />
          <IndicatorLabelValue label="Realizado" value={dataTab.realizado} />
          <IndicatorLabelValue label="Ticket médio" value={getCurrency(dataTab.ticketMedio)} />
          <ProgressBarIndicator
            renderLabel={() => (
              <Typography variant="overlineMedium" color="gray300">
                % de atingimento
              </Typography>
            )}
            progressbarProps={{ steps: 100, step: 60 }}
          />
        </Content>
      );
    }
  };

  return (
    <IndicatorCard
      indicatorTitle="Pedidos"
      indicatorIconName="clipboard"
      renderTabContent={(tab) => renderContent(tab)}
    />
  );
};

export default OrdersIndicators;
