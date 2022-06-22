import React from 'react';
import { TouchableOpacity } from 'react-native';
import Typography from '@shared/components/Typography/Typography';
import { TNumberString } from '@shared/types';
import CardPaper from '../CardPaper/CardPaper';
import { Tab, TabsContainer, FilterContainer } from './CardTabsSC';

interface ITab {
  id: string;
  title: string | React.ReactElement;
}

interface CardTabsProps {
  onChangeTab: (tab: string) => void;
  selectedTab: TNumberString;
  tabs: ITab[];
  renderContent: () => React.ReactNode;
  isFilter?: boolean;
}

const CardTabs: React.FC<CardTabsProps> = (props) => {
  const { tabs, selectedTab, onChangeTab, renderContent, isFilter } = props;

  const renderHeader = () => (
    <FilterContainer>
      {isFilter && <Typography variant="body">Filtrar:</Typography>}
      <TabsContainer isFilter={isFilter}>
        {tabs.map((tab) => {
          const active = selectedTab === tab.id;

          return (
            <TouchableOpacity onPress={() => onChangeTab(tab.id)} key={tab.id} testID={tab.id}>
              <Tab active={selectedTab === tab.id} isFilter={isFilter}>
                {typeof tab.title === 'string' ? (
                  <Typography variant="body" bold={!isFilter} color={active ? 'light' : 'default'}>
                    {tab.title}
                  </Typography>
                ) : (
                  tab.title
                )}
              </Tab>
            </TouchableOpacity>
          );
        })}
      </TabsContainer>
    </FilterContainer>
  );

  return <CardPaper renderHeader={renderHeader} renderBody={renderContent} />;
};

export default CardTabs;
