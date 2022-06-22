import React from 'react';
import { Divider, DefaultIcon } from '@shared/components';

import {
  Container,
  Title,
  Description,
  ContainerDetails,
  Date,
  Hour,
  ContainerIcon,
} from './NotificationItemSC';

interface ItemProps {
  title: string;
  description: string;
  date: string;
  hour: string;
  file?: boolean;
}
interface NotificationItemProps {
  item: ItemProps;
  onPress: () => void;
}
const NotificationItem: React.FC<NotificationItemProps> = ({ item, onPress }) => (
  <Container onPress={onPress}>
    <Title size={14} variant="bodyMedium" color="gray700">
      {item.title}
    </Title>
    <Description size={11} variant="overline" color="gray700" numberOfLines={2}>
      {item.description}
    </Description>
    <ContainerDetails>
      <Date size={9} color="gray300">
        {item.date}
      </Date>
      <Hour size={9} color="gray300">
        {item.hour}
      </Hour>
      {item.file && (
        <ContainerIcon>
          <DefaultIcon name="paperclip" size={12} color="link" />
        </ContainerIcon>
      )}
    </ContainerDetails>
    <Divider color="blue100" />
  </Container>
);

export default NotificationItem;
