import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import IncentivesChannels from '../views/IncentivesChannels';
import IncentivesChannelsManager from '../services/IncentivesChannelsManager';

jest.mock('features/incentives/hooks/useSelectedIncentive', () => {
  return {
    useSelectedIncentive: () => ({
      selectedIncentive: { id: '2845' },
      setSelectedIncentive: jest.fn(),
    }),
  };
});

jest.mock('../services/IncentivesChannelsManager');
jest.mock('@react-native-community/netinfo', () => {
  return {
    useNetInfo: () => ({ isConnected: true }),
  };
});

const MOCK_SELECTED_INCENTIVE_ID = '2845';

const mockManagerData = [
  {
    name: 'Exceto eFacil',
  },
  {
    name: 'Vendedor CLT',
  },
];

describe('Tests IncentivesChannels', () => {
  let ManagerMockInstance;
  beforeAll(() => {
    ManagerMockInstance = IncentivesChannelsManager.mock.instances[0];
    ManagerMockInstance.getChannels = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render list of channels returned from API', async () => {
    ManagerMockInstance.getChannels.mockImplementationOnce(() => {
      return mockManagerData;
    });
    const screen = render(<IncentivesChannels />);
    const loading = screen.queryByTestId('feedback-spinner');

    expect(loading).toBeDefined();
    await waitFor(() =>
      expect(ManagerMockInstance.getChannels).toHaveBeenCalledWith(MOCK_SELECTED_INCENTIVE_ID)
    );
    expect(screen.getByText(/Exceto eFacil/i)).toBeDefined();
    expect(screen.getByText(/Vendedor CLT/i)).toBeDefined();
  });

  it('should render error feedback', async () => {
    ManagerMockInstance.getChannels.mockImplementationOnce(() => {
      throw new Error('');
    });

    const screen = render(<IncentivesChannels />);
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();
    await waitFor(() =>
      expect(ManagerMockInstance.getChannels).toHaveBeenCalledWith(MOCK_SELECTED_INCENTIVE_ID)
    );
    expect(screen.getByText('Erro inesperado.')).toBeDefined();
  });
});
