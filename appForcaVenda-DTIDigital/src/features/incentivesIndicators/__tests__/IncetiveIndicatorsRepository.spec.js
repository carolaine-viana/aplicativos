import '../../../shared/utils/mock-react-native-third-lib';
import expect from 'expect';
import MOCKAPIBFF from '../../../shared/base/api/APIBFF';
import IncentiveIndicatorsRepository from '../services/IncentiveIndicatorsRepository';

jest.mock('../../../shared/base/api/APIBFF');

describe('Tests IncentiveIndicatorsRepository', () => {
  const INCENTIVE_ID = '2875';
  let repository;

  beforeAll(() => {
    const mockApiBff = new MOCKAPIBFF();
    repository = new IncentiveIndicatorsRepository();
    repository.apiBff.instance = mockApiBff;
    repository.apiBff.instance.get = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Tests fechIncentiveIndicators', () => {
    it('should call APIBFF get with userId and "incentiveId"', async () => {
      repository.fechIncentiveIndicators(INCENTIVE_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        `/business-incentives/${INCENTIVE_ID}/indicators`
      );
    });
  });
});
