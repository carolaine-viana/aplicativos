import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import WildCardFocusDetails from '../views/WildCardFocusDetails';
import SuppliersManagerMock from '../services/SuppliersManager';

jest.mock('../../../shared/components/CustomStatusBar/CustomStatusBar', () => {
  const { View } = require('react-native');
  return () => <View testID="CustomStatusBar" />;
});

jest.mock('styled-components', () => {
  return {
    useTheme: jest.fn().mockReturnValue({
      palette: {
        blue50: '#EAF3FF',
      },
    }),
  };
});

jest.mock('@react-native-community/netinfo', () => {
  return {
    useNetInfo: () => ({
      isConnected: true,
    }),
  };
});

jest.mock('../services/SuppliersManager');

// TODO: TESTES UNITARIOS
describe.skip('Tests WildCardFocusDetails', () => {
  let ManagerMockInstance;
  beforeAll(() => {
    ManagerMockInstance = SuppliersManagerMock.mock.instances[0];
    ManagerMockInstance.getSuppliersIndicators = jest.fn();
  });

  it(`should render spinner feedback and then a list of WildCardFocusDetails`, async () => {
    ManagerMockInstance.getSuppliersIndicators.mockResolvedValueOnce({
      id: 44184,
      focusSuppliersTotalCustomersResult: 100,
      wildcardSuppliersTotalCustomersResult: 200,
      wildcardSuppliersCustomersResult: [
        {
          wildcardSuppliersQuantity: 1,
          customersQuantity: 15,
        },
      ],
    });

    const screen = render(<WildCardFocusDetails />);
    const loading = screen.getByText(/Carregando/i);
    expect(loading).toBeDefined();

    await waitFor(() => expect(ManagerMockInstance.getSuppliersIndicators).toHaveBeenCalled());

    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
    expect(screen.getByText('Semana')).toBeDefined();
    expect(screen.getByText('Mês')).toBeDefined();

    expect(screen.getByText('Clientes FOCO')).toBeDefined();
    expect(screen.getByText('100')).toBeDefined();

    expect(screen.getByText('Clientes CORINGA')).toBeDefined();
    expect(screen.getByText('200')).toBeDefined();

    expect(screen.getByText('Acumulado')).toBeDefined();
    expect(screen.getByText('R$ 30,00')).toBeDefined();
  });
});
