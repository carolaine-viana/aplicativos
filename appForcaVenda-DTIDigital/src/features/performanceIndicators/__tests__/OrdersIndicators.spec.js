import React from 'react';
import expect from 'expect';
import '@shared/utils/mock-react-native-third-lib';
import { render } from '@shared/utils/test-utils';
import OrdersIndicators from '../views/OrdersIndicators';

// TODO: TESTAR VALORES QUANDO INTEGRAR
describe('Testes on OrdersIndicators', () => {
  it('should render card title', () => {
    const screen = render(<OrdersIndicators data={MOCK_DATA} />);

    expect(screen.queryByText('Pedidos')).not.toBeNull();
  });
  it('should render card tabs Semana & Mês', () => {
    const screen = render(<OrdersIndicators data={MOCK_DATA} />);

    expect(screen.queryByText('Semana')).not.toBeNull();
    expect(screen.queryByText('Mês')).not.toBeNull();
  });

  it('should render data with proper keys', () => {
    const screen = render(<OrdersIndicators data={MOCK_DATA} />);

    expect(screen.queryByText('Objetivo')).not.toBeNull();
    expect(screen.queryByText('Realizado')).not.toBeNull();
    expect(screen.queryByText('Ticket médio')).not.toBeNull();
    expect(screen.queryByText('% de atingimento')).not.toBeNull();
  });
});

const MOCK_DATA = {
  month: {
    objetivo: 0,
    realizado: 0,
    ticketMedio: 0,
  },
  week: {
    objetivo: 0,
    realizado: 0,
    ticketMedio: 0,
  },
};
