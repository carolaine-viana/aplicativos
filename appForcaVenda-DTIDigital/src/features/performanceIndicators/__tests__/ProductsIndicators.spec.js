import React from 'react';
import expect from 'expect';
import '@shared/utils/mock-react-native-third-lib';
import { render } from '@shared/utils/test-utils';
import ProductsIndicators from '../views/ProductsIndicators';

// TODO: TESTAR VALORES QUANDO INTEGRAR
describe('Testes on ProductsIndicators', () => {
  it('should render card title', () => {
    const screen = render(<ProductsIndicators data={MOCK_DATA} />);

    expect(screen.queryByText('Produtos')).not.toBeNull();
  });

  it('should render card tabs Semana & Mês', () => {
    const screen = render(<ProductsIndicators data={MOCK_DATA} />);

    expect(screen.queryByText('Semana')).not.toBeNull();
    expect(screen.queryByText('Mês')).not.toBeNull();
  });

  it('should render data with proper keys', () => {
    const screen = render(<ProductsIndicators data={MOCK_DATA} />);
    expect(screen.queryByText('Total de SKU')).not.toBeNull();
    expect(screen.queryByText(/Media de SKU/i)).not.toBeNull();
    expect(screen.queryByText(/produtos similar/i)).not.toBeNull();
  });
});

const MOCK_DATA = {
  month: {
    totalSKU: 0,
    mediaSKU: 0,
    grupoSimilar: 0,
  },
  week: {
    totalSKU: 0,
    mediaSKU: 0,
    grupoSimilar: 0,
  },
};
