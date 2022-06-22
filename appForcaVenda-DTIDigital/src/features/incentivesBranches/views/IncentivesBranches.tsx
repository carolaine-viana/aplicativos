import React, { useCallback } from 'react';
import { usePromise } from 'shared/hooks';
import { useSelectedIncentive } from 'features/incentives/hooks/useSelectedIncentive';
import { CardPaper, FallbackWrapper, Typography } from '@shared/components';
import { IIncentiveBranch, EventsNames } from 'shared/types';
import { Analytics } from '../../../shared/base/Analytics';
import { ListContainer, List, ListItem, ListItemWrapper } from './IncentivesBranchesSC';
import IncentivesBranchesManager from '../services/IncentivesBranchesManager';

const Manager = new IncentivesBranchesManager();

function IncentivesBranches(): JSX.Element {
  const { selectedIncentive } = useSelectedIncentive();
  const incentiveId = selectedIncentive?.id;

  const loadBranches = useCallback(() => {
    if (incentiveId) {
      return Manager.getBranches(incentiveId);
    }
  }, [incentiveId]);

  const { data, ...promiseStatus } = usePromise(loadBranches);

  const metrics = Analytics.getInstance();
  metrics.sendEvent(EventsNames.INCENTIVES_BRANCHES);

  const renderItem = (item: IIncentiveBranch) => (
    <ListItemWrapper>
      <CardPaper
        bg="light"
        alignItems="flex-start"
        renderBody={() => (
          <ListItem>
            <Typography variant="overlineMedium" color="gray600">
              {item.name}
            </Typography>
          </ListItem>
        )}
      />
    </ListItemWrapper>
  );

  return (
    <>
      <ListContainer>
        <FallbackWrapper
          {...promiseStatus}
          loadingComponent="spinner"
          useOfflineFeedback
          offlineProps={{ imageSize: 100 }}
          renderContent={() => (
            <List
              keyExtractor={(item) => (item as IIncentiveBranch).name}
              data={data}
              renderItem={({ item }) => renderItem(item as IIncentiveBranch)}
            />
          )}
        />
      </ListContainer>
    </>
  );
}

export default IncentivesBranches;
