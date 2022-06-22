import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import IncentiveIndicators from '../views/IncentiveIndicators';
import IncentiveIndicatorsManagerMock from '../services/IncentiveIndicatorsManager';

jest.mock('features/incentives/hooks/useSelectedIncentive', () => {
  return {
    useSelectedIncentive: () => ({
      selectedIncentive: {
        id: '2740',
      },
    }),
  };
});
jest.mock('../services/IncentiveIndicatorsManager');

const MOCK_RESPONSE_MANAGER = [
  {
    measure: 'Venda',
    criterion: 'Maior valor acima do objetivo',
  },
];

describe('Tests MyComponent', () => {
  let managerInstance;
  beforeAll(() => {
    managerInstance = IncentiveIndicatorsManagerMock.mock.instances[0];
    managerInstance.getIncentiveIndicators = jest.fn();
  });
  it('should render loading, and then Medida/Critério', async () => {
    managerInstance.getIncentiveIndicators.mockResolvedValueOnce(MOCK_RESPONSE_MANAGER);
    const screen = render(<IncentiveIndicators />);
    const loading = screen.queryByTestId('feedback-spinner');

    expect(loading).toBeDefined();

    await waitFor(() => expect(managerInstance.getIncentiveIndicators).toHaveBeenCalled());
    expect(screen.queryByTestId('feedback-spinner')).toBeNull();

    expect(screen.queryByText('Medida')).not.toBeNull();
    expect(screen.queryByText('Venda')).not.toBeNull();

    expect(screen.queryByText('Critério')).not.toBeNull();
    expect(screen.queryByText('Maior valor acima do objetivo')).not.toBeNull();
  });

  it('should render Error feedback component', async () => {
    managerInstance.getIncentiveIndicators.mockImplementationOnce(() => {
      throw new Error('');
    });

    const screen = render(<IncentiveIndicators />);
    const loading = screen.queryByTestId('feedback-spinner');

    expect(loading).toBeDefined();

    await waitFor(() => expect(managerInstance.getIncentiveIndicators).toHaveBeenCalled());
    expect(screen.queryByText(/Erro inesperado/)).not.toBeNull();
  });
  it('should render Empty feedback component', async () => {
    managerInstance.getIncentiveIndicators.mockResolvedValueOnce([]);

    const screen = render(<IncentiveIndicators />);
    const loading = screen.queryByTestId('feedback-spinner');

    expect(loading).toBeDefined();

    await waitFor(() => expect(managerInstance.getIncentiveIndicators).toHaveBeenCalled());
    expect(screen.queryByTestId('feedback-empty')).not.toBeNull();
  });
});
