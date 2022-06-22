import React, { useState } from 'react';
import theme from 'shared/constants/theme';
import { CustomStatusBar, SearchHeader, Divider, CardTabs } from 'shared/components';
import { useRoute, useNavigation } from '@react-navigation/native';

import SuppliersFilters from './SuppliersFilters';
import CustomersServed from './CustomersServed';
import BattleMap from './BattleMap';
import { TCategory, TTimeCourse, getTimeCourseTabs, getTitle } from '../suppliersUtils';
import { SuppliersContainer } from './SuppliersSC';

interface SuppliersProps {
  routeName: 'battleMap' | 'customersServed';
}

const Suppliers: React.FC<SuppliersProps> = () => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState<TCategory>('coringa');
  const [timeCourse, setTimeCourse] = useState<TTimeCourse>('month');

  const navigation = useNavigation();
  const {
    params: { routeName },
  } = useRoute();

  const tabs = getTimeCourseTabs();
  const handleChangeTimeCourse = (tab: string) => {
    setTimeCourse(tab as 'week' | 'month');
  };

  const renderTimeCourseTabContent = () => {
    if (routeName === 'battleMap') {
      return <BattleMap category={category} timeCourse={timeCourse} searchText={searchText} />;
    }
    return <CustomersServed category={category} timeCourse={timeCourse} searchText={searchText} />;
  };

  return (
    <>
      <CustomStatusBar backgroundColor={theme.palette.blue50} barStyle="dark-content" />
      <SuppliersContainer bg="default">
        <SearchHeader
          onClickArrow={() => navigation.goBack()}
          headerProps={{
            title: getTitle(routeName),
          }}
          searchProps={{
            onClose: () => setSearchText(''),
            onChangeText: (text) => setSearchText(text),
            value: searchText,
          }}
        />

        <SuppliersFilters
          category={category}
          timeCourse={timeCourse}
          onChangeCategory={(value: TCategory) => setCategory(value)}
          onChangeTimeCourse={(value: TTimeCourse) => setTimeCourse(value)}
        />

        <Divider width="90%" />

        <CardTabs
          tabs={Object.values(tabs)}
          selectedTab={timeCourse}
          onChangeTab={handleChangeTimeCourse}
          renderContent={renderTimeCourseTabContent}
        />
      </SuppliersContainer>
    </>
  );
};

export default Suppliers;
