import React, { useMemo, useCallback } from 'react';
import { ISupplier } from 'shared/types';
import { usePromise } from 'shared/hooks';
import { isArrayEmpty } from 'shared/utils';
import { FallbackWrapper } from 'shared/components';
import { ISupplierFilterProps } from './SuppliersFilters';
import SupplierListItem from './SuppliersListItem';
import { SupplierListContainer, SuppliersFlatList } from './SuppliersSC';
import SuppliersManager from '../services/SuppliersManager';
import { filterBattleMapDada } from '../suppliersUtils';

interface BattleMapProps extends ISupplierFilterProps {}

const Manager = new SuppliersManager();

const BattleMap: React.FC<BattleMapProps> = ({ category, timeCourse, searchText = '' }) => {
  const loadSuppliers = useCallback(
    () => Manager.getSuppliersBattleMap(timeCourse, category),
    [timeCourse, category]
  );

  const { data: suppliers, ...promiseStatus } = usePromise<Array<ISupplier>>(loadSuppliers);

  const memoizedSuppliers = useMemo(
    () => filterBattleMapDada(suppliers, searchText),
    [suppliers, searchText]
  );

  const renderContent = () => (
    <SuppliersFlatList
      data={memoizedSuppliers}
      renderItem={({ item: supplier }) => (
        <SupplierListItem
          key={`supplier-${supplier.id}`}
          testID={`supplier-${supplier.id}`}
          supplier={supplier}
        />
      )}
      keyExtractor={(supplier) => supplier.id.toString()}
    />
  );

  return (
    <SupplierListContainer>
      <FallbackWrapper
        {...promiseStatus}
        renderContent={renderContent}
        loadingComponent="spinner"
        spinnerProps={{ size: 'large' }}
        showEmptyState={promiseStatus.success && isArrayEmpty(memoizedSuppliers)}
        emptyStateProps={{ message: 'Nenhum fornecedor\nencontrado.' }}
      />
    </SupplierListContainer>
  );
};

export default BattleMap;
