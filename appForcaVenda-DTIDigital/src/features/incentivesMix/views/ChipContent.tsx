import React from 'react';
import { IMixCategory, IMixProduct, IMixSupplier } from 'shared/types';
import { CardContent } from './IncentiveMixSC';
import MixProductItem from './MixProductItem';
import MixCategoryItem from './MixCategoryItem';
import MixSupplierItem from './MixSupplierItem';
import { TMix } from '../incetiveMixUtils';

interface ChipContentProps {
  item: IMixSupplier | IMixProduct | IMixCategory;
  selectedChip: TMix;
}

const ChipContent: React.FC<ChipContentProps> = ({ item, selectedChip }) => {
  switch (selectedChip) {
    case 'Fornecedores':
      return (
        <CardContent>
          <MixSupplierItem supplier={item as IMixSupplier} />
        </CardContent>
      );

    case 'Categorias':
      return (
        <CardContent>
          <MixCategoryItem category={item as IMixCategory} />
        </CardContent>
      );

    case 'Produtos':
      return (
        <CardContent>
          <MixProductItem product={item as IMixProduct} />
        </CardContent>
      );

    default:
      return null;
  }
};

export default ChipContent;
