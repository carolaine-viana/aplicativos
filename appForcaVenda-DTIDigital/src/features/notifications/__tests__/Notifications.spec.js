import React from 'react';
import expect from 'expect';
import { fireEvent, render, waitFor, act } from '@shared/utils/test-utils';
import NotificationDetails from '../views/NotificationDetails'
import NotificationItem from '../views/NotificationItem'
import Notifications from '../views/Notifications'
import ModalNotification from '../views/ModalNotification'
import jestExpect from 'expect';

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
it('should be render Notifications correctly', () => {
  const screen = render(<Notifications />).toJSON();
  jestExpect(screen).toMatchSnapshot();
})

it('should be render Notifications NotificationItem', () => {
  const screen = render(<NotificationItem item={{title: 'Titulo', description: 'Descriçao', date: '01/09/2022', hour: '15h', file: true}} />).toJSON();
  jestExpect(screen).toMatchSnapshot();
})

it('should be render Notifications NotificationDetails', () => {
  const screen = render(<NotificationDetails />).toJSON();
  jestExpect(screen).toMatchSnapshot();
})

it('should be render Notifications ModalNotification', () => {
  const screen = render(<ModalNotification />).toJSON();
  jestExpect(screen).toMatchSnapshot();
})


