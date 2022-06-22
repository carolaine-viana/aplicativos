import { getSortListWithActives } from 'features/CustomerFilters';
import React, { useState } from 'react';

import { ChipFilters, ChipSort, IChipItem } from 'shared/components';
import { filters } from '../teamUtils';
import { Container, ContainerOrderBy } from './TeamFilterSC';

interface FiltersProps {
  sortMode: string;
  onSelectSortMode: (sortMode: { value: 'za' | 'az' }) => void;
  setProfile: () => void;
  screen: string;
}

const TeamFilter: React.FC = ({
  sortMode,
  onSelectSortMode,
  setProfile,
  screen = 'TeamList',
}: FiltersProps) => {
  const [sortOpen, setSortOpen] = useState(false);

  filters.ordenar.renderItem = () => (
    <ChipSort active handleClickSort={() => setSortOpen((o) => !o)} sortOpen={sortOpen} />
  );

  const handleClickSort = (clickSortMode: any) => {
    onSelectSortMode(clickSortMode);
  };

  return (
    <Container>
      <ChipFilters
        filters={Object.values(filters)}
        onClickFilter={(item) => setProfile(item.value)}
      />
      {sortOpen && (
        <ContainerOrderBy>
          <ChipFilters
            filters={
              getSortListWithActives(filters.ordenar.subFilters, sortMode, screen) as IChipItem[]
            }
            onClickFilter={handleClickSort}
          />
        </ContainerOrderBy>
      )}
    </Container>
  );
};

export default TeamFilter;
