import React from 'react';
import expect from 'expect';
import { render } from '@shared/utils/test-utils';
import PerformanceIndicators from '../views/PerformanceIndicators';
import * as hooks from '../../../shared/hooks';

jest.mock('../../../shared/hooks', () => {
  return {
    useRoleInfo: jest.fn(),
  };
});

jest.mock('../views/RcaIndicators', () => {
  const { View } = require('react-native');
  return () => <View testID="RcaIndicators" />;
});

jest.mock('../views/SalesForecast', () => {
  const { View } = require('react-native');
  return () => <View testID="SalesForecast" />;
});

jest.mock('../views/ManagerIndicators', () => {
  const { View } = require('react-native');
  return () => <View testID="ManagerIndicators" />;
});

describe('Tests PerformanceIndicators', () => {
  let roleInfoMock;
  beforeEach(() => {
    roleInfoMock = {
      isGT: false,
      isRCA: false,
      isGV: false,
    };
  });
  it('should render only RcaIndicators when user is a RCA', () => {
    hooks.useRoleInfo.mockReturnValueOnce({ roleInfo: { ...roleInfoMock, isRCA: true } });
    const screen = render(<PerformanceIndicators />);
    expect(screen.getByTestId('RcaIndicators'));
  });
  it('should render only ManagerIndicators when user is a GT', () => {
    hooks.useRoleInfo.mockReturnValueOnce({ roleInfo: { ...roleInfoMock, isGT: true } });
    const screen = render(<PerformanceIndicators />);
    expect(screen.getByTestId('ManagerIndicators'));
  });
  it('should render ManagerIndicators and SalesForecast when user is a GV', () => {
    hooks.useRoleInfo.mockReturnValueOnce({ roleInfo: { ...roleInfoMock, isGV: true } });
    const screen = render(<PerformanceIndicators />);
    expect(screen.getByTestId('ManagerIndicators'));
    // expect(screen.getByTestId('SalesForecast')); TODO: DESCOMENTAR QUANDO SUBIR POSITIVAÇÕES PARA GV
  });
});
