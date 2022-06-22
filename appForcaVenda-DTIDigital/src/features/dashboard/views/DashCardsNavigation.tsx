import React from 'react';
import { Image } from 'react-native';
import { DefaultIcon, Typography } from '@shared/components';
import { IMenuItem, useCombineRoleFlags, useRoleInfo } from 'shared/hooks';
import { ContainerCards, CardContent, IconCardContainter } from './DashBoardSC';
import { useBestResultModal } from '../../../shared/hooks/useBestResultModal';

interface DashCardsNavigationProps {}

const DashCardsNavigation: React.FC<DashCardsNavigationProps> = () => {
  const { setModalVisible } = useBestResultModal();
  const { roleInfo } = useRoleInfo();

  const cards = useCombineRoleFlags(roleInfo, undefined, undefined, setModalVisible);

  const renderContent = (card: IMenuItem) => (
    <CardContent onPress={card.action} key={card.title}>
      <IconCardContainter bg="light">
        {card.iconName && <DefaultIcon name={card.iconName} size={24} color="primary" />}
        {card.icontImg && <Image source={card.icontImg} />}
      </IconCardContainter>
      <Typography variant="body" color="gray900">
        {card.title}
      </Typography>
    </CardContent>
  );

  return (
    <>
      <ContainerCards>
        {cards.map((card) => card.shouldRender && !card.onlyMenu && renderContent(card))}
      </ContainerCards>
    </>
  );
};

export default DashCardsNavigation;
