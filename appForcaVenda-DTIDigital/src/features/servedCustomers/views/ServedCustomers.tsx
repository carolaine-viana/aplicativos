import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { IFocusSupplierCustomer } from 'shared/types';
import { SearchHeader, CustomStatusBar, CardPaper, FallbackWrapper } from '@shared/components';
import RoleWrapper from 'shared/components/RoleWrapper/RoleWrapper';
import { usePromise, useRedux } from 'shared/hooks';

import { isArrayEmpty } from 'shared/utils';
import { SuppliersContainer } from './ServedCustomersSC';
import ServedCustomersMonthFilter from './ServedCustomersMonthFilter';
import ServedCustomersCardList from './ServedCustomersCardList';
import ServedCustomersManager from '../services/ServedCustomersManager';
import { useSelectedWeek } from '../hooks/useSelectedWeek';
import ServedCustomersSelect from './ServedCustomersSelect';
import { IServedCustomersState } from '../redux/servedCustomersSlice';

const Manager = new ServedCustomersManager();

const ServedCustomers: React.FC = () => {
  const { selectedWeek } = useSelectedWeek();
  const { sliceState } = useRedux<IServedCustomersState>('servedCustomers');

  const weekParam = selectedWeek.pureDate;
  const supplierTypeParam = sliceState.supplierType;

  const loadCustomers = useCallback(() => {
    if (weekParam) {
      return Manager.getFocusSupplierWeek(weekParam, supplierTypeParam);
    }
    return null;
  }, [weekParam, supplierTypeParam]);

  const { data: customers, ...promiseStatus } = usePromise<IFocusSupplierCustomer[]>(loadCustomers);

  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <>
      <CustomStatusBar backgroundColor={theme.palette.blue50} barStyle="dark-content" />

      <SearchHeader
        onClickArrow={() => navigation.goBack()}
        headerProps={{
          title: 'Clientes Atendidos',
        }}
      />
      <SuppliersContainer>
        <RoleWrapper renderRCAContent={() => <ServedCustomersSelect />} />

        <ServedCustomersMonthFilter />

        <FallbackWrapper
          {...promiseStatus}
          showEmptyState={promiseStatus.done && isArrayEmpty(customers)}
          loadingComponent="spinner"
          renderContent={() => (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={customers}
              renderItem={({ item }) => <ServedCustomersCardList customer={item} />}
              keyExtractor={(item) => item.id}
            />
          )}
        />
      </SuppliersContainer>
      <CardPaper />
    </>
  );
};

export default ServedCustomers;
