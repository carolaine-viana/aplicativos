import expect from 'expect';
import APIBFFMock from '../../../shared/base/api/APIBFF';
import IncentivesBranchesRepository from '../services/IncentivesBranchesRepository';

jest.mock('../../../shared/base/api/APIBFF', () => {
  return class APIBFFMock {
    get = jest.fn();
  };
});

describe('Tests IncentivesBranchesRepository', () => {
  const MOCK_INCENTIVE_ID = '2845';
  let repository;

  beforeAll(() => {
    const apiBff = new APIBFFMock();
    repository = new IncentivesBranchesRepository();
    repository.apiBff.instance = apiBff;
  });

  describe('Tests fetchBranches', () => {
    it('should call APIBFF.get with the correct URL(with inacentive ID) to fetch branch details', async () => {
      await repository.fetchBranches(MOCK_INCENTIVE_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        `business-incentives/${MOCK_INCENTIVE_ID}/branches`
      );
    });
  });
});
