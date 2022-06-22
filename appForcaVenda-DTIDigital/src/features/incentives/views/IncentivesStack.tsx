import React, { useEffect } from 'react';
import { useNavigation, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RoutesNames } from 'shared/types';
import { SearchHeader, DefaultScreen } from '@shared/components';
import { useRoleInfo, useSearch } from 'shared/hooks';
import RoleWrapper from 'shared/components/RoleWrapper/RoleWrapper';

import { IncentiveDetailsTabs } from 'features/incentivesDetails';
import IncentivesMartinsTabs from './IncentivesMartinsTabs';
import Incentives from './Incentives';
import { getTitleIncentives } from '../incentivesUtils';

const Stack = createStackNavigator();

interface IncentivesProps {}

const MartinsTabs = () => <RoleWrapper renderRCAContent={() => <IncentivesMartinsTabs />} />;

const IncentivesStack: React.FC<IncentivesProps> = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { roleInfo } = useRoleInfo();
  const { searchState, setSearchText, setSearchInitialState } = useSearch();
  const routeName = getFocusedRouteNameFromRoute(route);

  const isIncentivesList = routeName === RoutesNames.INCENTIVES_LIST;

  useEffect(() => {
    if (isIncentivesList) {
      setSearchInitialState(true);
    } else {
      setSearchInitialState(false);
    }
  }, [isIncentivesList, setSearchInitialState]);

  const getSearchProps = () => {
    if (searchState.showSearch) {
      return {
        value: searchState.searchText,
        onChangeText: (text: string) => setSearchText(text),
        searchPlaceholder: searchState.searchPlaceholder,
        onClose: () =>
          setTimeout(() => {
            setSearchText('');
          }, 100),
      };
    }
  };

  function handleBackButton() {
    if (isIncentivesList) {
      navigation.goBack();
    } else {
      navigation.navigate(RoutesNames.INCENTIVES_LIST);
    }
  }

  return (
    <DefaultScreen statusBarColor="blue50">
      <SearchHeader
        onClickArrow={handleBackButton}
        headerProps={{
          title: getTitleIncentives(roleInfo?.isRCA, routeName),
        }}
        searchProps={getSearchProps()}
      />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={RoutesNames.INCENTIVES_LIST}
      >
        <Stack.Screen name={RoutesNames.INCENTIVES_LIST} component={Incentives} />

        <Stack.Screen name={RoutesNames.INCENTIVESMARTINSTABS} component={MartinsTabs} />
        <Stack.Screen name={RoutesNames.INCENTIVEDETAILSTABS} component={IncentiveDetailsTabs} />
      </Stack.Navigator>
    </DefaultScreen>
  );
};

export default IncentivesStack;
