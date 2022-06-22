import { Typography } from '@shared/components';
import styled from 'styled-components/native';
import { DeviceFeatures } from 'shared/base';

const ContainerCard = styled.View`
  width: ${(DeviceFeatures.dimensions.width * 1).toFixed(0)}px;
  min-height: ${(DeviceFeatures.dimensions.height * 0.45).toFixed(0)}px;
  padding-bottom: 16px;
`;
const Container = styled.View`
  padding: 0px 16px;
  margin-bottom: 16px;
`;
const SupplierCardItemContainer = styled.View`
  background-color: ${({ theme }) => theme.palette.blue50};
  padding: 38px 27px;
  border-radius: 17px;
`;

const CNPJItemText = styled(Typography)`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 17px;
`;
const FantasyNameItemText = styled(Typography)`
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 19px;
`;
const CorporateNameItemText = styled(Typography)`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 19px;
`;
const SegmentItemText = styled(Typography)`
  margin-bottom: 24px;
  line-height: 13px;
  font-size: 11px;
`;

const SupplierItemTitle = styled(Typography)`
  margin-top: 24px;
  line-height: 17px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const SupplierItemText = styled(Typography)`
  line-height: 13px;
  font-size: 11px;
  margin-bottom: 10px;
`;

export {
  Container,
  SupplierCardItemContainer,
  CNPJItemText,
  FantasyNameItemText,
  SegmentItemText,
  SupplierItemTitle,
  CorporateNameItemText,
  SupplierItemText,
  ContainerCard,
};
