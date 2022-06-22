import expect from 'expect';
import * as branchesUtils from '../branchesUtils';
import IncentivesBranchesRepositoryMock from '../services/IncentivesBranchesRepository';
import IncentivesBranchesManager from '../services/IncentivesBranchesManager';

jest.mock('../branchesUtils', () => {
  return {
    transformBranchesResponse: jest.fn(),
  };
});

jest.mock('../services/IncentivesBranchesRepository', () => {
  return class MockRepo {
    fetchBranches = jest.fn();
  };
});

const mockRepoResponce = {
  data: {
    business_incentive_branches: [
      {
        name: 'Incentive One',
      },
      {
        name: 'Incentive Two',
      },
    ],
  },
};

describe('Tests IncentivesBranchesManager', () => {
  const MOCK_INCENTIVE_ID = '2845';
  let manager;

  beforeAll(() => {
    manager = new IncentivesBranchesManager();
    manager.repo = new IncentivesBranchesRepositoryMock();
    manager.handleError = jest.fn();
  });

  describe('Tests getBranches', () => {
    it('should call repo.fetchBranches and transform data', async () => {
      manager.repo.fetchBranches.mockReturnValueOnce(mockRepoResponce);
      await manager.getBranches(MOCK_INCENTIVE_ID);
      expect(manager.repo.fetchBranches).toHaveBeenCalledWith(MOCK_INCENTIVE_ID);
      expect(branchesUtils.transformBranchesResponse).toHaveBeenCalledWith(mockRepoResponce.data);
    });
    it('should call manager.handleError when repo throws an error', async () => {
      manager.repo.fetchBranches.mockImplementationOnce(() => {
        throw new Error('');
      });
      await manager.getBranches(MOCK_INCENTIVE_ID);
      expect(manager.handleError).toHaveBeenCalled();
    });
    it('should call manager.handleError when transformBranchesResponse throws an error', async () => {
      branchesUtils.transformBranchesResponse.mockImplementationOnce(() => {
        throw new Error('');
      });
      await manager.getBranches(MOCK_INCENTIVE_ID);
      expect(manager.handleError).toHaveBeenCalled();
    });
  });
});
