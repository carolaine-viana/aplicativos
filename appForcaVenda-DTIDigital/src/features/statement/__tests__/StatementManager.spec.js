import expect from 'expect';
import StatementRepositoryMock from '../services/StatementRepository';
import StatementManager from '../services/StatementManager';
import { mountMonthParam } from 'shared/utils';
import { getUserLogin } from 'shared/utils/asyncStorage';
import { transformEarningsResponses } from '../statementUtils';

jest.mock('../statementUtils', () => {
  return {
    transformEarningsResponses: jest.fn(),
  };
});

jest.mock('shared/utils', () => {
  return { mountMonthParam: jest.fn() };
});

jest.mock('shared/utils/asyncStorage', () => {
  return {
    getUserLogin: jest.fn(),
  };
});

jest.mock('../services/StatementRepository', () => {
  return class MockRepo {
    fetchEarningsSummary = jest.fn();
    fetchEarningsStatement = jest.fn();
  };
});

const mockResponseSummaryData = {
  data: {
    earnings_summary: [
      {
        id: '101',
        month: '1',
        total_debts: '200',
        total_credits: '300',
        opening_balance: '400',
        final_balance: '500',
        taxes: '600',
        available_balance: '0',
      },
    ],
  },
};

const mockResponseStatementData = {
  data: {
    earnings_statement: [
      {
        entry_date: '2021-08-10',
        entry_day: '10',
        entry_description: 'Alguma desc',
        entry_amount: '1000,00',
      },
    ],
  },
};

describe('Testes StatementManager', () => {
  let manager;
  let RCA_ID_MOCK = '44184';
  beforeAll(() => {
    manager = new StatementManager();
    manager.handleError = jest.fn();
    manager.repo = new StatementRepositoryMock();
  });

  describe('Testes  getStatementData', () => {
    it('should call repo.fetchEarningsSummary and repo.fetchEarningsStatement with correct params', async () => {
      manager.repo.fetchEarningsSummary.mockResolvedValueOnce(mockResponseSummaryData);
      manager.repo.fetchEarningsStatement.mockResolvedValueOnce(mockResponseStatementData);
      getUserLogin.mockResolvedValueOnce(RCA_ID_MOCK);
      mountMonthParam.mockReturnValueOnce('202109');
      await manager.getStatementData('202109');
      expect(manager.repo.fetchEarningsSummary).toHaveBeenCalledWith(RCA_ID_MOCK, 'month=202109');
      expect(manager.repo.fetchEarningsStatement).toHaveBeenCalledWith(RCA_ID_MOCK, 'month=202109');
      expect(transformEarningsResponses).toHaveBeenCalledWith([
        mockResponseSummaryData.data,
        mockResponseStatementData.data,
      ]);
    });
    it('should catch error with manager.handleError', async () => {
      manager.repo.fetchEarningsSummary.mockImplementationOnce(() => {
        throw new Error('');
      });

      await manager.getStatementData();
      expect(manager.handleError).toHaveBeenCalledTimes(1);
    });
  });
});
