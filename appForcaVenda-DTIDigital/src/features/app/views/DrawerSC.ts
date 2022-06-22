import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '@shared/components';
import { Pressable } from 'react-native';

export const Container = styled(SafeAreaView)`
  padding: 16px;
  flex: 1;
`;

export const MenuList = styled(Pressable)`
  margin-top: 8px;
`;

export const CloseButton = styled.Pressable`
  align-self: flex-end;
  margin-bottom: 40px;
`;

export const MenuItem = styled.View`
  padding-bottom: 12px;
  height: 100%;
`;

export const Item = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const ContentItem = styled.View`
  flex-direction: row;
  align-items: flex-start;
  flex: 4;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
  border-bottom-color: ${(props) => props.theme.palette.gray200};
  border-bottom-width: 1px;
  margin-bottom: 20px;

  justify-content: space-between;
  align-items: center;
`;

export const MenuItemIcon = styled.View`
  margin-right: 16px;
`;

export const MenuItemText = styled(Typography)`
  margin-bottom: 4px;
`;

export const MenuText = styled(Typography)`
  margin-bottom: 12px;
`;

export const MenuDescriptionText = styled(Typography)`
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.palette.gray300};
  margin-bottom: 12px;
`;

export const Version = styled.View`
  margin-top: 12px;
`;
