import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { isArrayEmpty } from '@shared/utils';
import { usePromise } from '@shared/hooks';
import { FallbackWrapper } from 'shared/components';
import { EventsNames } from 'shared/types';
import { useSelectedIncentive } from 'features/incentives/hooks/useSelectedIncentive';
import { useKeyBoardOpen } from '@shared/hooks/useKeyBoardOpen';
import { Analytics } from '../../../shared/base/Analytics';
import IncentivesCustomersBusiness from './IncentivesCustomersBusiness';
import IncentivesCustomersItem from './IncentivesCustomersItem';
import { Container, Title, ContainerTitle } from './IncentivesCustomersSC';
import IncentivesCustomersManager from '../services/IncentivesCustomersManager';
import IncentivesCustomersHeader from './IncentivesCustomersHeader';

const Manager = new IncentivesCustomersManager();

const IncentivesCustomers: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const isFocused = useIsFocused();
  const { isKeyBoardOpen } = useKeyBoardOpen();
  const { selectedIncentive } = useSelectedIncentive();

  const incentiveId = selectedIncentive?.id;
  const loadIncentiveCustomers = useCallback(() => {
    if (incentiveId && isFocused && !isSearching) {
      return Manager.getIncentivesCustomers(incentiveId);
    }
  }, [incentiveId, isFocused, isSearching]);

  const loadSelectedCustomer = useCallback(() => {
    if (search && isSearching) {
      return Manager.getIncentivesCustomersBusiness(incentiveId, search);
    }
  }, [search, isSearching, incentiveId]);

  const { data: incentivesCustomers, ...promiseStatus } = usePromise(loadIncentiveCustomers);
  const { data: customer, ...promiseCustomerStatus } = usePromise(loadSelectedCustomer);

  const metrics = Analytics.getInstance();
  metrics.sendEvent(EventsNames.INCENTIVES_CUSTOMERS);

  useEffect(() => {
    if ((isSearching && promiseCustomerStatus.done) || !search) {
      setIsSearching(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promiseCustomerStatus.done, search]);

  const hasCustomers = incentivesCustomers?.hasCustomers;
  if (!hasCustomers && isArrayEmpty(incentivesCustomers?.businessIncentiveCustomersStructure)) {
    return (
      <ContainerTitle>
        <Title size={14} color="gray600" align="center" variant="bodyMedium">
          TODOS OS CLIENTES
          {'\n'}
          SÃO PARTICIPANTES
        </Title>
      </ContainerTitle>
    );
  }

  const renderItem = (item) => {
    if (isSearching) {
      return <IncentivesCustomersBusiness customerBusiness={item} />;
    }
    return <IncentivesCustomersItem customer={item} />;
  };

  const isLoading = isSearching ? promiseCustomerStatus.loading : promiseStatus.loading;
  const hasSucceded = isSearching ? promiseCustomerStatus.success : promiseStatus.success;

  const flatListData = isSearching
    ? customer
    : incentivesCustomers?.businessIncentiveCustomersStructure;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <>
        <IncentivesCustomersHeader
          hasCustomers={hasCustomers}
          isKeyBoardOpen={isKeyBoardOpen}
          setIsSearching={setIsSearching}
          search={search}
          setSearch={setSearch}
        />
        <Container>
          <FallbackWrapper
            loading={isLoading}
            success={hasSucceded}
            loadingComponent="spinner"
            useOfflineFeedback
            offlineProps={{ imageSize: 100 }}
            renderContent={() => (
              <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) =>
                  isSearching ? `customer-${item?.id}-${index}` : `${index.toString()}`
                }
                data={flatListData}
                renderItem={({ item }) => renderItem(item)}
              />
            )}
          />
        </Container>
      </>
    </TouchableWithoutFeedback>
  );
};

export default IncentivesCustomers;
