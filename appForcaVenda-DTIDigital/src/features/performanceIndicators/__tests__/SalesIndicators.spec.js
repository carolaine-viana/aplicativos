import React from 'react';
import expect from 'expect';
import '@shared/utils/mock-react-native-third-lib';
import { render } from '@shared/utils/test-utils';
import SalesIndicators from '../views/SalesIndicators';

// TODO: TESTAR VALORES QUANDO INTEGRAR
describe('Testes on SalesIndicators', () => {
  it('should render card title', () => {
    const screen = render(<SalesIndicators data={MOCK_DATA} />);

    expect(screen.queryByText('Vendas')).not.toBeNull();
  });

  it('should render card tabs Semana & Mês', () => {
    const screen = render(<SalesIndicators data={MOCK_DATA} />);

    expect(screen.queryByText('Semana')).not.toBeNull();
    expect(screen.queryByText('Mês')).not.toBeNull();
  });

  it('should render data with proper keys', () => {
    const screen = render(<SalesIndicators data={MOCK_DATA} />);

    expect(screen.queryAllByText('Objetivo')).toHaveLength(2);
    expect(screen.queryAllByText('Realizado')).toHaveLength(2);
    expect(screen.queryByText('GAP de vendas')).not.toBeNull();
    expect(screen.queryByText('% de atingimento')).not.toBeNull();
  });
  it('should render own brand keys', () => {
    const screen = render(<SalesIndicators data={MOCK_DATA} />);

    expect(screen.queryByText('Marcas próprias')).not.toBeNull();
  });
});

const MOCK_DATA = {
  month: {
    objetivo: 0,
    realizado: 0,
    gap: 0,
  },
  week: {
    objetivo: 0,
    realizado: 0,
    gap: 0,
  },
};
