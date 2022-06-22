import React from 'react';
import expect from 'expect';
import { render } from '@shared/utils/test-utils';
import BEM from '../views/BEM';

jest.mock('../../../shared/components/CustomStatusBar/CustomStatusBar', () => {
  const { View } = require('react-native');
  return () => <View testID="CustomStatusBar" />;
});

jest.mock('styled-components', () => {
  return {
    useTheme: jest.fn().mockReturnValue({
      palette: {
        white: '#ffffff',
      },
    }),
  };
});
describe('Screen BEM', () => {
  it('should render a screem saldo bem ', async () => {
    const screen = render(<BEM />);
    expect(screen.queryByText('Extrato BEM')).not.toBeNull();
  });

  //TODO testar o fluxo junto com os testes de integração
});
