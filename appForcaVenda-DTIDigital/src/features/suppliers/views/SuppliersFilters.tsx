import React from 'react';
import { Typography, WildCardIcon, FocusIcon } from 'shared/components';
import theme from 'shared/constants/theme';
import { TCategory, TTimeCourse } from '../suppliersUtils';
import { FilterContainer, CategoryContainer, CategoryContent } from './SuppliersSC';

export interface ISupplierFilterProps {
  category: TCategory;
  timeCourse: TTimeCourse;
  searchText?: string;
}

interface SuppliersFiltersProps extends ISupplierFilterProps {
  onChangeCategory: (value: TCategory) => void;
  onChangeTimeCourse: (value: TTimeCourse) => void;
}

const { palette } = theme;

const SuppliersFilters: React.FC<SuppliersFiltersProps> = ({ category, onChangeCategory }) => {
  const handlePressCategory = (cat: TCategory) => {
    onChangeCategory(cat);
  };

  const focusSelected = category === 'foco';
  const wildCardSelected = category === 'coringa';

  return (
    <FilterContainer direction="row" space="around">
      <CategoryContainer testID="pressable-wildcard" onPress={() => handlePressCategory('coringa')}>
        <CategoryContent active={wildCardSelected}>
          <WildCardIcon stroke={wildCardSelected ? palette.blue600 : palette.gray200} />
        </CategoryContent>
        <Typography variant="overlineMedium" color={category === 'coringa' ? 'gray600' : 'gray200'}>
          CORINGA
        </Typography>
      </CategoryContainer>
      <CategoryContainer testID="pressable-focus" onPress={() => handlePressCategory('foco')}>
        <CategoryContent active={focusSelected}>
          <FocusIcon stroke={focusSelected ? palette.blue600 : palette.gray200} />
        </CategoryContent>
        <Typography variant="overlineMedium" color={focusSelected ? 'gray600' : 'gray200'}>
          FOCO
        </Typography>
      </CategoryContainer>
    </FilterContainer>
  );
};
export default SuppliersFilters;
