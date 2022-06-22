import React from 'react';

import { formatCNPJ } from '@shared/utils';
import { ClientCNPJ, ClientName } from '../../cardClient/views/CardClientSC';
import { Container } from './OrdersHeaderSC';

interface Props {
  id: string;
  cnpj: string;
  tradeName: string;
  clientName: string;
}

interface HeaderProps {
  customer: Props;
}
const OrdersHeader: React.FC<HeaderProps> = ({ customer }) => (
  <Container>
    <ClientCNPJ variant="bodyMedium" color="gray800" bold>
      {`${formatCNPJ(customer.cnpj)} • ${customer.id}`}
    </ClientCNPJ>
    <ClientName variant="overline" color={customer.tradeName ? 'default' : 'gray500'}>
      {customer.tradeName || 'NOME FANTASIA NÃO ENCONTRADO'}
    </ClientName>
    <ClientName variant="overline">{customer.clientName}</ClientName>
  </Container>
);

export default OrdersHeader;
