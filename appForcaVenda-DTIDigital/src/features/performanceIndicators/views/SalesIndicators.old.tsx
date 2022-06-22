import React, { useState } from 'react';
import { CardPaper, CardTabs, Typography } from 'shared/components';
import { getSalesForecastTabs } from '../performanceUtils';
import { TabTitle, TabContent, SalesValue } from './SalesForecastSC';

interface SalesForecastProps {}

type TDayMonth = 'dia' | 'mes';

const SalesForecast: React.FC<SalesForecastProps> = () => {
  const [selectedTab, setSelectedTab] = useState<TDayMonth>('dia');
  const tabs = getSalesForecastTabs();

  const renderContentTab = () => (
    <TabContent>
      <Typography variant="overline" color="gray300">
        {`Projeção de vendas do ${selectedTab === 'dia' ? 'dia' : 'mês'}`}
      </Typography>
      <SalesValue variant="lead" color="primary" bold align="center">
        1.000.000,00
      </SalesValue>
    </TabContent>
  );

  const renderPaperBody = () => (
    <CardTabs
      onChangeTab={(tab: string) => setSelectedTab(tab as TDayMonth)}
      selectedTab={selectedTab}
      tabs={tabs.map((tab) => {
        const isSelected = selectedTab === tab.id;
        return {
          ...tab,
          title: (
            <TabTitle
              variant={isSelected ? 'bodyMedium' : 'body'}
              color={isSelected ? 'white' : 'black'}
            >
              {tab.title}
            </TabTitle>
          ),
        };
      })}
      renderContent={renderContentTab}
    />
  );

  return <CardPaper renderBody={renderPaperBody} />;
};

export default SalesForecast;
