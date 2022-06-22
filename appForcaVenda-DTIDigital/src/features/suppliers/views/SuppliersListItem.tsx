import React from 'react';
import { Divider } from 'shared/components';
import { ISupplier } from 'shared/types';
import { SupplierListItemText, SupplierListItemContainer } from './SuppliersSC';

interface SupplierListItemProps {
  supplier: ISupplier;
}

const SupplierListItem: React.FC<SupplierListItemProps> = ({ supplier }) => {
  const { name = '', level = '' } = supplier;
  return (
    <SupplierListItemContainer>
      <SupplierListItemText color="primary" variant="bodyMedium">
        {name}
      </SupplierListItemText>
      <SupplierListItemText color="gray300" variant="overline">
        {level}
      </SupplierListItemText>
      <Divider />
    </SupplierListItemContainer>
  );
};

export default SupplierListItem;
