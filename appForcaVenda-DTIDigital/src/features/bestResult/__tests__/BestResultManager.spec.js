import expect from 'expect';
import { transformBestResultResponse, transformBestResultResponseGT } from '../bestResultUtils';
import * as asyncStorage from '../../../shared/utils/asyncStorage';
import BestResultRepository from '../services/BestResultRepository';
import BestResultManager from '../services/BestResultManager';

jest.mock('../bestResultUtils', () => {
  return { transformBestResultResponse: jest.fn(), transformBestResultResponseGT: jest.fn() };
});

jest.mock('../services/BestResultRepository', () => {
  return class MockBestResultRepository {
    fetchBestResult = jest.fn();
  };
});

jest.mock('shared/utils/asyncStorage', () => ({
  getUserLogin: jest.fn(),
  getUserRole: jest.fn(),
}));

const MOCK_BEST_RESULT_RESPONSE = {
  data: {
    performance_indicators_best_result: [
      {
        customers_best_result: 50,

      },
    ],
  },
};

const MOCK_BEST_RESULT_RESPONSE_GT = {
  data: {
    team_performance_indicators_best_result: [
      {
        team_customers_best_result: 50,

      },
    ],
  },
};
const MOCK_USER_LOGIN = '44184';
describe('Testes BestResultManager', () => {
  let manager;
  beforeAll(() => {
    manager = new BestResultManager();
    manager.repo = new BestResultRepository();
    manager.handleError = jest.fn();
  });
  it.skip('should call repo.fetchBestResult()', async () => {
    asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_USER_LOGIN);
    manager.repo.fetchBestResult.mockResolvedValueOnce(MOCK_BEST_RESULT_RESPONSE);
    await manager.getBestResult();
    expect(asyncStorage.getUserLogin).toHaveBeenCalled();
    expect(transformBestResultResponse).toHaveBeenCalled();
    expect(manager.repo.fetchBestResult).toHaveBeenCalled();
  });

  it.skip('should call repo.fetchBestResult() GT', async () => {
    asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_USER_LOGIN);
    manager.repo.fetchBestResult.mockResolvedValueOnce(MOCK_BEST_RESULT_RESPONSE_GT);
    await manager.getBestResult();
    expect(asyncStorage.getUserLogin).toHaveBeenCalled();
    expect(transformBestResultResponseGT).toBeCalledWith(MOCK_BEST_RESULT_RESPONSE_GT.data);
    expect(manager.repo.fetchBestResult).toHaveBeenCalled();
  });

  it('should catch error with manager.handleError', async () => {
    asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_USER_LOGIN);
    manager.repo.fetchBestResult.mockImplementationOnce(() => {
      throw new Error('');
    });
    await manager.getBestResult();
    expect(manager.handleError).toHaveBeenCalled();
  });
});
