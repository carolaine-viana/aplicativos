import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import DashboardManager from '@features/dashboard/services/DashboardManager';
import RoleWrapper from 'shared/components/RoleWrapper/RoleWrapper';
import martinsLogo from '@assets/images/LogoMartins.png';
import { DefaultIcon, Typography } from '@shared/components';
import { getCurrency } from '@shared/utils';
import { IUserReadDto } from 'shared/models/User/IUserDtos';
import { useRoleInfo } from '@shared/hooks';

import { Analytics } from '../../../shared/base/Analytics';
import {
  Container,
  Content,
  AppWrapper,
  Image,
  LogoutWrapper,
  IconContainer,
  DateText,
  Wallet,
  WalletWrapper,
  WalletHide,
  ContentButtons,
} from './DashHeaderSC';
import { getDateString } from '../dashUtils';

const dashboardManager = new DashboardManager();

const DashHeader: React.FC = () => {
  const { signOut } = useRoleInfo();
  const navigation = useNavigation();
  const [walletVisible, setWalletVisible] = useState(false);

  const [userInfo, setUserInfo] = useState<IUserReadDto | null>(null);

  function handleShowWalletValue() {
    setWalletVisible(false);
  }

  function handleHideWalletValue() {
    setWalletVisible(true);
  }

  const metrics = Analytics.getInstance();

  useEffect(() => {
    metrics.sendUserProperties({
      id: userInfo?.id || '',
      role: userInfo?.role || '',
      name: userInfo?.name || '',
    });

    const loadCustomer = async () => {
      try {
        const response = await dashboardManager.getUserEarningsBalance();

        if (response) {
          setUserInfo(response);
        } else {
          signOut?.();
        }
      } catch {
        signOut?.();
      }
    };

    loadCustomer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const commission = getCurrency(userInfo?.earningsBalance);

  function handleLogout() {
    navigation.toggleDrawer();
  }

  const renderRCAContent = () => {
    if (userInfo?.earningsBalance >= 0) {
      return (
        <Wallet>
          <Typography variant="bodyMedium" color="light">
            Comissões
          </Typography>
          <WalletWrapper>
            {walletVisible ? (
              <IconContainer onPress={handleShowWalletValue} testID="button-wallet-show">
                <DefaultIcon name="eye-off" size={24} color="light" />
              </IconContainer>
            ) : (
              <IconContainer onPress={handleHideWalletValue} testID="button-wallet-hide">
                <DefaultIcon name="eye" size={24} color="light" />
              </IconContainer>
            )}
            {walletVisible ? (
              <Typography variant="title" bold color="light">
                {`${commission}`}
              </Typography>
            ) : (
              <WalletHide />
            )}
          </WalletWrapper>
        </Wallet>
      );
    }
    return null;
  };

  return (
    <Container>
      <Content>
        <AppWrapper>
          <Image source={martinsLogo} />
        </AppWrapper>
        <ContentButtons>
          {/* <Notification onPress={() => navigation.navigate('Notifications')}>
            <DefaultIcon name="bell" size={24} color="light" />
          </Notification> */}
          <LogoutWrapper onPress={handleLogout}>
            <DefaultIcon name="menu" size={24} color="light" />
          </LogoutWrapper>
        </ContentButtons>
      </Content>

      <Typography color="light" variant="title">
        {'Olá '}
        <Typography color="light" variant="title" bold>
          {userInfo?.name}!
        </Typography>
      </Typography>

      <RoleWrapper renderRCAContent={renderRCAContent} />

      <DateText variant="overline" color="light">
        {getDateString()}
      </DateText>
    </Container>
  );
};

export default DashHeader;
