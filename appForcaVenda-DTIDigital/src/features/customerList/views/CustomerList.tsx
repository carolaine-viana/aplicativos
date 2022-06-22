import React, { useState, useCallback, useRef } from 'react';
import { VirtualizedList } from 'react-native';
import { useIsFocused, useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { EPage, RoutesNames, TAlphabeticalSort, TPredefinedFilter } from 'shared/types';
import { usePromise } from 'shared/hooks';
import { isArrayEmpty } from '@shared/utils';
import { SearchHeader, FallbackWrapper, DefaultIcon, SearchBar } from 'shared/components';
import { ICustomerReadDto } from '@shared/models/Customer';

import theme from 'shared/constants/theme';
import { CardClient, CustomerListParams } from '@features/cardClient';
import { CustomStatusBar } from '../../../shared/components/CustomStatusBar/CustomStatusBar';

import { Container, ButtonToTop, ContainerSearchGlobal, SearchContainer } from './CustomerListSC';
import { VisitScheduleForm } from '../../visitSchedule';
import CustomerListManager from '../service/CustomerListManager';
import ListCards from './ListCards';
import { disbaleAddVisit } from '../customerListUtils';
import {
  CustomersFilters,
  updateFiltersList,
  useCustomersFilters,
  useCustomerSort,
} from '../../CustomerFilters';
import ContactModal from './ContactModal';

const customerListManager = new CustomerListManager();
const CARD_HEIGHT = 270;

const CustomerList: React.FC = () => {
  const route = useRoute<RouteProp<CustomerListParams, 'origin'>>();
  const navigation = useNavigation();
  const screenIsFocused = useIsFocused();
  const fromSAC = route?.params?.fromSAC;
  const isOccurrence = route?.params?.isOccurrence;

  const [search, setSearch] = useState('');

  const [selectedCustomer, setSelectedCustomer] = useState<ICustomerReadDto | null>();
  const [showForm, setShowForm] = useState(false);

  const [contactModalVisible, setContactModalVisible] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState<TPredefinedFilter[]>([]);
  const [sortMode, setsortMode] = useState<TAlphabeticalSort>('az');

  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const CONTENT_LIMIT = 300;

  const flatListRef = useRef<VirtualizedList>();

  const loadData = useCallback(() => {
    if (!showForm && screenIsFocused) {
      const getCustomersPromise = customerListManager.getCustomers();
      const getCustomersPendingVisitsPromise = customerListManager.getCustomersPendingVisit();
      return Promise.all([getCustomersPromise, getCustomersPendingVisitsPromise]);
    }
    return null;
  }, [screenIsFocused, showForm]);

  const { data, ...promiseStatus } = usePromise(loadData);

  const customers = data?.[0];
  const customersPendingVisits = data?.[1];

  const handleClickFilters = (filter: TPredefinedFilter) => {
    setSelectedFilters(updateFiltersList(selectedFilters, filter));
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handlReportOccurrence = useCallback((customer: ICustomerReadDto) => {
    navigation.navigate(RoutesNames.SACWEBVIEW, {
      id: customer?.id,
      cnpj: customer?.cnpj,
      tradeName: customer.tradeName,
      clientName: customer.companyName,
      page: EPage.OCCURRENCE,
    });
  }, []);

  const handleOpenForm = (customer: ICustomerReadDto) => {
    if (customer) {
      setSelectedCustomer(customer);
      setShowForm(true);
    }
  };

  const handleOpenContactModal = (customer: ICustomerReadDto) => {
    setSelectedCustomer(customer);
    setContactModalVisible(true);
  };

  const handleCloseContactModal = () => {
    setContactModalVisible(false);
  };

  const renderItem = useCallback(
    (customer) => (
      <CardClient
        disabled={!fromSAC && disbaleAddVisit(customersPendingVisits, customer.id)}
        customer={customer}
        openForm={() => handleOpenForm(customer)}
        handlReportOccurrence={fromSAC ? handlReportOccurrence : undefined}
        onCall={handleOpenContactModal}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [customersPendingVisits, fromSAC]
  );

  function handleScrollToTop() {
    flatListRef?.current?.scrollToOffset({ offset: 0 });
  }

  const { filteredDataSource, loadingFilter } = useCustomersFilters(
    customers,
    selectedFilters,
    search
  );
  const { sortedData, loadingSort } = useCustomerSort(filteredDataSource, sortMode);

  return (
    <>
      <CustomStatusBar backgroundColor={theme.palette.blue50} barStyle="dark-content" />
      <>
        <SearchHeader
          headerProps={{
            title: 'Lista de Clientes',
          }}
        />
        <Container>
          <ContainerSearchGlobal>
            <SearchContainer>
              <SearchBar
                fixed
                searchPlaceholder=""
                onChangeText={(text: string) => {
                  setSearch(text);
                }}
                value={search}
              />
            </SearchContainer>
          </ContainerSearchGlobal>

          <CustomersFilters
            onSelectFilter={handleClickFilters}
            selectedFilters={selectedFilters}
            sortMode={sortMode}
            onSelectSortMode={(mode) => setsortMode(mode.value)}
          />

          <FallbackWrapper
            {...promiseStatus}
            loading={promiseStatus.loading || loadingFilter || loadingSort}
            loadingComponent="spinner"
            showEmptyState={
              !promiseStatus.loading && !loadingFilter && !loadingSort && isArrayEmpty(sortedData)
            }
            renderContent={() => (
              <ListCards
                flatListRef={flatListRef}
                height={CARD_HEIGHT}
                renderItem={renderItem}
                filteredDataSource={sortedData}
                onScroll={(event) => {
                  setContentVerticalOffset(event.nativeEvent.contentOffset.y);
                }}
              />
            )}
          />
        </Container>
      </>
      <VisitScheduleForm
        selectedCustomer={selectedCustomer}
        showForm={showForm}
        closeForm={handleCloseForm}
      />
      {contentVerticalOffset > CONTENT_LIMIT && (
        <ButtonToTop onPress={handleScrollToTop}>
          <DefaultIcon name="arrow-up" size={24} color="light" />
        </ButtonToTop>
      )}
      <ContactModal
        modalVisible={contactModalVisible}
        onCloseModal={handleCloseContactModal}
        selectedCustomer={selectedCustomer}
      />
    </>
  );
};

export default CustomerList;
