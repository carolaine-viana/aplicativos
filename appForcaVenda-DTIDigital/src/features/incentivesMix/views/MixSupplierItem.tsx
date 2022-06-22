import React from 'react';
import { View } from 'react-native';
import { IMixSupplier } from 'shared/types';
import { Typography } from 'shared/components';
import { ListItemText } from './IncentiveMixSC';

interface MixSupplierItemProps {
  supplier: IMixSupplier;
}

const MixSupplierItem: React.FC<MixSupplierItemProps> = ({ supplier }) => (
  <View>
    <ListItemText color="gray600" variant="overline" uppercase>
      {'COD: '}
      <Typography variant="overlineMedium" color="gray600" fallbackText="-">
        {supplier?.businessGroupId}
      </Typography>
    </ListItemText>
    <ListItemText color="gray600" variant="overline">
      {'GRUPO ECONÔMICO: '}
      <Typography variant="overlineMedium" color="gray600" fallbackText="-">
        {supplier?.businessGroupName}
      </Typography>
    </ListItemText>
    <ListItemText color="gray600" variant="overline">
      {'COD DIVISÃO: '}
      <Typography variant="overlineMedium" color="gray600" fallbackText="-">
        {supplier?.supplierDivisionId}
      </Typography>
    </ListItemText>
    <ListItemText color="gray600" variant="overline">
      {'DIVISÃO: '}
      <Typography variant="overlineMedium" color="gray600" fallbackText="-">
        {supplier?.supplierDivisionName}
      </Typography>
    </ListItemText>
  </View>
);

export default MixSupplierItem;
