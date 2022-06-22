import React from 'react';
import expect from 'expect';
import { render} from '@shared/utils/test-utils';
import Orders from '../views/Orders'
import OrderItem from '../views/OrderItem'
import OrdersHeader from '../views/OrdersHeader'
import jestExpect from 'expect';
import * as navigationHooks from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

jest.mock('styled-components', () => {
  return {
    useTheme: jest.fn().mockReturnValue({
      palette: {
        white: '#ffffff',
      },
    }),
  };
});


it('should be render OrderItem correctly', () => {
  const screen = render(<OrderItem item={{date: '', orderNumber: '', value: ''}}/>).toJSON();
  jestExpect(screen).toMatchSnapshot();
})

it('should be render OrdersHeader correctly', () => {
  const screen = render(<OrdersHeader customer={{id: '', cnpj: '', tradeName: '', clientName: ''}} />).toJSON();
  jestExpect(screen).toMatchSnapshot();
})


it.skip('should be render Orders correctly', () => {
  navigationHooks.useRoute.mockReturnValueOnce({
    id: '00',
    cnpj: '0000',
    tradeName: '',
    clientName: '',
  });
  const screen = render(<Orders />).toJSON();
  jestExpect(screen).toMatchSnapshot();
})



