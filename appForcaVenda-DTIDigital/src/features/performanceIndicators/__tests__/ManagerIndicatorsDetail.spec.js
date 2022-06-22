import React from 'react';
import jestExpect from 'expect';
import { render } from '@shared/utils/test-utils';
import ManagerIndicatorsDetail from '../views/ManagerIndicatorsDetails';

jest.mock('../../../shared/components/CustomStatusBar/CustomStatusBar', () => {
  const { View } = require('react-native');
  return () => <View testID="CustomStatusBar" />;
});

jest.mock('../../../shared/base/BaseDeviceFeatures', () => {
  return {
    isIOS: true,
    dimensions: {
      height: 20,
    },
  };
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

describe('Tests ManagerIndicatorsDetail', () => {
  const mockIndicatorsProps = {
    teamSalesResult: 50,
    teamPrivateBrandsSalesPercentage: 50,
    teamSalesForecast: 100,
    teamSalesResult: 30,
    teamCustomersForecast: 200,
    teamCustomersResult: 20,
  };
  it('it should render "Total vendas equipe"', () => {
    const screen = render(<ManagerIndicatorsDetail indicators={mockIndicatorsProps} />);
    jestExpect(screen.getByText('Total vendas equipe')).toBeDefined();
  });
  it('it should render "Perc. marca própria"', () => {
    const screen = render(<ManagerIndicatorsDetail indicators={mockIndicatorsProps} />);
    jestExpect(screen.getByText('Perc. marca própria')).toBeDefined();
  });

  it('it should render "Meta de Vendas"', () => {
    const screen = render(<ManagerIndicatorsDetail indicators={mockIndicatorsProps} />);
    jestExpect(screen.getByText('Meta de Vendas')).toBeDefined();
  });

  it('it should render "Clientes Positivados"', () => {
    const screen = render(<ManagerIndicatorsDetail indicators={mockIndicatorsProps} />);
    jestExpect(screen.getByText('Clientes Positivados')).toBeDefined();
  });
});
