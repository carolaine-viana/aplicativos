import React from 'react';
import { IIncentive, RoutesNames } from 'shared/types';
import { useNavigation } from '@react-navigation/native';
import { DetailsCard } from 'features/incentivesDetails';
import { TouchableButton } from '@shared/components';
import IncentiveInfo from '../../incentivesDetails/views/IncentiveInfo';
import { CardContainer, ContainerButton } from './IncentiveConsultSC';
import { useSelectedIncentive } from '../hooks/useSelectedIncentive';

interface IncentiveConsultProps {
  incentive: IIncentive;
}

const IncentiveConsult: React.FC<IncentiveConsultProps> = ({ incentive }) => {
  const { setSelectedIncentive } = useSelectedIncentive();

  const navigation = useNavigation();

  const handleViewDetails = async () => {
    setSelectedIncentive(incentive);
    navigation.navigate(RoutesNames.INCENTIVEDETAILSTABS, {
      screen: 'Detalhes',
      params: { incentive },
    });
  };

  return (
    <CardContainer>
      <DetailsCard
        testID="consultCard"
        id={incentive.id}
        title={`${incentive.name}`}
        renderBody={() => <IncentiveInfo {...incentive} />}
        renderFooter={() => (
          <ContainerButton>
            <TouchableButton
              title="Visualizar"
              testID="view-details"
              onPress={() => handleViewDetails()}
            />
          </ContainerButton>
        )}
      />
    </CardContainer>
  );
};

export default IncentiveConsult;
