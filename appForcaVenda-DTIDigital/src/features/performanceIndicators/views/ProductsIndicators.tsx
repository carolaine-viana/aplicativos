import React from 'react';

import { ITimeCourse } from 'shared/types';
// import { ICustomersIndicatorsReadDto } from 'shared/models';
import { getCurrency } from 'shared/utils';

import IndicatorLabelValue from './IndicatorLabelValue';
import { Content } from './PerformanceSC';
import IndicatorCard from './IndicatorCard';

interface ProductsIndicatorsProps {
  data?: {
    month: {
      totalSKU: number;
      mediaSKU: number;
      grupoSimilar: number;
    };
    week: {
      totalSKU: number;
      mediaSKU: number;
      grupoSimilar: number;
    };
  };
}

// TODO: ALTERAR PROPS QUANDO INTEGRADO
const ProductsIndicators: React.FC<ProductsIndicatorsProps> = ({
  data = {
    month: {
      totalSKU: 0,
      mediaSKU: 0,
      grupoSimilar: 0,
    },
    week: {
      totalSKU: 0,
      mediaSKU: 0,
      grupoSimilar: 0,
    },
  },
}) => {
  const renderContent = (selectedTab: ITimeCourse['monthWeek']) => {
    if (data) {
      const dataTab = data[selectedTab];
      return (
        <Content>
          <IndicatorLabelValue label="Total de SKU" value={dataTab.totalSKU} />
          <IndicatorLabelValue label={'Media de SKU\npor produto'} value={dataTab.mediaSKU} />
          <IndicatorLabelValue
            label={'Grupo de\nprodutos similar'}
            value={getCurrency(dataTab.grupoSimilar)}
          />
        </Content>
      );
    }
  };

  return (
    <IndicatorCard
      indicatorTitle="Produtos"
      indicatorIconName="box"
      renderTabContent={(tab) => renderContent(tab)}
    />
  );
};

export default ProductsIndicators;
