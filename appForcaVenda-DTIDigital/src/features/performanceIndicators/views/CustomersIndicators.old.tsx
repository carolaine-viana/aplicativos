import React, { useState } from 'react';

import { CardTabs, Typography, FlexRow } from '@shared/components';
import { ICustomersIndicatorsReadDto } from 'shared/models';

import { RowContent, Content } from './PerformanceSC';
import { getTabsAllPeriod } from '../performanceUtils';

interface ICustomersIndicatorsProps {
  data: {
    month: {};
    week: {};
  };
}

const CustomersIndicators: React.FC<ICustomersIndicatorsProps> = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState<'week' | 'month'>('week');

  const handleChangeTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const tabs = getTabsAllPeriod();

  const renderContent = () => {
    if (data) {
      const dataTab = data[selectedTab] as ICustomersIndicatorsReadDto;
      return (
        <Content>
          <RowContent>
            <Typography variant="body" color="secondary">
              Atendidos
            </Typography>
            <FlexRow>
              <Typography variant="lead" color="primary" bold>
                {`${dataTab.customersResult}/`}
              </Typography>
              <Typography variant="lead" color="secondary" bold>
                {dataTab.customersForecast}
              </Typography>
            </FlexRow>
          </RowContent>
        </Content>
      );
    }
  };

  return (
    <>
      <CardTabs
        tabs={Object.values(tabs)}
        selectedTab={selectedTab}
        onChangeTab={handleChangeTab}
        renderContent={renderContent}
      />
    </>
  );
};

export default CustomersIndicators;
