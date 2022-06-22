import React from 'react';
import expect from 'expect';
import '@shared/utils/mock-react-native-third-lib';
import { render } from '@shared/utils/test-utils';
import CustomersIndicators from '../views/CustomersIndicators';

// TODO: TESTAR VALORES QUANDO INTEGRAR
describe('Testes on CustomersIndicators', () => {
  it('should render card title', () => {
    const screen = render(<CustomersIndicators data={MOCK_DATA} />);

    expect(screen.queryByText('Clientes')).not.toBeNull();
  });

  it('should render card tabs Semana & Mês', () => {
    const screen = render(<CustomersIndicators data={MOCK_DATA} />);

    expect(screen.queryByText('Semana')).not.toBeNull();
    expect(screen.queryByText('Mês')).not.toBeNull();
  });

  it('should render data with proper keys', () => {
    const screen = render(<CustomersIndicators data={MOCK_DATA} />);

    expect(screen.queryByText('Objetivo')).not.toBeNull();
    expect(screen.queryByText('Realizado')).not.toBeNull();
    expect(screen.queryByText('GAP de clientes')).not.toBeNull();
    expect(screen.queryByText('% de atingimento')).not.toBeNull();
  });
});

const MOCK_DATA = {
  month: {
    customersForecast: 0,
    customersResult: 0,
    customersGap: 0,
    customersPercentage: 0,
    customersFulfillment: 'low',
  },
  week: {
    customersForecast: 0,
    customersResult: 0,
    customersGap: 0,
    customersPercentage: 0,
    customersFulfillment: 'low',
  },
};
