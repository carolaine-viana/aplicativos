import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { ListChipSelect, Typography } from 'shared/components';
import { useSelectedIncentive } from 'features/incentives/hooks/useSelectedIncentive';
import IncentivesBranches from '@features/incentivesBranches/views/IncentivesBranches';
import IncentivesCustomers from '@features/incentivesCustomers/views/IncentivesCustomers';
import IncentivesIndicators from '@features/incentivesIndicators/views/IncentiveIndicators';
import IncentivesChannels from '@features/incentivesChannels/views/IncentivesChannels';
import IncentiveMix from 'features/incentivesMix/views/IncentiveMix';
import { EventsNames } from 'shared/types';
import { Analytics } from '../../../shared/base/Analytics';
import { Container, ContainerList, Content, TitleContainer } from './MoreDetailsSC';
import { KeyboardStatusContext } from '../../../shared/contexts/KeyboardStatusContext';

const cardSelects = {
  Filiais: <IncentivesBranches />,
  Clientes: <IncentivesCustomers />,
  Canais: <IncentivesChannels />,
  Indicadores: <IncentivesIndicators />,
  Mix: <IncentiveMix />,
};

interface MoreDetailsProps {}

const MoreDetails: React.FC<MoreDetailsProps> = () => {
  const [selected, setSelected] = useState('Filiais');
  const [isKeyBoardOpen, setIsKeyboardOpen] = useState(false);

  const metrics = Analytics.getInstance();
  metrics.sendEvent(EventsNames.INCENTIVES_MOREDETAILS);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const chipsRender = isKeyBoardOpen ? { Clientes: cardSelects.Clientes } : cardSelects;
  const componentRender = chipsRender[selected];
  const { selectedIncentive } = useSelectedIncentive();

  return (
    <Container>
      <TitleContainer>
        <Typography variant="bodyMedium" color="primary">
          {selectedIncentive?.name}
        </Typography>
      </TitleContainer>
      <KeyboardStatusContext.Provider value={{ isKeyBoardOpen }}>
        <ContainerList>
          <ListChipSelect
            chips={Object.keys(chipsRender)}
            selectedCard={selected}
            onSelected={setSelected}
            marginBetweenRows={isKeyBoardOpen ? 0 : 12}
          />
        </ContainerList>
        <Content>{componentRender}</Content>
      </KeyboardStatusContext.Provider>
    </Container>
  );
};

export default MoreDetails;
