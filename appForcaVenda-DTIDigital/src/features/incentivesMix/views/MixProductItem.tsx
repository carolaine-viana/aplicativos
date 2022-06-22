import React from 'react';
import { View } from 'react-native';
import { IMixProduct } from 'shared/types';
import { Typography } from 'shared/components';
import { ListItemText } from './IncentiveMixSC';

interface MixProductItemProps {
  product: IMixProduct;
}

const MixProductItem: React.FC<MixProductItemProps> = ({ product }) => (
  <View>
    <ListItemText color="gray600" variant="overline">
      {'COD: '}
      <Typography variant="overlineMedium" color="gray600" fallbackText="-">
        {product?.id}
      </Typography>
    </ListItemText>
    <ListItemText color="gray600" variant="overline">
      {'NOME: '}
      <Typography variant="overlineMedium" color="gray600" fallbackText="-">
        {product?.name}
      </Typography>
    </ListItemText>
    <ListItemText color="gray600" variant="overline">
      {'OPERAÇÃO: '}
      <Typography variant="overlineMedium" color="gray600" fallbackText="-">
        {product?.operationType}
      </Typography>
    </ListItemText>
  </View>
);

export default MixProductItem;
