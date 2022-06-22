import React, { useCallback, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import {
  CalendarButton,
  CardTabs,
  CustomStatusBar,
  FallbackWrapper,
  MonthSelect,
  SearchHeader,
  Typography,
  Divider,
} from '@shared/components';

import { ISuppliersIndicators, ISuppliersIndicatorsWeek, TOption } from '@shared/types';
import { getMonthWeekTabs, isArrayEmpty, mount12MonthsLess } from '@shared/utils';
import {
  Container,
  Content,
  FallbackContainer,
  WeekWrapper,
  RowData,
  RowDataAccumulated,
  Label,
  Value,
  CalendarButtonContainer,
} from './WildFocusSC';
import SuppliersManager from '../services/SuppliersManager';
import { usePromise } from '../../../shared/hooks/usePromise';

const Manager = new SuppliersManager();

const months = mount12MonthsLess();

const WildCardFocusDetails: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [firstLoad, setFirstLoad] = useState(true);
  const [selectMonthOpen, setSelectMonthOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(months[0].value);
  const [selectedTab, setSelectedTab] = useState<'month' | 'week'>('month');

  const loadData = useCallback(
    () => Manager.getSuppliersIndicators(selectedMonth),
    [selectedMonth]
  );

  const { data: suppliersIndicators, ...promiseStatus } = usePromise(loadData);

  useEffect(() => {
    setFirstLoad(false);
  }, []);

  const handleSelectMonth = (selected: TOption) => {
    setSelectMonthOpen(false);
    setTimeout(() => {
      setSelectedMonth(selected.value as string);
    }, 300);
  };

  const selectedOption = months.find((m) => m.value === selectedMonth)!;

  const renderSupplierCustomersResult = () => {
    if (
      suppliersIndicators &&
      !isArrayEmpty(suppliersIndicators?.weeks[0]?.wildcardSuppliersCustomersResult)
    ) {
      return suppliersIndicators?.weeks[0]?.wildcardSuppliersCustomersResult?.map((result, idx) => (
        <RowData key={`sup-customer-result${idx}`}>
          <Label variant="overlineM" color="gray600">
            {`CLIATD C/${result.wildcardSuppliersQuantity ?? '-'} coringa`}
          </Label>
          <Value variant="leadMedium" bold color="primary" fallbackText="-">
            {result.customersQuantity}
          </Value>
        </RowData>
      ));
    }
    return null;
  };

  const renderIndicator = (
    indicators: ISuppliersIndicators | ISuppliersIndicatorsWeek,
    index: number,
    isMonth?: boolean,
    isWeek?: boolean
  ) => (
    <>
      <Content key={index}>
        {isWeek && (
          <WeekWrapper>
            <Typography variant="bodyMedium">{indicators.week}</Typography>
          </WeekWrapper>
        )}
        <RowData>
          <Label variant="overlineM" color="gray600">
            Clientes FOCO
          </Label>
          <Value variant="leadMedium" bold color="primary" fallbackText="-">
            {indicators?.focusSuppliersTotalCustomersResult}
          </Value>
        </RowData>
        <RowData>
          <Label variant="overlineM" color="gray600">
            Clientes CORINGA
          </Label>
          <Value variant="leadMedium" bold color="primary" fallbackText="-">
            {indicators?.wildcardSuppliersTotalCustomersResult}
          </Value>
        </RowData>
        {renderSupplierCustomersResult()}
        <RowDataAccumulated>
          <Label variant="overlineM" bold color="gray600">
            Acumulado
          </Label>
          <Value variant="leadMedium" bold color="primary" fallbackText="-">
            {indicators.earnedValue}
          </Value>
        </RowDataAccumulated>
        <Divider color="blue100" />
      </Content>
    </>
  );

  const renderContent = () => {
    const isMonth = selectedTab === 'month';
    const isWeek = selectedTab === 'week';

    if (suppliersIndicators) {
      if (isMonth) {
        return renderIndicator(suppliersIndicators?.month, 0, true);
      }
      if (isWeek) {
        return suppliersIndicators.weeks.map((week, index) =>
          renderIndicator(week, index, false, true)
        );
      }
    }
    return null;
  };

  return (
    <>
      <CustomStatusBar backgroundColor={theme.palette.blue50} barStyle="dark-content" />
      <SearchHeader
        headerProps={{ title: 'Detalhamento Foco/Coringa' }}
        onClickArrow={() => navigation.goBack()}
      />
      <Container>
        <>
          <CalendarButtonContainer>
            <CalendarButton
              onPress={() => setSelectMonthOpen(true)}
              monthYear={selectedOption.label}
              iconColor="blue"
            />
          </CalendarButtonContainer>

          <CardTabs
            tabs={Object.values(getMonthWeekTabs()).reverse()}
            selectedTab={selectedTab}
            onChangeTab={(v) => setSelectedTab(v)}
            renderContent={() => (
              <FallbackContainer>
                <FallbackWrapper
                  {...promiseStatus}
                  renderContent={renderContent}
                  loadingComponent="spinner"
                  showEmptyState={promiseStatus.success && !suppliersIndicators}
                  useOfflineFeedback={!firstLoad}
                  offlineProps={{ imageSize: 160 }}
                />
              </FallbackContainer>
            )}
          />
        </>
        <MonthSelect
          modalVisible={selectMonthOpen}
          onCloseModal={() => setSelectMonthOpen(false)}
          selectedMonth={selectedOption}
          onSelectMonth={(selected) => handleSelectMonth(selected)}
        />
      </Container>
    </>
  );
};

export default WildCardFocusDetails;
