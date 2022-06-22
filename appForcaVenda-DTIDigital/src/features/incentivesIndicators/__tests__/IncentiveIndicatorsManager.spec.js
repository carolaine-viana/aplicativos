import expect from 'expect';
import IncentiveIndicatorsRepositoryMock from '../services/IncentiveIndicatorsRepository';
import IncentiveIndicatorsManager from '../services/IncentiveIndicatorsManager';
import * as incentiveIndicatorsUtils from '../incentiveIndicatorsUtils';

jest.mock('../services/IncentiveIndicatorsRepository', () => {
  return class IncentiveIndicatorsRepositoryMock {
    fechIncentiveIndicators = jest.fn();
  };
});

jest.mock('../../../shared/base/api/BaseManager');

jest.mock('../incentiveIndicatorsUtils', () => {
  return {
    transformIncentiveIndicatorsResponse: jest.fn(),
  };
});

const MOCK_INCENTIVE_ID = '2740';

const MOCK_RESPONSE_DATA = {
  data: {
    business_incentive_indicators: [
      {
        measure: 'Venda',
        criterion: 'Maior valor acima do objetivo',
      },
    ],
  },
};

describe('Tests IncentiveIndicatorsManager', () => {
  let manager;
  beforeAll(() => {
    manager = new IncentiveIndicatorsManager();
    manager.repo = new IncentiveIndicatorsRepositoryMock();
    manager.handleError = jest.fn();
  });

  describe('Tests getIncentiveIndicators', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('should call repo.fechIncentiveIndicators and then transform data', async () => {
      manager.repo.fechIncentiveIndicators.mockResolvedValueOnce(MOCK_RESPONSE_DATA);
      await manager.getIncentiveIndicators(MOCK_INCENTIVE_ID);

      expect(manager.repo.fechIncentiveIndicators).toHaveBeenCalledWith(MOCK_INCENTIVE_ID);
      expect(incentiveIndicatorsUtils.transformIncentiveIndicatorsResponse).toHaveBeenCalledWith(
        MOCK_RESPONSE_DATA.data
      );
    });
    it('should handle error if repo throws an Error', async () => {
      manager.repo.fechIncentiveIndicators.mockImplementationOnce(() => {
        throw new Error('');
      });

      await manager.getIncentiveIndicators(MOCK_INCENTIVE_ID);

      expect(manager.repo.fechIncentiveIndicators).toHaveBeenCalledWith(MOCK_INCENTIVE_ID);
      expect(incentiveIndicatorsUtils.transformIncentiveIndicatorsResponse).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });
    it('should handle error if failed', async () => {
      manager.repo.fechIncentiveIndicators.mockImplementationOnce(() => {
        throw new Error('');
      });

      await manager.getIncentiveIndicators(MOCK_INCENTIVE_ID);

      expect(manager.repo.fechIncentiveIndicators).toHaveBeenCalledWith(MOCK_INCENTIVE_ID);
      expect(incentiveIndicatorsUtils.transformIncentiveIndicatorsResponse).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });
  });
});
