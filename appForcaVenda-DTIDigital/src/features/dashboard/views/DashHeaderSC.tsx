import styled from 'styled-components/native';
import { Typography } from '@shared/components';

// TODO: Usar Typography nos componentes de Text

export const Container = styled.View`
  width: 100%;
  padding: 24px 24px 6px 24px;
  background-color: ${({ theme }) => theme.palette.blue600};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  min-height: 220px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 45px;
`;

export const AppWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 36px;
  height: 32px;
`;

export const LogoutWrapper = styled.Pressable`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.blue400};
  padding: 8px;
  border-radius: 10px;
`;

export const Notification = styled.Pressable`
  flex-direction: row;
  align-items: center;
  margin-right: 14px;
`;

export const AppName = styled(Typography)`
  margin-left: 10px;
`;

export const LogoutText = styled(Typography)`
  margin-left: 8px;
`;

export const DateText = styled(Typography)`
  margin-top: 8px;
  margin-bottom: 6px;
`;

export const Wallet = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  min-height: 32px;
`;

export const ContentButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.TouchableOpacity`
  margin-right: 8px;
`;

export const WalletWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WalletHide = styled.View`
  width: 80px;
  height: 14px;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.palette.blue100};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
`;
