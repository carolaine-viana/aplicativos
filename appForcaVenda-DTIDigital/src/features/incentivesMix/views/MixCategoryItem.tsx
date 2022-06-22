import React from 'react';
import { View } from 'react-native';
import { IMixCategory } from 'shared/types';
import { Typography } from 'shared/components';
import { ListItemText } from './IncentiveMixSC';

interface MixCategoryItemProps {
  category: IMixCategory;
}

const MixCategoryItem: React.FC<MixCategoryItemProps> = ({ category }) => (
  <View>
    <ListItemText color="gray600" variant="overline">
      {'GRUPO: '}
      <Typography variant="overlineMedium" color="gray600" fallbackText="-">
        {category?.productsGroup}
      </Typography>
    </ListItemText>
    <ListItemText color="gray600" variant="overline">
      {'CATEGORIA: '}
      <Typography variant="overlineMedium" color="gray600" fallbackText="-">
        {category?.productsCategory}
      </Typography>
    </ListItemText>
    <ListItemText color="gray600" variant="overline">
      {'SUBCATEGORIA: '}
      <Typography variant="overlineMedium" color="gray600" fallbackText="-">
        {category?.productsSubcategory}
      </Typography>
    </ListItemText>
    <ListItemText color="gray600" variant="overline">
      {'OPERAÇÃO: '}
      <Typography variant="overlineMedium" color="gray600" fallbackText="-">
        {category?.operationType}
      </Typography>
    </ListItemText>
  </View>
);

export default MixCategoryItem;
