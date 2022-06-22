import React from 'react';
import DefaultIcon from '../DefaultIcon/DefaultIcon';
import { ChipSortContainer, SortLabel } from './ChipSortSC';

interface ChipSortProps {
  handleClickSort: () => void;
  sortOpen: boolean;
  active: boolean;
}

const ChipSort: React.FC<ChipSortProps> = ({ handleClickSort, sortOpen }) => (
  <ChipSortContainer active onPress={handleClickSort}>
    <SortLabel variant="overline" color="white">
      Ordenar
    </SortLabel>
    <DefaultIcon name={sortOpen ? 'chevron-up' : 'chevron-down'} size={16} color="light" />
  </ChipSortContainer>
);

export default ChipSort;
