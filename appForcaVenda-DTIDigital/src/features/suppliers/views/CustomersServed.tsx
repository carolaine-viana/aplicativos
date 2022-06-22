import React, { useMemo, useCallback } from 'react';
import { ICustomersServed } from 'shared/types';
import { usePromise } from 'shared/hooks';

import { FallbackWrapper } from 'shared/components';
import { isArrayEmpty } from 'shared/utils';
import SupplierCardList from './SuppliersCardList';
import { filterCustomersServedData } from '../suppliersUtils';
import { ContainerCard } from './SuppliersCardListSC';
import { SuppliersFlatList } from './SuppliersSC';
import { ISupplierFilterProps } from './SuppliersFilters';
import SuppliersManager from '../services/SuppliersManager';

interface CustomersServedProps extends ISupplierFilterProps {}

const Manager = new SuppliersManager();

const CustomersServed: React.FC<CustomersServedProps> = ({
  category,
  timeCourse,
  searchText = '',
}) => {
  const loadData = useCallback(
    () => Manager.getCustomersServed(timeCourse, category),
    [timeCourse, category]
  );

  const { data: customersSuppliers, ...promiseStatus } =
    usePromise<Array<ICustomersServed>>(loadData);

  const memoizedCustomersSuppliers = useMemo(
    () => filterCustomersServedData(customersSuppliers, searchText),
    [customersSuppliers, searchText]
  );

  const renderContent = () => (
    <SuppliersFlatList
      data={memoizedCustomersSuppliers}
      renderItem={({ item: customer }) => (
        <SupplierCardList key={customer.id} customer={customer} />
      )}
      keyExtractor={(customer) => customer.id.toString()}
    />
  );
  return (
    <ContainerCard>
      <FallbackWrapper
        {...promiseStatus}
        renderContent={renderContent}
        loadingComponent="spinner"
        spinnerProps={{ size: 'large' }}
        showEmptyState={promiseStatus.success && isArrayEmpty(memoizedCustomersSuppliers)}
        emptyStateProps={{ message: 'Não encontramos clientes' }}
      />
    </ContainerCard>
  );
};

export default CustomersServed;
