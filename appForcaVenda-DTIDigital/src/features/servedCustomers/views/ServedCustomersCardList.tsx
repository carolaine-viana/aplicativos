import React from 'react';
import { IFocusSupplierCustomer } from 'shared/types';
import { Divider } from '@shared/components';

import {
  SupplierCardItemContainer,
  CNPJItemText,
  FantasyNameItemText,
  SegmentItemText,
  SupplierItemTitle,
  CorporateNameItemText,
  Container,
  SupplierItemText,
} from './ServedCustomersCardListSC';

interface ServedCustomersCardListItemProps {
  customer: IFocusSupplierCustomer;
}

const ServedCustomersCardList: React.FC<ServedCustomersCardListItemProps> = ({ customer }) => {
  const { tradeName, companyName, cnpj, focusSuppliers, businessUnit } = customer;

  return (
    <Container>
      <SupplierCardItemContainer>
        <CNPJItemText color="gray800" variant="bodyMedium">
          {cnpj}
        </CNPJItemText>
        <FantasyNameItemText color={tradeName ? 'gray800' : 'gray300'} variant="overline">
          {tradeName || 'NOME FANTASIA NÃO ENCONTRADO'}
        </FantasyNameItemText>
        <CorporateNameItemText color="black" variant="overline">
          {companyName}
        </CorporateNameItemText>
        <SegmentItemText variant="overline" color="default" fallbackText="-">
          Segmento:{' '}
          <SegmentItemText variant="overline" color="primary" fallbackText="-">
            {businessUnit}
          </SegmentItemText>
        </SegmentItemText>
        <Divider color="blue100" />
        <SupplierItemTitle color="gray800" variant="bodyMedium">
          Fornecedores
        </SupplierItemTitle>
        {focusSuppliers.map((supplier) => (
          <SupplierItemText color="gray600" variant="overline">
            {supplier.name}
          </SupplierItemText>
        ))}
      </SupplierCardItemContainer>
    </Container>
  );
};

export default ServedCustomersCardList;
