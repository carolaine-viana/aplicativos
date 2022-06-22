import React from 'react';
import { ICustomersServed } from 'shared/types';
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
} from './SuppliersCardListSC';

interface SupplierCardItemProps {
  customer: ICustomersServed;
}

const SupplierCardList: React.FC<SupplierCardItemProps> = ({ customer }) => {
  const { tradeName, companyName, cnpj, focusSuppliers, businessUnit } = customer;
  return (
    <Container>
      <SupplierCardItemContainer>
        <CNPJItemText color="gray800" variant="bodyMedium">
          {cnpj}
        </CNPJItemText>
        <FantasyNameItemText color={tradeName ? 'gray800' : 'gray300'} variant="body">
          {tradeName || 'NOME FANTASIA NÃO ENCONTRADO'}
        </FantasyNameItemText>
        <CorporateNameItemText color="black" variant="overline">
          {companyName}
        </CorporateNameItemText>

        <SegmentItemText color="blue600" variant="overlineMedium">
          {`SEGMENTO:  ${businessUnit || '-'}`}
        </SegmentItemText>
        <Divider />
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

export default SupplierCardList;
