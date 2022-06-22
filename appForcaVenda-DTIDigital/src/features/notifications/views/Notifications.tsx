import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { CustomStatusBar, SearchHeader } from '@shared/components';
import { RoutesNames } from 'shared/types';
import NotificationItem from './NotificationItem';
import { Container } from './NotificationsSC';

const item = {
  title: 'AQUI é o TITLE',
  description:
    'Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição DescriçãoDescrição Descrição Descrição Descrição Descrição Descrição Descrição',
  date: '01/09/2022',
  hour: '15:00h',
  file: true,
};
const Notifications: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const handleCloseSearch = () => {
    setTimeout(() => {
      setSearch('');
    }, 200);
  };

  return (
    <>
      <CustomStatusBar backgroundColor={theme.palette.blue50} barStyle="dark-content" />
      <SearchHeader
        headerProps={{ title: 'Notificações' }}
        onClickArrow={() => navigation.goBack()}
        searchProps={{
          onChangeText: (text: string) => {
            setSearch(text);
          },
          onClose: handleCloseSearch,
          value: search,
          searchPlaceholder: 'Buscar Notificação',
        }}
      />
      <Container>
        <NotificationItem
          item={item}
          onPress={() =>
            navigation.navigate(RoutesNames.NOTIFICATION_DETAILS, {
              title: item.title,
              file: item.file,
              description: item.description,
            })
          }
        />
      </Container>
    </>
  );
};

export default Notifications;
