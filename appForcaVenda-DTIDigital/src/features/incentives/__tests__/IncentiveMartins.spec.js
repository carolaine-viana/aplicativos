import React from 'react';
import expect from 'expect';
import { render, fireEvent, waitFor } from '@shared/utils/test-utils';
import * as navigationHooks from '@react-navigation/native';
import IncentiveMartins from '../views/IncentiveMartins';
import * as incentivesHooks from 'features/incentives/hooks/useSelectedIncentive';
import { INCENTIVE_MARTINS_MOCK } from './_incentivesData.mock';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('features/incentives/hooks/useSelectedIncentive', () => {
  return {
    useSelectedIncentive: jest.fn(),
  };
});

describe('Tests IncentiveMartins', () => {
  const mockNavigateFunc = jest.fn();
  const mockSetSelectedIncentiveFunc = jest.fn();

  beforeAll(() => {
    navigationHooks.useNavigation.mockReturnValue({
      navigate: mockNavigateFunc,
    });
    incentivesHooks.useSelectedIncentive.mockReturnValue({
      setSelectedIncentive: mockSetSelectedIncentiveFunc,
    });
  });

  it('should render search incentive martins info ', () => {
    const screen = render(<IncentiveMartins incentive={INCENTIVE_MARTINS_MOCK} />);
    expect(screen.queryByText(/1234/i)).toBeDefined();
    expect(screen.queryByText(/Icentive Name/i)).toBeDefined();
    expect(screen.queryByText(/Target group/i)).toBeDefined();
  });

  it('should navigate to details when click on "Visulizar"', async () => {
    const screen = render(<IncentiveMartins incentive={INCENTIVE_MARTINS_MOCK} />);

    const detailsButton = screen.queryByTestId('view-details');

    await waitFor(() => {
      fireEvent.press(detailsButton);
    });

    expect(mockSetSelectedIncentiveFunc).toBeCalledWith(INCENTIVE_MARTINS_MOCK);

    expect(mockNavigateFunc).toBeCalled();
    const mockNavigateFuncCallFirstParam = mockNavigateFunc.mock.calls[0][0];
    const mockNavigateFuncCallSecondParam = mockNavigateFunc.mock.calls[0][1];

    expect(mockNavigateFuncCallFirstParam).toEqual('IncentivesMartinsTabs');
    expect(mockNavigateFuncCallSecondParam).toHaveProperty('screen', 'Detalhes');
    expect(mockNavigateFuncCallSecondParam).toHaveProperty('params');
  });
});
