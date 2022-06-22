import React from 'react';
import jestExpect from 'expect';
import { render } from '@shared/utils/test-utils';
import RCAProfile from '../views/RCAProfile';

jest.mock('../../../shared/components/CustomStatusBar/CustomStatusBar', () => {
  const { View } = require('react-native');
  return () => <View testID="CustomStatusBar" />;
});

jest.mock('features/performanceIndicators/views/RcaIndicators', () => {
  return () => <></>;
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

describe('RCAProfile', () => {
  const mockRouteProps = {
    params: {
      rca: {
        id: 1234,
        name: 'Fulano',
        territories: [
          {
            id: '000',
            name: 'Belo Horizonte',
          },
        ],
      },
    },
  };

  it('should render RCACard with rca name', () => {
    const screen = render(<RCAProfile route={mockRouteProps} />);
    jestExpect(screen.getByText('Fulano')).toBeDefined();
  });

  it('should render RCACard with territory', () => {
    const screen = render(<RCAProfile route={mockRouteProps} />);
    jestExpect(screen.getByText('Belo Horizonte')).toBeDefined();
  });

  it('should render CustomStatusBar', () => {
    const { getByTestId } = render(<RCAProfile route={mockRouteProps} />);
    jestExpect(getByTestId('CustomStatusBar')).toBeDefined();
  });
});
