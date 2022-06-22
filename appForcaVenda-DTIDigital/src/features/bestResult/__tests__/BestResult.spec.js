import React from 'react';
import expect from 'expect';
import '@shared/utils/mock-react-native-third-lib';
import { render, waitFor } from '../../../shared/utils/test-utils';
import BestResult from '../views/BestResult';
import BestResultManagerMock from '../services/BestResultManager';

jest.mock('../services/BestResultManager');

describe('Tests BestResult', () => {
  let ManagerMockInstance;
  let MOCK_BEST_RESULT = {
    bestResult: 50,
    month: '01/2022',
  };

  let MOCK_BEST_RESULT_GT = {
    bestResult: 50,
  };

  beforeAll(() => {
    ManagerMockInstance = BestResultManagerMock.mock.instances[0];
    ManagerMockInstance.getBestResult = jest.fn();
  });

  it('should render spinner feedback and then a best result for shown', async () => {
    ManagerMockInstance.getBestResult.mockResolvedValueOnce(MOCK_BEST_RESULT);

    const screen = render(<BestResult modalVisible closeModal={() => {}} />);
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();

    await waitFor(() => expect(ManagerMockInstance.getBestResult).toHaveBeenCalled());

    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
    expect(screen.getByText(/50/i)).toBeDefined();
  });

  it('should render spinner feedback and then a best result for shown in GT Profile', async () => {
    ManagerMockInstance.getBestResult.mockResolvedValueOnce(MOCK_BEST_RESULT_GT);

    const screen = render(<BestResult modalVisible closeModal={() => {}} />);
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();

    await waitFor(() => expect(ManagerMockInstance.getBestResult).toHaveBeenCalled());

    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
    expect(screen.getByText(/50/i)).toBeDefined();
  });

  it('should render spinner feedback and then error feedback', async () => {
    ManagerMockInstance.getBestResult.mockImplementationOnce(() => {
      throw new Error('');
    });
    const screen = render(<BestResult modalVisible closeModal={() => {}} />);
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();

    await waitFor(() => expect(ManagerMockInstance.getBestResult).toHaveBeenCalled());

    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
    expect(screen.getByText(/Ops!/i)).toBeDefined();
    expect(screen.getByText(/Erro inesperado/i)).toBeDefined();
  });
});
