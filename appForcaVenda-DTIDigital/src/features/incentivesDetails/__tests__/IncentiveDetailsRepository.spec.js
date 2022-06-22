import '../../../shared/utils/mock-react-native-third-lib';
import expect from 'expect';
import MOCKAPIBFF from '../../../shared/base/api/APIBFF';
import IncentiveDetailsRepository from '../services/IncentiveDetailsRepository';

jest.mock('../../../shared/base/api/APIBFF');

describe('Tests IncentiveRespository', () => {
  const MOCK_RCA_ID = '44184';
  const INCENTIVE_ID = '2845';
  let repository;

  beforeAll(() => {
    const mockApiBff = new MOCKAPIBFF();
    repository = new IncentiveDetailsRepository();
    repository.apiBff.instance = mockApiBff;
    repository.apiBff.instance.get = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Tests fetchIncentivesDetails', () => {
    it('should call APIBFF get with "business-incentives" and BUSINESS INCENTIVE ID ', async () => {
      repository.fetchIncentivesDetails(INCENTIVE_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        `/business-incentives/${INCENTIVE_ID}`
      );
    });
  });
});
