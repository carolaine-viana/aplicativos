import { BoxContent, FlexRow, Typography } from '@shared/components';
import { DeviceFeatures } from 'shared/base';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

const SuppliersContainer = styled(BoxContent)`
  height: 100%;
  width: 100%;
`;

const FilterContainer = styled(FlexRow)`
  height: 175px;
  width: 100%;
  padding: 40px 36px;
  justify-content: space-around;
  align-items: center;
`;

const CategoryContainer = styled.Pressable<{ active?: boolean }>`
  align-items: center;
`;
const CategoryContent = styled.View<{ active?: boolean }>`
  width: 88px;
  height: 88px;
  border-radius: 44px;
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ active, theme }) =>
    active ? theme.palette.blue50 : theme.palette.gray100};
`;

const SupplierListContainer = styled.View`
  width: ${(DeviceFeatures.dimensions.width * 1).toFixed(0)}px;
  min-height: ${(DeviceFeatures.dimensions.height * 0.45).toFixed(0)}px;
  padding-bottom: 32px;
`;

const SupplierListItemContainer = styled.View`
  margin-top: 8px;
  padding: 0 16px;
`;

const SupplierListItemText = styled(Typography)`
  margin-bottom: 6px;
`;

const SuppliersFlatList = styled(FlatList)`
  flex: 1;
`;

export {
  SuppliersContainer,
  CategoryContainer,
  CategoryContent,
  FilterContainer,
  SupplierListContainer,
  SupplierListItemContainer,
  SupplierListItemText,
  SuppliersFlatList,
};
