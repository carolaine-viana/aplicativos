import React from 'react';
import { ListItemAvatar, Typography } from '@shared/components';
import { Container, ContainerButton, DefaultButton, ButtonText } from './CardActionsSC';

interface CardActionsProps {
  userName: string;
  localization: string;
  mainLabel: string;
  secondLabel: string;
  onMainAction: () => void;
  onSecondAction?: () => void;
}

const CardActions: React.FC<CardActionsProps> = ({
  userName,
  localization,
  mainLabel,
  secondLabel,
  onMainAction,
  onSecondAction,
}) => {
  const ITEM_HEIGHT = 100;

  return (
    <Container>
      <ListItemAvatar
        mainText={userName}
        itemHeight={ITEM_HEIGHT}
        renderSecondaryText={() => (
          <Typography variant="overline" color="gray300" size={11}>
            {localization}
          </Typography>
        )}
      />
      <ContainerButton>
        <DefaultButton onPress={onSecondAction}>
          <ButtonText>{secondLabel}</ButtonText>
        </DefaultButton>

        <DefaultButton primary onPress={onMainAction}>
          <ButtonText primary>{mainLabel}</ButtonText>
        </DefaultButton>
      </ContainerButton>
    </Container>
  );
};

export default CardActions;
