import React from 'react';
import { Image } from 'react-native';
import { DefaultIcon, Typography } from '@shared/components';
import RoleWrapper from 'shared/components/RoleWrapper/RoleWrapper';
import { Profiles } from 'shared/types';
import { ContainerCards, CardContent, IconCardContainter, Container } from './BEMSC';

const CardsBEM: React.FC<{ onCLickSend: () => void; onClickDownload: () => void }> = ({
  onCLickSend,
  onClickDownload,
}) => {
  const cards = [
    {
      label: 'Enviar',
      iconName: 'send',
      image: null,
      action: () => onCLickSend(),
      shouldRender: true,
      roles: [Profiles.RCA, Profiles.GT, Profiles.GV],
    },
    {
      label: 'Baixar',
      iconName: 'download',
      image: null,
      action: () => onClickDownload(),
      shouldRender: true,
      roles: [Profiles.RCA, Profiles.GT, Profiles.GV],
    },
  ];

  const renderContent = (card) => (
    <CardContent onPress={card.action}>
      <IconCardContainter bg="light">
        {card.iconName && <DefaultIcon name={card.iconName} size={24} color="primary" />}
        {card.image && <Image source={card.image} />}
      </IconCardContainter>
      <Typography variant="body" color="gray900">
        {card.label}
      </Typography>
    </CardContent>
  );

  return (
    <Container>
      <ContainerCards>
        {cards.map(
          (card) =>
            card.shouldRender && (
              <RoleWrapper
                key={card.label}
                renderRCAContent={() =>
                  card.roles.includes(Profiles.RCA) || !card.roles ? renderContent(card) : null
                }
                renderGTContent={() =>
                  card.roles.includes(Profiles.GT) || !card.roles ? renderContent(card) : null
                }
                renderGVContent={() =>
                  card.roles.includes(Profiles.GV) || !card.roles ? renderContent(card) : null
                }
              />
            )
        )}
      </ContainerCards>
    </Container>
  );
};

export default CardsBEM;
