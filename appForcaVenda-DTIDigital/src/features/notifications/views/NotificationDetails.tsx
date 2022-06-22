import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { CustomStatusBar, SearchHeader, Typography, DefaultIcon } from '@shared/components';
import { useTheme } from 'styled-components';
import {
  Container,
  Title,
  Description,
  DownloadButton,
  ContainerButton,
} from './NotificationDetailsSC';

const NotificationDetails: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();

  return (
    <>
      <CustomStatusBar backgroundColor={theme.palette.blue50} barStyle="dark-content" />
      <SearchHeader
        headerProps={{ title: 'Notificações' }}
        onClickArrow={() => navigation.goBack()}
      />
      <Container>
        <Title size={18} color="gray600" variant="bodyMedium">
          {route?.params?.title}
        </Title>
        <Description size={11} color="gray700" variant="overline">
          {route?.params?.description}
        </Description>

        {route?.params?.file && (
          <ContainerButton>
            <DownloadButton onPress={() => {}}>
              <DefaultIcon name="paperclip" size={24} color="light" />
              <Typography variant="bodyMedium" color="white">
                Baixar anexo
              </Typography>
            </DownloadButton>
          </ContainerButton>
        )}
      </Container>
    </>
  );
};

export default NotificationDetails;
