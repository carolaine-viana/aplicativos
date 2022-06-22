import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import IncentivesBranches from '../views/IncentivesBranches';
import IncentivesBranchesManager from '../services/IncentivesBranchesManager';

jest.mock('features/incentives/hooks/useSelectedIncentive', () => {
  return {
    useSelectedIncentive: () => ({
      selectedIncentive: { id: '2845' },
      setSelectedIncentive: jest.fn(),
    }),
  };
});

jest.mock('../services/IncentivesBranchesManager');
jest.mock('@react-native-community/netinfo', () => {
  return {
    useNetInfo: () => ({ isConnected: true }),
  };
});

const MOCK_SELECTED_INCENTIVE_ID = '2845';

const mockManagerData = [
  {
    name: 'Branch One',
  },
  {
    name: 'Branch Two',
  },
];

describe('Tests IncentivesBranches', () => {
  let ManagerMockInstance;
  beforeAll(() => {
    ManagerMockInstance = IncentivesBranchesManager.mock.instances[0];
    ManagerMockInstance.getBranches = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render list of branches returned from API', async () => {
    ManagerMockInstance.getBranches.mockImplementationOnce(() => {
      return mockManagerData;
    });
    const screen = render(<IncentivesBranches />);
    const loading = screen.queryByTestId('feedback-spinner');

    expect(loading).toBeDefined();
    await waitFor(() =>
      expect(ManagerMockInstance.getBranches).toHaveBeenCalledWith(MOCK_SELECTED_INCENTIVE_ID)
    );
    expect(screen.getByText(/Branch One/i)).toBeDefined();
    expect(screen.getByText(/Branch Two/i)).toBeDefined();
  });

  it('should render error feedback', async () => {
    ManagerMockInstance.getBranches.mockImplementationOnce(() => {
      throw new Error('');
    });

    const screen = render(<IncentivesBranches />);
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();
    await waitFor(() =>
      expect(ManagerMockInstance.getBranches).toHaveBeenCalledWith(MOCK_SELECTED_INCENTIVE_ID)
    );
    expect(screen.getByText('Erro inesperado.')).toBeDefined();
  });
});
