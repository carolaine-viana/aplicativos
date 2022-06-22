import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import IncentivesPerformance from '../views/IncentivesPerformance';
import IncentiveManager from '../services/IncentiveManager';
import * as incentiveHooks from '../hooks/useSelectedIncentive';
import { afterAll } from 'jest-circus';

jest.mock('../hooks/useSelectedIncentive');

jest.mock('@react-navigation/native', () => {
  return {
    useIsFocused: () => true,
  };
});

jest.mock('../services/IncentiveManager');
jest.mock('styled-components', () => {
  return {
    useTheme: jest.fn().mockReturnValue({
      palette: jest.fn(),
    }),
  };
});

const MOCK_INCENTIVES_INDICATORS = [
  {
    id: '2875',
    indicatorName: 'FIRST INDICATOR',
    indicatorType: 'INTEGER',
    indicatorForecast: 2782,
    indicatorResult: 1648,
    indicatorGap: 648,
    classification: 3,
    indicatorPercentage: 60,
    indicatorFulfillment: 'COMPLETE',
  },
  {
    id: '2266',
    indicatorName: 'SECOND INDICATOR',
    indicatorType: 'INTEGER',
    indicatorForecast: 2782,
    indicatorResult: 1648,
    indicatorGap: 648,
    classification: 3,
    indicatorPercentage: 60,
    indicatorFulfillment: 'COMPLETE',
  },
];

describe('Tests IncentivesPerformance', () => {
  let ManagerMockInstance;

  afterAll(() => {
    jest.resetAllMocks();
  });
  beforeAll(() => {
    ManagerMockInstance = IncentiveManager.mock.instances[0];

    ManagerMockInstance.getIncentivesPerformanceIndicators = jest.fn().mockImplementation((id) => {
      return MOCK_INCENTIVES_INDICATORS.filter((indicator) => indicator.id === id);
    });
  });

  it('should render "FIRST INDICATOR"', async () => {
    incentiveHooks.useSelectedIncentive = () => ({
      selectedIncentive: { id: '2875' },
      setSelectedIncentive: jest.fn(),
    });
    ManagerMockInstance.getIncentivesPerformanceIndicators.mockImplementation((id) => {
      return MOCK_INCENTIVES_INDICATORS.filter((indicator) => indicator.id === id);
    });

    const screen = render(<IncentivesPerformance />);

    expect(screen.getByText(/Carregando/i)).toBeDefined();

    await waitFor(() =>
      expect(ManagerMockInstance.getIncentivesPerformanceIndicators).toHaveBeenCalledWith('2875')
    );

    expect(screen.queryByText(/Carregando/i)).toBeNull();
    expect(screen.getByText(/FIRST INDICATOR/i)).toBeDefined();
  });

  it(`should render "SECOND INDICATOR" and NOT "FIRST INDICATOR"`, async () => {
    incentiveHooks.useSelectedIncentive = () => ({
      selectedIncentive: { id: '2266' },
      setSelectedIncentive: jest.fn(),
    });

    const screen = render(<IncentivesPerformance />);

    expect(screen.getByText(/Carregando/i)).toBeDefined();

    await waitFor(() =>
      expect(ManagerMockInstance.getIncentivesPerformanceIndicators).toHaveBeenCalledWith('2266')
    );

    expect(screen.queryByText(/Carregando/i)).toBeNull();

    expect(screen.getByText(/SECOND INDICATOR/i)).toBeDefined();
  });
});
