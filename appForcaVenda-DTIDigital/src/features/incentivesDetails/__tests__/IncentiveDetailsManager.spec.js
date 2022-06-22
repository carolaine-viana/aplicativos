import '../../../shared/utils/mock-react-native-third-lib';
import expect from 'expect';
import * as incentiveDetailsUtils from '../incentiveDetailsUtils';
import IncentiveDetailsRepositorycls from '../services/IncentiveDetailsRepository';
import IncentiveDetailsManager from '../services/IncentiveDetailsManager';

jest.mock('../services/IncentiveDetailsRepository');
jest.mock('../incentiveDetailsUtils', () => ({
  transformIncentiveDetailsResponse: jest.fn(),
}));

describe('Tests IncentiveDetailsManager', () => {
  const MOCK_INCENTIVE_ID = '2845';
  const mockRepoResponse = {
    data: {
      id: '2845',
      sales_forecast: '8897',
      sales_result: '458',
      campaign_name: 'campaign_name',
      campaign_sales_forecast: '4586',
      campaign_sales_result: '4567',
      total_number_of_days: '20',
      elapsed_number_of_days: '60',
      rule_description: 'rule_description...',
      awards: [
        {
          rule: 'rule 1',
          prize: 'some prize',
        },
      ],
    },
  };
  let manager;

  beforeAll(() => {
    const mockRepo = new IncentiveDetailsRepositorycls();
    manager = new IncentiveDetailsManager();
    manager.repo = mockRepo;
    manager.handleError = jest.fn();
  });

  describe('Tests getIncentivesDetails ', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('should call repo.fetchIncentivesDetails and transform response', async () => {
      manager.repo.fetchIncentivesDetails.mockReturnValueOnce(mockRepoResponse);
      await manager.getIncentivesDetails(MOCK_INCENTIVE_ID);
      expect(manager.repo.fetchIncentivesDetails).toHaveBeenCalledWith(MOCK_INCENTIVE_ID);
      expect(incentiveDetailsUtils.transformIncentiveDetailsResponse).toHaveBeenCalledWith(
        mockRepoResponse.data
      );
    });
    it('should call handleError in case of repo throws an error', async () => {
      manager.repo.fetchIncentivesDetails.mockImplementationOnce(() => {
        throw new Error('');
      });
      await manager.getIncentivesDetails(MOCK_INCENTIVE_ID);
      expect(manager.repo.fetchIncentivesDetails).toHaveBeenCalledWith(MOCK_INCENTIVE_ID);
      expect(incentiveDetailsUtils.transformIncentiveDetailsResponse).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });
    it('should call handleError in case of transformIncentiveDetailsResponse throws an error', async () => {
      manager.repo.fetchIncentivesDetails.mockReturnValueOnce({});
      incentiveDetailsUtils.transformIncentiveDetailsResponse.mockImplementationOnce(() => {
        throw new Error('');
      });
      await manager.getIncentivesDetails(MOCK_INCENTIVE_ID);
      expect(manager.repo.fetchIncentivesDetails).toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });
  });
});
