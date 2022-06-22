import React, { useCallback } from 'react';

import { useSelectedIncentive } from '@features/incentives/hooks/useSelectedIncentive';
import { usePromise } from '@shared/hooks';
import { FallbackWrapper } from 'shared/components';
import { IIncentiveChannel, EventsNames } from 'shared/types';
import { Analytics } from '../../../shared/base/Analytics';
import IncentiveChannelItem from './IncentiveChannelItem';
import { Content } from './IncentiveChannelSC';
import IncentivesChannelsManager from '../services/IncentivesChannelsManager';
import { List } from './IncentivesChannelsSC';

interface IncentivesChannelsProps {}

const Manager = new IncentivesChannelsManager();

const IncentivesChannels: React.FC<IncentivesChannelsProps> = () => {
  const { selectedIncentive } = useSelectedIncentive();
  const incentiveId = selectedIncentive?.id;

  const loadChannels = useCallback(() => {
    if (incentiveId) {
      return Manager.getChannels(incentiveId);
    }
  }, [incentiveId]);

  const { data, ...promiseStatus } = usePromise(loadChannels);

  const metrics = Analytics.getInstance();
  metrics.sendEvent(EventsNames.INCENTIVES_CHANNELS);

  return (
    <Content>
      <FallbackWrapper
        {...promiseStatus}
        loadingComponent="spinner"
        useOfflineFeedback
        offlineProps={{ imageSize: 100 }}
        renderContent={() => (
          <List
            keyExtractor={(item) => (item as IIncentiveChannel).name}
            data={data}
            renderItem={({ item }) => (
              <IncentiveChannelItem channel={(item as IIncentiveChannel).name} />
            )}
          />
        )}
      />
    </Content>
  );
};

export default IncentivesChannels;
