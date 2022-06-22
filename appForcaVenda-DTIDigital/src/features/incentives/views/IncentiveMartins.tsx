import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableButton } from 'shared/components';
import { IIncentiveMartins, RoutesNames } from 'shared/types';
import { DetailsCard } from 'features/incentivesDetails';
import IncentiveInfo from 'features/incentivesDetails/views/IncentiveInfo';
import { CardContainer, ContainerButton } from './IncentiveConsultSC';
import { useSelectedIncentive } from '../hooks/useSelectedIncentive';

interface IncentiveMartinsProps {
  incentive: IIncentiveMartins;
}

const IncentiveMartins: React.FC<IncentiveMartinsProps> = ({ incentive }) => {
  const { setSelectedIncentive } = useSelectedIncentive();
  const navigation = useNavigation();

  return (
    <CardContainer>
      <DetailsCard
        id={incentive.id}
        title={incentive.name}
        renderBody={() => (
          <IncentiveInfo
            id={incentive.id}
            targetGroup={incentive.targetGroup}
            status={incentive.status}
          />
        )}
        renderFooter={() => (
          <ContainerButton>
            <TouchableButton
              color="primary"
              title="Visualizar"
              testID="view-details"
              onPress={() => {
                setSelectedIncentive(incentive);
                navigation.navigate(RoutesNames.INCENTIVESMARTINSTABS, {
                  screen: 'Detalhes',
                  params: { incentive },
                });
              }}
            />
          </ContainerButton>
        )}
      />
    </CardContainer>
  );
};

export default IncentiveMartins;
