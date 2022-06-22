import expect from 'expect';
import APIBFFMOCK from '../../../shared/base/api/APIBFF';
import IncentiveMixRepository from '../services/IncentiveMixRepository';

jest.mock('../../../shared/base/api/APIBFF', () => {
  return class APIBFFMOCK {
    get = jest.fn();
  };
});

describe('Tests IncentiveMixRepository', () => {
  describe('Tests fetchMix', () => {
    const MOCK_INCENTIVE_ID = '2740';
    let apiBffMock = new APIBFFMOCK();
    let repository;

    beforeAll(() => {
      repository = new IncentiveMixRepository();
      repository.apiBff.instance = apiBffMock;
    });

    it('should call api with correct url and incentiveId', async () => {
      await repository.fetchMix(MOCK_INCENTIVE_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('business-incentives/');
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(MOCK_INCENTIVE_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('products');
    });
  });
});
