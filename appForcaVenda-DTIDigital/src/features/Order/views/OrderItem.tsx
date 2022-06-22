import React from 'react';

import { DefaultIcon, Typography } from '@shared/components';
import { getCurrency } from '@shared/utils';
import { Container, Content, Info, InfoDate } from './OrderItemSC';

interface ItemProps {
  date: string;
  orderNumber: string;
  value: number;
}

interface OrderItemProps {
  item: ItemProps;
  onPress: () => void;
}
const OrderItem: React.FC<OrderItemProps> = ({ item, onPress }) => (
  <Container onPress={onPress}>
    <Content>
      <InfoDate>
        <Typography variant="overline" color="gray300" size={11}>
          {item.date}
        </Typography>
      </InfoDate>

      <Info>
        <Typography variant="leadMedium" size={16}>{`Pedido: ${item.orderNumber}`}</Typography>
      </Info>
      <Info>
        <Typography variant="bodyMedium" size={14} color="blue600">
          {getCurrency(item.value)}
        </Typography>
      </Info>
    </Content>
    <DefaultIcon name="chevron-right" size={24} color="primary" />
  </Container>
);

export default OrderItem;
