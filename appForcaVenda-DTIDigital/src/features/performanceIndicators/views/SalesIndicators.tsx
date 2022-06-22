import React from 'react';

import { getCurrency } from '@shared/utils';
import { Divider, ProgressBarIndicator, Typography } from '@shared/components';
import { ITimeCourse } from 'shared/types';

import { Content, OwnBrandContainer, OwnBrandContent } from './PerformanceSC';
import IndicatorLabelValue from './IndicatorLabelValue';
import IndicatorCard from './IndicatorCard';

interface ISalesIndicatorsProps {
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
  title: 'Vendas',
  description: `Objetivo: Desafio de vendas em R$ para o período.
  Realizado: Valor vendido em R$ no período. Após o fechamento, considera apenas as vendas faturadas.
  GAP: Quanto falta em R$, para atingir o objetivo do período.
  % de atingimento: Percentual de cumprimento do realizado em relação ao objetivo.
  Marcas próprias: Percentual da venda em R$ dos produtos marcas próprias em relação ao total de vendas.`,
};

// TODO: ALTERAR PROPS QUANDO INTEGRADO
const SalesIndicators: React.FC<ISalesIndicatorsProps> = ({ data, onPressInfo }) => {
  const renderContent = (selectedTab: ITimeCourse['monthWeek']) => {
    const dataTab = data?.[selectedTab];
    return (
      <Content>
        <IndicatorLabelValue label="Objetivo" value={getCurrency(dataTab?.salesForecast)} />
        <IndicatorLabelValue label="Realizado" value={getCurrency(dataTab?.salesResult)} />
        <IndicatorLabelValue label="GAP de vendas" value={getCurrency(dataTab?.salesGap)} />
        <ProgressBarIndicator
          renderLabel={() => (
            <Typography variant="overlineMedium" color="gray300">
              % de atingimento
            </Typography>
          )}
          progressbarProps={{
            steps: 100,
            step: dataTab?.salesPercentage,
            fulfillment: dataTab?.salesFulfillment,
          }}
        />
        <Divider width="90%" color="blue200" />
        <OwnBrandContainer>
          <Typography variant="overlineMedium" color="gray600">
            Marcas próprias
          </Typography>
          <OwnBrandContent>
            <IndicatorLabelValue
              label="Objetivo"
              valueVariant="overline"
              value={`${dataTab?.privateBrandsSalesPercentageForecast}%`}
            />
            <IndicatorLabelValue
              label="Realizado"
              valueVariant="overline"
              value={`${dataTab?.privateBrandsSalesPercentage}%`}
            />
          </OwnBrandContent>
        </OwnBrandContainer>
      </Content>
    );
  };
  return (
    <IndicatorCard
      indicatorTitle="Vendas"
      indicatorIconName="shopping-bag"
      renderTabContent={(tab) => renderContent(tab)}
      onPressInfo={() => onPressInfo(indicator)}
    />
  );
};

export default SalesIndicators;
