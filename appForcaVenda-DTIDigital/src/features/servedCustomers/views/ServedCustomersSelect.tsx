import React from 'react';
import { ChipFilters, Divider, Typography } from 'shared/components';
import { useRedux } from 'shared/hooks';
import { TOption } from 'shared/types';
import { IServedCustomersState, setSupplierType } from '../redux/servedCustomersSlice';
import { ServedCustomersSuppliersTypes } from '../servedCustomersUtils';

import { SelectSupplierContainer } from './ServedCustomersFiltersSC';

interface ServedCustomersSelectProps {}

const ServedCustomersSelect: React.FC<ServedCustomersSelectProps> = () => {
  const { sliceState, dispatch } = useRedux<IServedCustomersState>('servedCustomers');

  const handleSelectSupplierType = (item: TOption) => {
    dispatch(setSupplierType(item.value as IServedCustomersState['supplierType']));
  };

  return (
    <>
      <SelectSupplierContainer>
        <Typography variant="overline" color="gray700">
          Filtros:
        </Typography>
        <ChipFilters
          filters={ServedCustomersSuppliersTypes.map((s) => ({
            ...s,
            active: sliceState.supplierType === s.value,
          }))}
          onClickFilter={(item) => handleSelectSupplierType(item)}
        />
      </SelectSupplierContainer>
      <Divider noMarge width="90%" />
    </>
  );
};

export default ServedCustomersSelect;
