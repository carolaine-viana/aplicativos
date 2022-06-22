import React, { useCallback } from 'react';
import { FallbackWrapper, WildFocusButton } from 'shared/components';
import IncentiveInfo from 'features/incentivesDetails/views/IncentiveInfo';
import { DetailsCard } from 'features/incentivesDetails';
import { IIncentiveMartins } from 'shared/types';
import { usePromise } from 'shared/hooks';
import { RoutesNames } from '@shared/types';
import { useNavigation } from '@react-navigation/native';
import { Title, Description } from './IncentivesSC';
import { Container, CardContainer, CardContentInfo } from './IncentiveConsultSC';
import IncentiveManager from '../services/IncentiveManager';
import { WildFocusWrapper } from '../../suppliers/views/WildFocusSC';

const Manager = new IncentiveManager();
interface IncentivesMartinsDetailsProps {
  route: {
    params: {
      incentive: IIncentiveMartins;
    };
  };
}

const IncentivesMartinsDetails: React.FC<IncentivesMartinsDetailsProps> = ({ route }) => {
  const { incentive } = route.params;
  const incentivesName = incentive.name;

  const navigation = useNavigation();

  const incentiveId = incentive?.id;

  const loadIncentiveMartinsDetails = useCallback(() => {
    if (incentiveId) {
      return Manager.getIncentivesMartinsDetails(incentiveId);
    }
    return null;
  }, [incentiveId]);

  const { data, ...promiseStatus } = usePromise(loadIncentiveMartinsDetails);

  return (
    <FallbackWrapper
      {...promiseStatus}
      loadingComponent="spinner"
      renderContent={() => (
        <Container>
          <CardContainer>
            <DetailsCard
              id={incentiveId}
              title={incentive.name}
              renderBody={() => (
                <>
                  <IncentiveInfo
                    id={incentive.id}
                    targetGroup={incentive.targetGroup}
                    status={incentive.status}
                  />
                </>
              )}
              renderFooter={() => (
                <CardContentInfo>
                  <Title color="primary" align="center" variant="bodyMedium" size={16}>
                    Descrição
                  </Title>
                  <Description variant="overline">{data?.ruleDescription}</Description>
                </CardContentInfo>
              )}
            />
          </CardContainer>
          {incentivesName !== 'POSITIVACAO DE CLIENTES' && (
            <WildFocusWrapper>
              <WildFocusButton
                text="Clientes atendidos"
                icon="check"
                onPress={() => {
                  navigation.navigate({
                    name: RoutesNames.SERVEDCUSTOMERS,
                    params: { routeName: 'customersServed' },
                  });
                }}
              />
            </WildFocusWrapper>
          )}
        </Container>
      )}
    />
  );
};

export default IncentivesMartinsDetails;
