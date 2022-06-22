/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { FallbackWrapper, ListChipSelect, Divider, CardPaper, Typography } from 'shared/components';
import { usePromise } from 'shared/hooks';
import { IMixCategory, IMixData, IMixProduct, IMixSupplier, EventsNames } from 'shared/types';
import { useSelectedIncentive } from 'features/incentives/hooks/useSelectedIncentive';
import { Analytics } from '../../../shared/base/Analytics';
import {
  ListContainer,
  Content,
  CardContainer,
  DividerContainer,
  FeedbackContainer,
} from './IncentiveMixSC';

import IncentiveMixManager from '../services/IncentiveMixManager';
import { getChips, extractData, isThereMix, TMix } from '../incetiveMixUtils';
import ChipContent from './ChipContent';

interface IncentiveMixProps {}

const Manager = new IncentiveMixManager();

const IncentiveMix: React.FC<IncentiveMixProps> = () => {
  const [selectedChip, setSelectedChip] = useState<TMix>('Fornecedores');
  const { selectedIncentive } = useSelectedIncentive();
  const incentiveId = selectedIncentive?.id;
  const loadProducts = useCallback(() => {
    if (incentiveId) {
      return Manager.getIncentiveMix(incentiveId);
    }
  }, [incentiveId]);

  const { data, ...promiseStatus } = usePromise<IMixData>(loadProducts);

  const listItensRender = extractData(selectedChip, data);
  const chipsRender = getChips(data, promiseStatus.done);

  const ListChipsRender = (
    <ListChipSelect
      onSelected={(value: string) => setSelectedChip(value)}
      activeColor="blue300"
      selectedCard={selectedChip}
      chips={chipsRender}
      marginBetweenRows={36}
    />
  );

  const metrics = Analytics.getInstance();
  metrics.sendEvent(EventsNames.INCENTIVES_MIX);

  const renderItem = (item: IMixSupplier | IMixCategory | IMixProduct | { id: string }) => {
    if (item.id === 'chips') {
      return ListChipsRender;
    }
    return (
      <CardContainer>
        <CardPaper
          alignItems="stretch"
          bg="light"
          renderBody={() => <ChipContent item={item} selectedChip={selectedChip} />}
        />
      </CardContainer>
    );
  };

  const renderContent = () => {
    if (!isThereMix(chipsRender)) {
      return (
        <FeedbackContainer>
          {ListChipsRender}
          <Typography variant="bodyMedium" color="gray600" align="center">
            {'ESSE INCENTIVO NÃO TEM\nDEFINIÇÕES DE MIX'}
          </Typography>
        </FeedbackContainer>
      );
    }

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 26 }}
        data={[{ id: 'chips' }, ...listItensRender] as Array<any>}
        keyExtractor={(_, index) => `${selectedChip}-${index}`}
        renderItem={({ item }) => renderItem(item)}
      />
    );
  };

  return (
    <ListContainer>
      <FallbackWrapper
        {...promiseStatus}
        loadingComponent="spinner"
        showEmptyState={promiseStatus.success && !listItensRender}
        renderContent={() => (
          <Content>
            <DividerContainer>
              <Divider color="blue100" />
            </DividerContainer>
            {renderContent()}
          </Content>
        )}
        useOfflineFeedback
        offlineProps={{ imageSize: 100 }}
      />
    </ListContainer>
  );
};
export default IncentiveMix;
