import React, { useCallback } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { DefaultScreen, FallbackWrapper, Typography } from 'shared/components';
import { useSelectedIncentive } from 'features/incentives/hooks/useSelectedIncentive';
import { usePromise } from 'shared/hooks';
import { getCurrency } from 'shared/utils';

import IncentiveInfo from './IncentiveInfo';
import {
  DetailsTabHeader,
  DetailsTabContainer,
  DetailsTabDescription,
  RowContent,
  SectionSpace,
  AwardCardContent,
  Wrapper,
} from './DetailsTabSC';
import DetailsCard from './DetailsCard';
import IncentiveDetailsManager from '../services/IncentiveDetailsManager';

interface DetailsTabProps {}

const Manager = new IncentiveDetailsManager();

const DetailsContentTab: React.FC<DetailsTabProps> = () => {
  const isFocused = useIsFocused();

  const { selectedIncentive } = useSelectedIncentive();
  const incentiveId = selectedIncentive?.id;

  const loadIncentiveDetails = useCallback(() => {
    if (incentiveId && isFocused) {
      return Manager.getIncentivesDetails(incentiveId);
    }
  }, [incentiveId, isFocused]);

  const { data: incentiveDetails, ...promiseStatus } = usePromise(loadIncentiveDetails);

  const renderFallbackContent = () => (
    <Wrapper>
      <DetailsCard
        id={selectedIncentive?.id}
        title={`Incentivo ${selectedIncentive?.name}`}
        renderBody={() => <IncentiveInfo {...selectedIncentive} />}
        renderFooter={() => (
          <>
            <DetailsTabHeader>
              <Typography variant="bodyMedium" color="primary" size={16}>
                Descrição
              </Typography>
            </DetailsTabHeader>
            <DetailsTabDescription>
              <Typography color="gray600" variant="overline" fallbackText="-">
                {incentiveDetails?.ruleDescription}
              </Typography>
              <SectionSpace />
              <RowContent>
                <Typography color="gray600" variant="overline">
                  {'CAMPANHA: '}
                </Typography>
                <Typography color="gray600" variant="overlineMedium" fallbackText="-">
                  {incentiveDetails?.campaignName}
                </Typography>
              </RowContent>
              <RowContent>
                <Typography color="gray600" variant="overline">
                  {'META DE CAMPANHA: '}
                </Typography>
                <Typography color="gray600" variant="overlineMedium" fallbackText="-">
                  {getCurrency(incentiveDetails?.campaignSalesForecast)}
                </Typography>
              </RowContent>
              <RowContent>
                <Typography color="gray600" variant="overline">
                  {'VENDAS DA CAMPANHA: '}
                </Typography>
                <Typography color="gray600" variant="overlineMedium" fallbackText="-">
                  {getCurrency(incentiveDetails?.campaignSalesResult)}
                </Typography>
              </RowContent>
              <RowContent>
                <Typography color="gray600" variant="overline">
                  {'META DO INCENTIVO: '}
                </Typography>
                <Typography color="gray600" variant="overlineMedium" fallbackText="-">
                  {getCurrency(incentiveDetails?.salesForecast)}
                </Typography>
              </RowContent>
              <RowContent>
                <Typography color="gray600" variant="overline">
                  {'VENDAS DO INCENTIVO: '}
                </Typography>
                <Typography color="gray600" variant="overlineMedium" fallbackText="-">
                  {getCurrency(incentiveDetails?.salesResult)}
                </Typography>
              </RowContent>
              <RowContent>
                <Typography color="gray600" variant="overline">
                  {'QUANTIDADE DE DIAS: '}
                </Typography>
                <Typography color="gray600" variant="overlineMedium" fallbackText="-">
                  {incentiveDetails?.totalNumberOfDays}
                </Typography>
              </RowContent>
              <RowContent>
                <Typography color="gray600" variant="overline">
                  {'QUANTIDADE DE TRANSCORRIDOS: '}
                </Typography>
                <Typography color="gray600" variant="overlineMedium" fallbackText="-">
                  {incentiveDetails?.elapsedNumberOfDays}
                </Typography>
              </RowContent>
            </DetailsTabDescription>
          </>
        )}
      />
      <SectionSpace />
      {incentiveDetails?.awards?.map(({ rule, prize }, idx) => (
        <AwardCardContent key={`${rule}-${prize}-${idx}`}>
          <RowContent>
            <Typography color="gray600" variant="overline" fallbackText="-">
              {`POSIÇÃO: ${rule}`}
            </Typography>
          </RowContent>
          <RowContent>
            <Typography color="gray600" variant="overline" fallbackText="-">
              {'PRÊMIO: '}
              <Typography color="gray600" variant="overline" bold fallbackText="-">
                {prize}
              </Typography>
            </Typography>
          </RowContent>
        </AwardCardContent>
      ))}
    </Wrapper>
  );

  const renderContent = () => (
    <FallbackWrapper
      {...promiseStatus}
      renderContent={renderFallbackContent}
      loadingComponent="spinner"
      showEmptyState={promiseStatus.done && isFocused && !incentiveDetails?.id}
      useOfflineFeedback
    />
  );

  return (
    <DefaultScreen>
      <DetailsTabContainer>{renderContent()}</DetailsTabContainer>
    </DefaultScreen>
  );
};

export default DetailsContentTab;
