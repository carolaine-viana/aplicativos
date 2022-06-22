import React, { useState } from 'react';

import { CardTabs, SectionTitle, CardColapse } from 'shared/components';
import { ITimeCourse } from 'shared/types';

import { getTabsAllPeriod } from '../performanceUtils';
import { IndicatorsWrapper } from './PerformanceSC';

interface IndicatorCardProps {
  renderTabContent: (selectedTab: ITimeCourse['monthWeek']) => React.ReactNode;
  indicatorTitle: string;
  indicatorIconName: string;
}

const IndicatorCard: React.FC<IndicatorCardProps> = ({
  indicatorTitle,
  indicatorIconName,
  renderTabContent,
  onPressInfo,
}) => {
  const [selectedTab, setSelectedTab] = useState<ITimeCourse['monthWeek']>('week');

  const handleChangeTab = (tab: ITimeCourse['monthWeek']) => {
    setSelectedTab(tab);
  };

  const tabs = getTabsAllPeriod();

  return (
    <IndicatorsWrapper>
      <CardColapse
        iconInfo
        loadOpened
        renderTitle={() => <SectionTitle title={indicatorTitle} icon={indicatorIconName} />}
        onPressInfo={onPressInfo}
      >
        <CardTabs
          tabs={Object.values(tabs)}
          selectedTab={selectedTab as string}
          onChangeTab={(selected) => handleChangeTab(selected as ITimeCourse['monthWeek'])}
          renderContent={() => renderTabContent(selectedTab)}
        />
      </CardColapse>
    </IndicatorsWrapper>
  );
};

export default IndicatorCard;
