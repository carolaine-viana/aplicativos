import React from 'react';
import expect from 'expect';
import '@shared/utils/jestCustomMatchers';
import { render, waitFor, fireEvent } from '@shared/utils/test-utils';
import IncentivesMartinsPerformance from '../views/IncentivesMartinsPerformance';
import IncentiveManagerMock from '../services/IncentiveManager';
import { mockTransformedMartinsIndicators } from './_incentivesData.mock';
import { afterAll } from 'jest-circus';

jest.mock('@shared/components/MonthSelect/MonthSelect', () => {
  const { View } = require('react-native');
  return () => <View testID="MonthSelect"></View>;
});

jest.mock('../services/IncentiveManager');

jest.mock('@react-navigation/native', () => {
  return {
    useIsFocused: () => true,
  };
});

jest.mock('../hooks/useSelectedIncentive', () => ({
  useSelectedIncentive: () => ({
    selectedIncentive: {
      id: '1234',
    },
  }),
}));

const INCENTIVE_ID = '1234';
describe('Tests on IncentivesMartinsPerformance Component ', () => {
  let ManagerIncentiveMockInstance;

  beforeAll(() => {
    ManagerIncentiveMockInstance = IncentiveManagerMock.mock.instances[0];
    ManagerIncentiveMockInstance.getMartinsPerformanceIndicators = jest.fn();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it(`should render month performance indicators when
   month tab is active`, async () => {
    ManagerIncentiveMockInstance.getMartinsPerformanceIndicators.mockResolvedValueOnce(
      mockTransformedMartinsIndicators
    );

    const screen = render(<IncentivesMartinsPerformance />);
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();

    await waitFor(() =>
      expect(ManagerIncentiveMockInstance.getMartinsPerformanceIndicators.mock.calls[0][0]).toBe(
        INCENTIVE_ID
      )
    );

    const monthTab = screen.getByText('Mês');
    await fireEvent.press(monthTab);

    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
    expect(monthTab.props.color).toBe('light');
    expect(screen.getByText(/Positivações/i)).toBeDefined();
    expect(screen.getByText(/523/i)).toBeDefined();
    expect(screen.getByText(/200/i)).toBeDefined();
    expect(screen.getByText(/648/i)).toBeDefined();
    expect(screen.getByText(/60.00%/i)).toBeDefined();
  });

  it(`should render weeks performance indicators when
  week tab is active`, async () => {
    ManagerIncentiveMockInstance.getMartinsPerformanceIndicators.mockResolvedValueOnce(
      mockTransformedMartinsIndicators
    );

    const screen = render(<IncentivesMartinsPerformance />);
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();

    await waitFor(() =>
      expect(ManagerIncentiveMockInstance.getMartinsPerformanceIndicators.mock.calls[0][0]).toBe(
        INCENTIVE_ID
      )
    );

    const weekTab = screen.getByText('Semana');
    await fireEvent.press(weekTab);

    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
    expect(weekTab.props.color).toBe('light');

    expect(screen.getByText(/300/i)).toBeDefined();
    expect(screen.getByText(/75.00%/i)).toBeDefined();
  });
});
