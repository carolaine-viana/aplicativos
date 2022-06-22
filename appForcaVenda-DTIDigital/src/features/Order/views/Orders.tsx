import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { CustomStatusBar, Divider, SearchHeader } from '@shared/components';
import { useNavigation } from '@react-navigation/native';
import { Container } from './OrdersSC';
import OrderItem from './OrderItem';
import OrdersHeader from './OrdersHeader';

const item = {
  date: '17/01/2022',
  orderNumber: '0987654',
  value: 200,
};

const Orders: React.FC = ({ route }) => {
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
        headerProps={{ title: 'Selecione o pedido' }}
        onClickArrow={() => navigation.goBack()}
        searchProps={{
          onChangeText: (text: string) => {
            setSearch(text);
          },
          onClose: handleCloseSearch,
          value: search,
          searchPlaceholder: 'Buscar pedido',
        }}
      />
      <Container>
        <OrdersHeader customer={route?.params} />
        <Divider color="blue100" noMarge />
        <OrderItem item={item} onPress={() => {}} />
      </Container>
    </>
  );
};

export default Orders;
