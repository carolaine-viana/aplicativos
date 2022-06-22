import React, { useCallback } from 'react';
import { IIncentiveIndicator, EventsNames } from 'shared/types';
import { usePromise } from 'shared/hooks';
import { useSelectedIncentive } from 'features/incentives/hooks/useSelectedIncentive';
import { isArrayEmpty } from 'shared/utils';
import { FallbackWrapper } from 'shared/components';
import { Analytics } from '../../../shared/base/Analytics';
import { Container, Content } from './IncentiveIndicatorsSC';
import IncentiveIndicatorItem from './IncentiveIndicatorItem';
import IncentiveIndicatorsManager from '../services/IncentiveIndicatorsManager';

interface IncentiveIndicatorsProps {}

const Manager = new IncentiveIndicatorsManager();

const IncentiveIndicators: React.FC<IncentiveIndicatorsProps> = () => {
  const { selectedIncentive } = useSelectedIncentive();
  const incentiveId = selectedIncentive?.id;

  const loadIndicators = useCallback(() => {
    if (incentiveId) {
      return Manager.getIncentiveIndicators(incentiveId);
    }
  }, [incentiveId]);

  const { data: incentiveIndicators, ...promiseStatus } =
    usePromise<Array<IIncentiveIndicator>>(loadIndicators);

  const metrics = Analytics.getInstance();
  metrics.sendEvent(EventsNames.INCENTIVES_INDICATORS);

  const renderContent = () => (
    <Content>
      {incentiveIndicators?.map((indicator: IIncentiveIndicator, index: number) => (
        <React.Fragment key={index}>
          <IncentiveIndicatorItem measure={indicator?.measure} criterion={indicator?.criterion} />
        </React.Fragment>
      ))}
    </Content>
  );

  return (
    <Container>
      <FallbackWrapper
        {...promiseStatus}
        showEmptyState={isArrayEmpty(incentiveIndicators) && promiseStatus.success}
        loadingComponent="spinner"
        renderContent={renderContent}
        useOfflineFeedback
        offlineProps={{ imageSize: 100 }}
      />
    </Container>
  );
};

export default IncentiveIndicators;
