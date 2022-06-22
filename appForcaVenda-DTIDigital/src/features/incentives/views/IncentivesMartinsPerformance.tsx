import { useIsFocused } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  CalendarButton,
  CardTabs,
  Typography,
  ProgressBarIndicator,
  Divider,
  MonthSelect,
  FallbackWrapper,
} from 'shared/components';
import { usePromise } from 'shared/hooks';
import { IIncentiveMartinsIndicator, IIncentiveMartinsIndicatorWeek, TOption } from 'shared/types';
import { getCurrency, getMonthWeekTabs, mount12MonthsLess } from 'shared/utils';
import { useSelectedIncentive } from '../hooks/useSelectedIncentive';
import IncentiveManager from '../services/IncentiveManager';
import {
  DetailsContainer,
  CalendarButtonContainer,
  PerformanceItemContainer,
  PerformanceItemContent,
  PerformanceItemHeader,
  PerformanceItemText,
} from './IncentivesSC';
import { Container } from './IncentiveConsultSC';

const Manager = new IncentiveManager();

interface IncentivesMartinsPerformanceProps {}

const months = mount12MonthsLess();

const IncentivesMartinsPerformance: React.FC<IncentivesMartinsPerformanceProps> = () => {
  const isFocused = useIsFocused();

  const { selectedIncentive } = useSelectedIncentive();
  const [selectMonthOpen, setSelectMonthOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(months[0].value);
  const [selectedTab, setSelectedTab] = useState<'month' | 'week'>('month');

  const incentiveId = selectedIncentive?.id;

  const loadMartinsIndicators = useCallback(() => {
    if (isFocused && incentiveId) {
      return Manager.getMartinsPerformanceIndicators(incentiveId, selectedMonth);
    }
    return null;
  }, [isFocused, incentiveId, selectedMonth]);

  const { data: indicators, ...promiseStatus } = usePromise(loadMartinsIndicators);

  if (!isFocused) {
    return null;
  }

  const handleSelectMonth = (selected: TOption) => {
    setSelectMonthOpen(false);
    setTimeout(() => {
      setSelectedMonth(selected.value as string);
    }, 300);
  };

  const renderLabel = (indicatorInfo: IIncentiveMartinsIndicator) => (
    <PerformanceItemHeader>
      <PerformanceItemText>
        <Typography variant="overline" uppercase color="gray600">
          Objetivo:
        </Typography>
        <Typography variant="overline" bold color="gray600">
          {indicatorInfo.indicatorForecast}
        </Typography>
      </PerformanceItemText>
      <PerformanceItemText>
        <Typography variant="overline" uppercase color="gray600">
          Realizado:
        </Typography>
        <Typography variant="overline" bold color="gray600">
          {indicatorInfo.indicatorResult}
        </Typography>
      </PerformanceItemText>
      <PerformanceItemText>
        <Typography variant="overline" uppercase color="gray600">
          {selectedTab === 'month' ? 'Acumulado previsto' : 'Acumulado'}
        </Typography>
        <Typography variant="overline" bold color="gray600">
          {getCurrency(indicatorInfo.earnedValue)}
        </Typography>
      </PerformanceItemText>
    </PerformanceItemHeader>
  );

  const renderIndicator = (
    indicator: IIncentiveMartinsIndicator | IIncentiveMartinsIndicatorWeek,
    isMonth?: boolean,
    isWeek?: boolean
  ) => (
    <PerformanceItemContainer
      key={isMonth ? indicator.indicatorName : (indicator as IIncentiveMartinsIndicatorWeek).week}
    >
      <PerformanceItemContent>
        <View>
          <Typography
            variant={isMonth ? 'overlineMedium' : 'bodyMedium'}
            color={isMonth ? 'primary' : 'default'}
            align="center"
          >
            {isWeek ? (indicator as IIncentiveMartinsIndicatorWeek).week : indicator.indicatorName}
          </Typography>
        </View>
        {renderLabel(indicator)}
        <ProgressBarIndicator
          progressbarProps={{
            fulfillment: indicator.indicatorFulfillment,
            step: indicator.indicatorPercentage,
            steps: 100,
          }}
        />
      </PerformanceItemContent>
      <Divider color="blue100" />
    </PerformanceItemContainer>
  );

  const renderContent = () => {
    const isMonth = selectedTab === 'month';
    const isWeek = selectedTab === 'week';

    if (indicators) {
      if (isMonth) {
        return renderIndicator(indicators?.month, true);
      }
      if (isWeek) {
        return indicators.weeks.map((i) => renderIndicator(i, false, true));
      }
    }
    return null;
  };

  const selectedOption = months.find((m) => m.value === selectedMonth)!;

  return (
    <Container>
      <FallbackWrapper
        {...promiseStatus}
        loadingComponent="spinner"
        renderContent={() => (
          <ScrollView showsVerticalScrollIndicator={false}>
            <DetailsContainer>
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
                renderContent={renderContent}
              />
            </DetailsContainer>
          </ScrollView>
        )}
      />
      <MonthSelect
        modalVisible={selectMonthOpen}
        onCloseModal={() => setSelectMonthOpen(false)}
        selectedMonth={selectedOption}
        onSelectMonth={(selected) => handleSelectMonth(selected)}
      />
    </Container>
  );
};

export default IncentivesMartinsPerformance;
