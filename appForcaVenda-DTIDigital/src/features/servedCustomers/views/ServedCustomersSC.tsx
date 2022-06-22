import { BoxContent, FlexRow, Typography } from '@shared/components';
import { DeviceFeatures } from 'shared/base';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

const SuppliersContainer = styled(BoxContent)`
  height: 100%;
  width: 100%;
  padding-bottom: 72px;
`;

const AlingTag = styled.View`
  margin-top: 147px;
  align-items: center;
  padding: 0px 50%;
`;

const FilterContainer = styled(FlexRow)`
  height: 175px;
  width: 100%;
  padding: 40px 36px;
  justify-content: space-around;
  align-items: center;
`;

const Tag = styled.View`
  height: 24px;
  width: 158px;
  border-radius: 12px;
  padding: 4px 16px;
  margin: 0px;
  background-color: ${({ theme }) => theme.palette.background.dark};
  margin-bottom: 24px;
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
  AlingTag,
  Tag,
};
