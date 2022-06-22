import React, { useState } from 'react';
import { ChipFilters, IChipItem, DefaultIcon, Divider } from 'shared/components';
import { TPredefinedFilter } from 'shared/types';
import { filters, getFiltersWithActives, getSortListWithActives } from '../customersFiltersUtils';
import {
  ChipSortContainer,
  SortLabel,
  FiltersContainer,
  SubFiltersContainer,
} from './CustomersFiltersSC';

interface CustomersFiltersProps {
  selectedFilters: TPredefinedFilter[];
  onSelectFilter: (item: TPredefinedFilter) => void;
  sortMode: string;
  onSelectSortMode: (sortMode: { value: 'za' | 'az' }) => void;
  screen?: string;
}

const CustomersFilters: React.FC<CustomersFiltersProps> = ({
  selectedFilters,
  onSelectFilter,
  sortMode,
  onSelectSortMode,
  screen = 'customers',
}) => {
  const [sortOpen, setSortOpen] = useState(false);

  const handleClickSort = (clickSortMode: any) => {
    onSelectSortMode(clickSortMode);
  };

  const renderSort = () => (
    <ChipSortContainer active onPress={() => setSortOpen((o) => !o)}>
      <SortLabel variant="overline" color="white">
        Ordenar
      </SortLabel>
      <DefaultIcon name={sortOpen ? 'chevron-up' : 'chevron-down'} size={16} color="light" />
    </ChipSortContainer>
  );

  (filters.ordenar as Partial<IChipItem>).renderItem = renderSort;

  const filterList = getFiltersWithActives(selectedFilters, screen) as IChipItem[];

  return (
    <>
      <FiltersContainer>
        <ChipFilters filters={filterList} onClickFilter={onSelectFilter} scrollBack />
        {sortOpen && (
          <SubFiltersContainer>
            <ChipFilters
              onClickFilter={handleClickSort}
              filters={
                getSortListWithActives(filters.ordenar.subFilters, sortMode, screen) as IChipItem[]
              }
            />
          </SubFiltersContainer>
        )}
      </FiltersContainer>
      <Divider width="90%" color="blue50" />
    </>
  );
};

export default CustomersFilters;
