import React, { useCallback, useState, useEffect } from 'react';

import {
  CalendarButton,
  CardTabs,
  FallbackWrapper,
  MonthSelect,
  Typography,
  Divider,
} from '@shared/components';
import { ISuppliersIndicators, ISuppliersIndicatorsWeek, TOption } from '@shared/types';
import { getCurrency, getMonthWeekTabs, isArrayEmpty, mount12MonthsLess } from '@shared/utils';
import { usePromise } from '@shared/hooks/usePromise';

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
import IncentiveManager from '../services/IncentiveManager';

const Manager = new IncentiveManager();

const months = mount12MonthsLess();

const IncentivesMartinsPerformanceWildCard: React.FC = () => {
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

  const renderSupplierCustomersResultMonth = () => {
    if (
      suppliersIndicators &&
      !isArrayEmpty(suppliersIndicators.month?.wildcardSuppliersCustomersResult)
    ) {
      return suppliersIndicators.month?.wildcardSuppliersCustomersResult?.map((result, idx) => (
        <RowData key={`sup-customer-result${idx}`}>
          <Label variant="overlineM" color="gray600">
            {`Clientes Atendidos C/${result.wildcardSuppliersQuantity ?? '-'} CORINGA`}
          </Label>
          <Value variant="leadMedium" bold color="primary" fallbackText="-">
            {result.customersQuantity}
          </Value>
        </RowData>
      ));
    }
    return null;
  };

  const renderSupplierCustomersResultWeek = (index: number) => {
    const suppliersCustomersResult =
      suppliersIndicators?.weeks[index]?.wildcardSuppliersCustomersResult;
    if (suppliersCustomersResult) {
      return suppliersCustomersResult?.map((result, idx) => (
        <RowData key={`sup-customer-result${idx}`}>
          <Label variant="overlineM" color="gray600">
            {`Clientes Atendidos C/${result.wildcardSuppliersQuantity ?? '-'} CORINGA`}
          </Label>
          <Value variant="leadMedium" bold color="primary" fallbackText="-">
            {result.customersQuantity}
          </Value>
        </RowData>
      ));
    }
    return null;
  };

  const renderFocusResultMonth = () => {
    if (
      suppliersIndicators &&
      !isArrayEmpty(suppliersIndicators.month?.focusSuppliersCustomersResult)
    ) {
      return suppliersIndicators.month?.focusSuppliersCustomersResult?.map((result, idx) => (
        <RowData key={`sup-customer-result${idx}`}>
          <Label variant="overlineM" color="gray600">
            {`Clientes Atendidos C/${result.focusSuppliersQuantity ?? '-'} FOCO`}
          </Label>
          <Value variant="leadMedium" bold color="primary" fallbackText="-">
            {result.customersQuantity}
          </Value>
        </RowData>
      ));
    }
    return null;
  };

  const renderFocusResultWeek = (index: number) => {
    const suppliersCustomersResult =
      suppliersIndicators?.weeks[index]?.focusSuppliersCustomersResult;
    if (suppliersCustomersResult) {
      return suppliersCustomersResult?.map((result, idx) => (
        <RowData key={`sup-customer-result${idx}`}>
          <Label variant="overlineM" color="gray600">
            {`Clientes Atendidos C/${result.focusSuppliersQuantity ?? '-'} FOCO`}
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
    isWeek?: boolean
  ) => (
    <Content
      testID={isWeek ? (indicators as ISuppliersIndicatorsWeek).week : `'${index}'`}
      key={isWeek ? (indicators as ISuppliersIndicatorsWeek).week : `'${index}'`}
    >
      {isWeek && (
        <WeekWrapper>
          <Typography variant="bodyMedium">
            {(indicators as ISuppliersIndicatorsWeek).week}
          </Typography>
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
      {isWeek ? renderFocusResultWeek(index) : renderFocusResultMonth()}
      <RowData>
        <Label variant="overlineM" color="gray600">
          Clientes CORINGA
        </Label>
        <Value variant="leadMedium" bold color="primary" fallbackText="-">
          {indicators?.wildcardSuppliersTotalCustomersResult}
        </Value>
      </RowData>
      {isWeek ? renderSupplierCustomersResultWeek(index) : renderSupplierCustomersResultMonth()}
      <RowDataAccumulated>
        <Label variant="overlineM" bold color="gray600">
          Acumulado previsto
        </Label>
        <Value variant="leadMedium" bold color="primary" fallbackText="-">
          {getCurrency(indicators.earnedValue)}
        </Value>
      </RowDataAccumulated>
      <Divider color="blue100" />
    </Content>
  );

  const renderContent = () => {
    const isMonth = selectedTab === 'month';
    const isWeek = selectedTab === 'week';

    if (suppliersIndicators) {
      if (isMonth) {
        return renderIndicator(suppliersIndicators?.month, 0);
      }
      if (isWeek) {
        return suppliersIndicators.weeks.map((week, index) => renderIndicator(week, index, true));
      }
    }
    return null;
  };

  return (
    <>
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
            tabs={Object.values(getMonthWeekTabs())}
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

export default IncentivesMartinsPerformanceWildCard;
