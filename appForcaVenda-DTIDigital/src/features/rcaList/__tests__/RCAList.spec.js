import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import RCAsList from '../views/RCAsList';
import RCAManager from '../services/RCAListManager';

jest.mock('@react-navigation/native', () => ({
  useIsFocused: jest.fn().mockReturnValue(true),
  useNavigation: jest.fn(),
}));

jest.mock('../services/RCAListManager');

jest.mock('../../../shared/components/CustomStatusBar/CustomStatusBar', () => {
  const { View } = require('react-native');
  return () => <View testID="CustomStatusBar" />;
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

const mockManagerData = [
  {
    id: '1',
    name: 'RCA 1',
    territories: [],
  },
  {
    id: '2',
    name: 'RCA 2',
    territories: [],
  },
];

describe('RCAsList', () => {
  let ManagerMockInstance;
  beforeAll(() => {
    ManagerMockInstance = RCAManager.mock.instances[0];
    ManagerMockInstance.getRcasGt = jest.fn();
  });

  it('should renders rca list', async () => {
    ManagerMockInstance.getRcasGt.mockImplementationOnce(() => {
      return mockManagerData;
    });
    const screen = render(<RCAsList />);
    const loading = screen.queryByTestId('feedback-spinner');

    expect(loading).toBeDefined();
    await waitFor(() => expect(ManagerMockInstance.getRcasGt).toHaveBeenCalled());
    expect(screen.queryByText(/RCA 1/i)).not.toBeNull();
    expect(screen.queryByText(/RCA 2/i)).not.toBeNull();
    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
  });

  it('should renders empty feedback', async () => {
    ManagerMockInstance.getRcasGt.mockImplementationOnce(() => {
      return [];
    });
    const screen = render(<RCAsList />);
    const loading = screen.queryByTestId('feedback-spinner');

    expect(loading).toBeDefined();
    await waitFor(() => expect(ManagerMockInstance.getRcasGt).toHaveBeenCalled());

    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
    expect(screen.queryByTestId('feedback-empty')).not.toBeNull();
  });
  it('should renders error feedback', async () => {
    ManagerMockInstance.getRcasGt.mockImplementationOnce(() => {
      throw new Error('');
    });
    const screen = render(<RCAsList />);
    const loading = screen.queryByTestId('feedback-spinner');

    expect(loading).toBeDefined();
    await waitFor(() => expect(ManagerMockInstance.getRcasGt).toHaveBeenCalled());
    expect(screen.queryByText(/Erro inesperado/i)).not.toBeNull();
  });
});
