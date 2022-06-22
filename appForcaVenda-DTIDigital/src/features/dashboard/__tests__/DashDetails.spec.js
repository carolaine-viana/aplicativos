import React from 'react';
import jestExpect from 'expect';
import { render } from '@shared/utils/test-utils';
import DashDetail from '../views/DashDetail';

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

jest.mock('../../../shared/hooks', () => {
  return {
    useRoleInfo: () => ({
      roleInfo: {
        isRCA: false,
        isGT: true,
        role: 'GT',
      },
    }),
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

describe('Dash Details GT', () => {
  it('it should render ManagerIndicatorsDetail', () => {
    const { getByText } = render(<DashDetail route={{ params: { indicators: {} } }} />);
    jestExpect(getByText('Meta de Vendas')).toBeDefined();
  });
});
