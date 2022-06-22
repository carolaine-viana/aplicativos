import React, { useState, useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { usePromise } from 'shared/hooks';

import { IEarningsStatement, IEarningsSummary, TOption } from 'shared/types';
import { ScrollView } from 'react-native';
import {
  DefaultScreen,
  SearchHeader,
  FallbackWrapper,
  CalendarButton,
  MonthSelect,
  CardPaper,
  DefaultIcon,
} from 'shared/components';
import { getYearMonth, isArrayEmpty } from '@shared/utils';
import {
  ButtonIconContent,
  Container,
  CurrentMonthText,
  ButtonToTop,
  StatementScrollView,
} from './StatementSC';

import StatementList from './StatementList';
import StatementManager from '../services/StatementManager';
import StatementDetailsContent from './StatementDetailsContent';

interface StatementProps {}

const { monthYearDescription, monthYearNumber } = getYearMonth();

const Manager = new StatementManager();

const Statement: React.FC<StatementProps> = () => {
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const CONTENT_LIMIT = 300;

  const navigation = useNavigation();

  const scrollRef = useRef<ScrollView>();

  function handleScrollToTop() {
    scrollRef?.current?.scrollTo({ x: 0, y: 0, animated: true });
  }

  const [monthSelected, setMonthSelected] = useState<TOption>({
    label: monthYearDescription,
    value: monthYearNumber,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');

  const loadStatement = useCallback(() => {
    if (monthSelected.value) {
      return Manager.getStatementData(monthSelected.value.toString());
    }
  }, [monthSelected.value]);

  const { data, ...promiseStatus } =
    usePromise<{
      summaryEarnings: IEarningsSummary | null;
      statementEarnings: Array<IEarningsStatement>;
    }>(loadStatement);

  function handleOpenModal() {
    setModalVisible(true);
  }
  function handleCloseModal() {
    setModalVisible(false);
  }

  function handleSelectMonth(option: TOption) {
    setMonthSelected({
      label: option.label,
      value: option.value,
    });
    setModalVisible(false);
  }

  const handleCloseSearch = () => {
    setTimeout(() => {
      setSearch('');
    }, 200);
  };

  const statementEarnings = data?.statementEarnings;

  const shouldShowEmptyComponent =
    promiseStatus.success && (!data?.summaryEarnings || isArrayEmpty(statementEarnings));

  const isCurrentMonthSelected = monthSelected.value === monthYearNumber;

  const renderCurrentMonth = () => {
    if (isCurrentMonthSelected) {
      return (
        <CurrentMonthText uppercase align="center" color="primary" variant="bodyMedium">
          Mês atual
        </CurrentMonthText>
      );
    }
    return null;
  };

  return (
    <>
      <DefaultScreen statusBarColor="blue50">
        <SearchHeader
          headerProps={{
            title: 'Extratos',
          }}
          onClickArrow={() => navigation.goBack()}
          searchProps={{
            onChangeText: (text: string) => {
              setSearch(text);
            },
            onClose: handleCloseSearch,
            value: search,
            searchPlaceholder: 'Buscar Extrato',
          }}
        />
        <ButtonIconContent>
          <CalendarButton
            onPress={handleOpenModal}
            monthYear={monthSelected.label}
            iconColor="light"
            title={isCurrentMonthSelected ? 'Escolha um mês' : undefined}
          />
        </ButtonIconContent>
        <Container>
          <StatementScrollView
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            onScroll={(event) => {
              setContentVerticalOffset(event.nativeEvent.contentOffset.y);
            }}
          >
            {renderCurrentMonth()}
            <FallbackWrapper
              {...promiseStatus}
              renderContent={() => (
                <>
                  <CardPaper
                    renderBody={() => (
                      <StatementDetailsContent summaryEarnings={data?.summaryEarnings} />
                    )}
                  />
                  <StatementList search={search} statementEarnings={statementEarnings} />
                </>
              )}
              loadingComponent="spinner"
              showEmptyState={shouldShowEmptyComponent}
              emptyStateProps={{ message: 'Não encontramos extrato para exibir!' }}
            />
          </StatementScrollView>
        </Container>
      </DefaultScreen>
      {contentVerticalOffset > CONTENT_LIMIT && (
        <ButtonToTop onPress={handleScrollToTop}>
          <DefaultIcon name="arrow-up" size={24} color="light" />
        </ButtonToTop>
      )}
      <MonthSelect
        modalVisible={modalVisible}
        closeModalVisible={handleCloseModal}
        onCloseModal={handleCloseModal}
        onSelectMonth={handleSelectMonth}
        selectedMonth={monthSelected}
      />
    </>
  );
};

export default Statement;
