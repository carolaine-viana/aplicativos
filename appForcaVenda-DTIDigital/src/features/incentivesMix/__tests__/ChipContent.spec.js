import React from 'react';
import expect from 'expect';
import { render } from '@shared/utils/test-utils';
import ChipContent from '../views/ChipContent';

jest.mock('../views/MixProductItem', () => {
  const { View } = require('react-native');
  return () => <View testID="MixProductItem" />;
});

jest.mock('../views/MixCategoryItem', () => {
  const { View } = require('react-native');
  return () => <View testID="MixCategoryItem" />;
});

jest.mock('../views/MixSupplierItem', () => {
  const { View } = require('react-native');
  return () => <View testID="MixSupplierItem" />;
});

describe('Tests ChipContent', () => {
  it('should render only MixProductItem', () => {
    const screen = render(<ChipContent item={{}} selectedChip="Produtos" />);
    expect(screen.queryByTestId('MixProductItem')).not.toBeNull();
    expect(screen.queryByTestId('MixSupplierItem')).toBeNull();
    expect(screen.queryByTestId('MixCategoryItem')).toBeNull();
  });
  it('should render only MixSupplierItem', () => {
    const screen = render(<ChipContent item={{}} selectedChip="Fornecedores" />);
    expect(screen.queryByTestId('MixSupplierItem')).not.toBeNull();
    expect(screen.queryByTestId('MixProductItem')).toBeNull();
    expect(screen.queryByTestId('MixCategoryItem')).toBeNull();
  });
  it('should render only MixCategoryItem', () => {
    const screen = render(<ChipContent item={{}} selectedChip="Categorias" />);
    expect(screen.queryByTestId('MixCategoryItem')).not.toBeNull();
    expect(screen.queryByTestId('MixProductItem')).toBeNull();
    expect(screen.queryByTestId('MixSupplierItem')).toBeNull();
  });
});
