import React from 'react';
import expect from 'expect';
import { render, fireEvent, waitFor } from '@shared/utils/test-utils';
import * as navigationHooks from '@react-navigation/native';
import IncentiveConsult from '../views/IncentiveConsult';
import * as incentivesHooks from 'features/incentives/hooks/useSelectedIncentive';
import { INCENTIVE_MOCK } from './_incentivesData.mock';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('features/incentives/hooks/useSelectedIncentive', () => {
  return {
    useSelectedIncentive: jest.fn(),
  };
});

describe('Tests IncentiveConsult', () => {
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

  it('should render search incentive info', () => {
    const screen = render(<IncentiveConsult incentive={INCENTIVE_MOCK} />);
    expect(screen.queryByText(/1234/i)).toBeDefined();
    expect(screen.queryByText(/Icentive Name/i)).toBeDefined();
    expect(screen.queryByText(/Target group/i)).toBeDefined();
    expect(screen.queryByText('/01/02/2022')).toBeDefined();
    expect(screen.queryByText('/03/02/2022')).toBeDefined();
    expect(screen.queryByText(/Incentive Mechanics/i)).toBeDefined();
  });

  it('should navigate to details when click on "Visulizar"', async () => {
    const screen = render(<IncentiveConsult incentive={INCENTIVE_MOCK} />);
    const detailsButton = screen.queryByTestId('view-details');
    await waitFor(() => {
      fireEvent.press(detailsButton);
    });

    expect(mockSetSelectedIncentiveFunc).toBeCalledWith(INCENTIVE_MOCK);

    expect(mockNavigateFunc).toBeCalled();
    const mockNavigateFuncCallFirstParam = mockNavigateFunc.mock.calls[0][0];
    const mockNavigateFuncCallSecondParam = mockNavigateFunc.mock.calls[0][1];

    expect(mockNavigateFuncCallFirstParam).toEqual('IncentiveDetailsTabs');
    expect(mockNavigateFuncCallSecondParam).toHaveProperty('screen', 'Detalhes');
  });
});
