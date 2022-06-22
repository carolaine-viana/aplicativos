import React, { useState, useCallback, useRef } from 'react';
import { Alert, ScrollView } from 'react-native';
import { isArrayEmpty } from '@shared/utils';
import { useIsFocused } from '@react-navigation/native';
import { ICustomerReadDto } from '@shared/models/Customer';
import { IVisitCustomer, EventsNames, TPredefinedFilter, TAlphabeticalSort } from '@shared/types';
import {
  TouchableButton,
  ModalPopUp,
  SearchHeader,
  Deleted,
  Success,
  ButtonToTop,
  DefaultIcon,
  SearchBar,
  FallbackWrapper,
  DefaultScreen,
} from '@shared/components';
import {
  CustomersFilters,
  updateFiltersList,
  useCustomerSort,
  useCustomersFilters,
  TScheduleSortMode,
} from 'features/CustomerFilters';
import { usePromise } from 'shared/hooks';
import ContactModal from 'features/customerList/views/ContactModal';
import {
  Container,
  ContainerCards,
  ModalContainer,
  Title,
  ContainerSearchGlobal,
  SearchContainer,
  RoadMapList,
} from './RoadMapSC';
import { RoadMapManager } from '../services/RoadMapManager';
import { CardClient } from '../../cardClient';
import { Analytics } from '../../../shared/base/Analytics';
import { VisitScheduleForm } from '../../visitSchedule';

const customerVisitsListManager = new RoadMapManager();
const RoadMap: React.FC = () => {
  const [deleted, setDeleted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [contactModalVisible, setContactModalVisible] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState<TPredefinedFilter[]>([]);
  const [sortMode, setsortMode] = useState<TAlphabeticalSort | TScheduleSortMode>('recentes');

  const [search, setSearch] = useState('');

  const [selectedCustomer, setSelectedCustomer] = useState<ICustomerReadDto | null>();

  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const CONTENT_LIMIT = 300;

  const screenIsFocused = useIsFocused();

  const listRef = useRef<ScrollView>(null);

  const loadData = useCallback(async () => {
    if ((screenIsFocused && !showModal) || (screenIsFocused && !showModalEdit)) {
      return customerVisitsListManager.getRoadMap();
    }
    return null;
  }, [screenIsFocused, showModal, showModalEdit]);

  const { data, ...promiseStatus } = usePromise(loadData);

  const handleOpenModal = (customer: ICustomerReadDto) => {
    if (customer && !showModal) {
      setSelectedCustomer(customer);
      setShowModal(true);
    }
  };

  const handleCloseModal = async () => {
    if (showModal) {
      setDeleted(false);
      setCompleted(false);
      setShowModal(false);
    }
    await customerVisitsListManager.getRoadMap();
  };

  const handleCloseModalEdit = async () => {
    if (showModalEdit) {
      setShowModalEdit(false);
    }
    await customerVisitsListManager.getRoadMap();
  };

  const handleOpenModalEdit = (customer: ICustomerReadDto) => {
    if (customer && !showModal) {
      setSelectedCustomer(customer);
      setShowModalEdit(true);
    }
  };

  const handleDelete = async () => {
    try {
      if (selectedCustomer) {
        await customerVisitsListManager.excludeVisit(selectedCustomer.id!.toString());
        setDeleted(true);
      }
    } catch (err) {
      Alert.alert('Ocorreu um erro ao excluir visita');
    }
  };

  const handleCompleted = async (visitCustomer: IVisitCustomer) => {
    const metrics = Analytics.getInstance();
    try {
      setShowModal(true);
      await customerVisitsListManager.visitComplete(visitCustomer?.id);
      setCompleted(true);
      metrics.sendEvent(EventsNames.VISIT_COMPLETETED);
    } catch (err) {
      Alert.alert('Ocorreu um erro ao excluir visita');
    }
  };

  const sortBySchedule = !!(sortMode === 'recentes' || sortMode === 'futuros');

  const { filteredDataSource, loadingFilter } = useCustomersFilters(data, selectedFilters, search);
  const { sortedData, loadingSort } = useCustomerSort(
    filteredDataSource,
    sortMode,
    !!sortBySchedule
  );

  const handleClickFilters = (filter: TPredefinedFilter) => {
    setSelectedFilters(updateFiltersList(selectedFilters, filter));
  };

  function handleScrollToTop() {
    listRef?.current?.scrollTo({ x: 0, y: 0, animated: true });
  }

  const handleOpenContactModal = (customer: ICustomerReadDto) => {
    setSelectedCustomer(customer);
    setContactModalVisible(true);
  };

  const handleCloseContactModal = () => {
    setContactModalVisible(false);
  };

  const renderModalContent = () => {
    if (showModal && deleted) {
      return <Deleted message="Excluído!" />;
    }
    if (completed) {
      return <Success message="Concluído!" />;
    }
    return (
      <>
        <ModalContainer>
          <Title>Tem certeza que deseja excluir?</Title>
          <TouchableButton
            title="Sim, excluir"
            color="delete"
            width="214px"
            onPress={handleDelete}
          />
        </ModalContainer>
      </>
    );
  };

  const renderFallbackContent = () => (
    <RoadMapList
      showsVerticalScrollIndicator={false}
      ref={listRef}
      onScroll={(event) => {
        setContentVerticalOffset(event.nativeEvent.contentOffset.y);
      }}
    >
      <ContainerCards>
        {sortedData?.map((item) => (
          <CardClient
            key={item.id}
            customer={item}
            openForm={handleOpenModalEdit}
            openFormAdditional={() => handleOpenModal(item)}
            onComplete={() => handleCompleted(item)}
            onCall={() => handleOpenContactModal(item)}
          />
        ))}
      </ContainerCards>
    </RoadMapList>
  );

  return (
    <>
      <DefaultScreen statusBarColor="blue50" barStyle="dark-content">
        <SearchHeader
          headerProps={{
            title: 'Roteiro',
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
            screen="roadmap"
          />
          <FallbackWrapper
            {...promiseStatus}
            loading={promiseStatus.loading || loadingFilter || loadingSort}
            loadingComponent="spinner"
            showEmptyState={
              !promiseStatus.loading && !loadingFilter && !loadingSort && isArrayEmpty(sortedData)
            }
            emptyStateProps={{
              message: 'Nenhum roteiro criado.\nAdicione clientes para criar o roteiro.',
            }}
            renderContent={renderFallbackContent}
          />
        </Container>
      </DefaultScreen>
      <ModalPopUp visible={showModal} onCloseModal={handleCloseModal}>
        {renderModalContent()}
      </ModalPopUp>
      <ContactModal
        modalVisible={contactModalVisible}
        onCloseModal={handleCloseContactModal}
        selectedCustomer={selectedCustomer}
      />
      <VisitScheduleForm
        selectedCustomer={selectedCustomer}
        showForm={showModalEdit}
        closeForm={handleCloseModalEdit}
        isUpdate
      />
      {contentVerticalOffset > CONTENT_LIMIT && (
        <ButtonToTop onPress={handleScrollToTop}>
          <DefaultIcon name="arrow-up" size={24} color="light" />
        </ButtonToTop>
      )}
    </>
  );
};

export default RoadMap;
