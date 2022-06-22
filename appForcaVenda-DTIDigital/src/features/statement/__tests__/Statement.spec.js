import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import Statement from '../views/Statement';
import StatementManagerMock from '../services/StatementManager';
import { statementMockData } from './mocks/statement.mock';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

jest.mock('@shared/components/MonthSelect/MonthSelect', () => {
  const { View } = require('react-native');
  return () => <View testID="statementModal" />;
});

jest.mock('../services/StatementManager');

describe.skip('Tests Statement', () => {
  let ManagerMockInstance;
  beforeAll(() => {
    ManagerMockInstance = StatementManagerMock.mock.instances[0];
    ManagerMockInstance.getStatementData = jest.fn();
  });

  it('should render a button to choose a month and title "Mês atual"', async () => {
    ManagerMockInstance.getStatementData.mockResolvedValueOnce(statementMockData);
    const screen = render(<Statement />);
    const loading = screen.queryByTestId('feedback-spinner');
    expect(loading).toBeDefined();

    await waitFor(() => expect(ManagerMockInstance.getStatementData).toHaveBeenCalled());
    expect(screen.queryByTestId('feedback-spinner')).toBeNull();
    expect(screen.queryByText('Escolha um mês')).not.toBeNull();
  });

  describe('Tests statement details content', () => {
    it('should render  statement values for current month', async () => {
      ManagerMockInstance.getStatementData.mockResolvedValueOnce(statementMockData);
      const screen = render(<Statement />);
      const loading = screen.queryByTestId('feedback-spinner');
      expect(loading).toBeDefined();

      await waitFor(() => expect(ManagerMockInstance.getStatementData).toHaveBeenCalled());
      expect(screen.queryByTestId('feedback-spinner')).toBeNull();

      expect(screen.queryByText('Mês atual')).not.toBeNull();
      expect(screen.queryByText('Disponível')).not.toBeNull();
      expect(screen.queryByText(/848,20/i)).not.toBeNull();

      expect(screen.queryByText('Total Créditos')).not.toBeNull();
      expect(screen.queryByText(/1.019,83/i)).not.toBeNull();

      expect(screen.queryByText('Total Débitos')).not.toBeNull();
      expect(screen.queryByText(/1.501,75/i)).not.toBeNull();
    });
  });
});
