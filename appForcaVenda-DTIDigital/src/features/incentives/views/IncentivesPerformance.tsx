import React, { useCallback } from 'react';
import { Divider, FallbackWrapper } from '@shared/components';
import { IIncentivePerformanceIndicator, EventsNames } from 'shared/types';
import { usePromise } from 'shared/hooks';
import { useIsFocused } from '@react-navigation/native';
import { Analytics } from '../../../shared/base/Analytics';
import { Container, WrapperPicker, IncentivesList } from './IncentivesPerformanceSC';
import IncentiveManager from '../services/IncentiveManager';
import IncentiveIndicator from './IncentiveIndicator';
import { useSelectedIncentive } from '../hooks/useSelectedIncentive';

const Manager = new IncentiveManager();

const IncentivesPerformance = () => {
  const isFocused = useIsFocused();
  const { selectedIncentive } = useSelectedIncentive();
  const selectedIncentiveId = selectedIncentive?.id;
  const metrics = Analytics.getInstance();
  metrics.sendEvent(EventsNames.INCENTIVES_PERFORMANCE);

  const loadPerformanceIndicators = useCallback(() => {
    if (selectedIncentiveId && isFocused) {
      return Manager.getIncentivesPerformanceIndicators(selectedIncentiveId);
    }
  }, [selectedIncentiveId, isFocused]);

  const { data: indicators, ...indicatorsPromiseStatus } =
    usePromise<IIncentivePerformanceIndicator[] | undefined>(loadPerformanceIndicators);

  return (
    <Container>
      <WrapperPicker />
      <FallbackWrapper
        {...indicatorsPromiseStatus}
        loadingComponent="spinner"
        useOfflineFeedback
        renderContent={() => (
          <IncentivesList
            data={indicators}
            keyExtractor={(item) => `${item?.id}-${item?.indicatorName}`}
            ItemSeparatorComponent={() => <Divider color="blue100" />}
            renderItem={({ item }) => (
              <IncentiveIndicator indicator={item as IIncentivePerformanceIndicator} />
            )}
          />
        )}
      />
    </Container>
  );
};

export default IncentivesPerformance;
