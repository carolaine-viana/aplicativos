import React from 'react';
import { render } from '@shared/utils/test-utils';
import expect from 'expect';
import RcaIndicators from '../views/RcaIndicators';
import * as hooks from '../../../shared/hooks/useRoleInfo';

jest.mock('../../../shared/components/CustomStatusBar/CustomStatusBar', () => {
  const { View } = require('react-native');
  return () => <View testID="CustomStatusBar" />;
});

jest.mock('../../../features/performanceIndicators', () => {
  const { View } = require('react-native');
  return {
    CustomersIndicators: () => <View testID="CustomersIndicators" />,
    SalesIndicators: () => <View testID="SalesIndicators" />,
  };
});

jest.mock('../views/SalesIndicators', () => {
  const { View } = require('react-native');
  return () => <View testID="SalesIndicators" />;
});

jest.mock('../services/PerformanceManager', () => {
  return class MockManager {
    getIndicators = jest.fn();
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

describe('Tests RcaIndicators', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('it should render CustomersIndicators & SalesIndicators', () => {
    const { getByTestId } = render(<RcaIndicators />);
    expect(getByTestId('CustomersIndicators')).toBeDefined();
    expect(getByTestId('SalesIndicators')).toBeDefined();
  });

  // TODO: INCLUIR ESTE TESTE QUANDO TIVER FOCO E CORINGA(PROX SPRINT)
  it.skip('it should render card Foco e Coringa for RCA user', () => {
    const spyUseRoleInfo = jest.spyOn(hooks, 'useRoleInfo');
    spyUseRoleInfo.mockImplementation(() => ({ roleInfo: { isRCA: true } }));
    const { getByText } = render(<RcaIndicators />);
    expect(getByText('Foco e Coringa')).toBeDefined();
  });

  it('it should not render card Foco e Coringa for GT user', () => {
    const spyUseRoleInfo = jest.spyOn(hooks, 'useRoleInfo');
    spyUseRoleInfo.mockImplementation(() => ({ roleInfo: { isRCA: false, isGT: true } }));
    const screen = render(<RcaIndicators />);
    let error;
    try {
      const card = screen.getByText('Foco e Coringa');
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
  });
});
