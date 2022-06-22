import '../../../shared/utils/jestCustomMatchers';
import '../../../shared/utils/mock-react-native-third-lib';
import expect from 'expect';
import * as incentivesUtils from '../incentivesUtils';
import * as asyncStorage from 'shared/utils/asyncStorage';
import IncentivesRepository from '../services/IncentiveRepository';
import IncentiveManager from '../services/IncentiveManager';
import { mockIncentivesMartins, mockIncentivesMartinsDetails } from './_incentivesData.mock';

jest.mock('shared/utils/asyncStorage', () => {
  return { getUserLogin: jest.fn(), getUserRole: jest.fn() };
});

jest.mock('../services/IncentiveRepository');

jest.mock('../incentivesUtils', () => ({
  transformIncentiveResponse: jest.fn(),
  transformIncentiveIndicatorsResponse: jest.fn(),
  transformIncentivesMartinsResponse: jest.fn(),
  transformIncentivesMartinsDetailsResponse: jest.fn(),
  transformSuppliersIndicatorsMonth: jest.fn(),
  transformSuppliersIndicatorsWeeks: jest.fn(),
}));

const MOCK_USER_ID = '44184';

const MOCK_REPO_INDICATORS_RESPONSE = {
  data: {
    business_incentive_performance_indicators: [
      {
        indicator_name: 'string',
        indicator_type: 'INTEGER',
        indicator_forecast: 0,
        indicator_result: 0,
        indicator_gap: 0,
        sales_rep_classification: 0,
        indicator_percentage: 0,
        indicator_fulfillment: 'string',
      },
    ],
  },
};

describe('Tests IncentiveManager', () => {
  const MOCK_INCENTIVE_ID = '2845';
  const MOCK_RCA_ID = '65833';
  const MOCK_GT_ID = '71354';
  let manager;
  const mockRepoResponseIncentive = {
    data: {
      id: '2876',
      comments: 'comments',
      name: 'name',
      target_group: 'RCA/CLT',
      status: 'EMAPURAÇÃO',
      start_date: '2021-08-16',
      end_date: '2021-08-16',
      mechanics: 'Bateu/Levou',
    },
  };

  beforeAll(() => {
    const mockRepo = new IncentivesRepository();
    manager = new IncentiveManager();
    manager.repo = mockRepo;
    manager.handleError = jest.fn();
    manager.repo.fetchIncentivesPerformanceIndicators = jest.fn();
    manager.repo.fetchIcentivesMartins = jest.fn();
    manager.repo.fetchIcentivesMartinsDetails = jest.fn();
    manager.repo.fetchSuppliersIndicatorsMonth = jest.fn();
    manager.repo.fetchSuppliersIndicatorsWeeks = jest.fn();
  });
  describe('Tests getIncentivesConsult ', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should call repo.fetchIncentives, IF USER IS RCA, and transform response', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);
      asyncStorage.getUserRole.mockResolvedValueOnce('RCA');
      manager.repo.fetchIncentives.mockReturnValueOnce(mockRepoResponseIncentive);

      await manager.getIncentives();

      expect(manager.repo.fetchIncentives).toHaveBeenCalledWith(MOCK_RCA_ID);
      expect(incentivesUtils.transformIncentiveResponse).toHaveBeenCalledWith(
        mockRepoResponseIncentive.data
      );
    });

    it('should call repo.fetchIncentivesTerritoryManager, IF USER IS GT, and transform response', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_GT_ID);
      asyncStorage.getUserRole.mockResolvedValueOnce('GT');

      manager.repo.fetchIncentivesTerritoryManager.mockReturnValueOnce(mockRepoResponseIncentive);

      await manager.getIncentives();

      expect(manager.repo.fetchIncentivesTerritoryManager).toHaveBeenCalledWith(MOCK_GT_ID);
      expect(incentivesUtils.transformIncentiveResponse).toHaveBeenCalledWith(
        mockRepoResponseIncentive.data
      );
    });
    it('should call handleError in case of repo.fetchIncentives throws an error', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);
      asyncStorage.getUserRole.mockResolvedValueOnce('RCA');

      manager.repo.fetchIncentives.mockImplementationOnce(() => {
        throw new Error('');
      });
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);

      await manager.getIncentives();

      expect(manager.repo.fetchIncentives).toHaveBeenCalledWith(MOCK_RCA_ID);
      expect(incentivesUtils.transformIncentiveResponse).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });

    it('should call handleError in case of repo.fetchIncentivesTerritoryManager throws an error', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_GT_ID);
      asyncStorage.getUserRole.mockResolvedValueOnce('GT');
      manager.repo.fetchIncentivesTerritoryManager.mockImplementationOnce(() => {
        throw new Error('');
      });
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_GT_ID);

      await manager.getIncentives();

      expect(manager.repo.fetchIncentivesTerritoryManager).toHaveBeenCalledWith(MOCK_GT_ID);
      expect(incentivesUtils.transformIncentiveResponse).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });

    it('should call handleError in case of transformIncentiveResponse throws an error', async () => {
      manager.repo.fetchIncentives.mockReturnValueOnce({});
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);
      incentivesUtils.transformIncentiveResponse.mockImplementationOnce(() => {
        throw new Error('');
      });

      await manager.getIncentives();

      expect(incentivesUtils.transformIncentiveResponse).toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });
  });

  describe('Tests getIncentivesPerformanceIndicators', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('should fetchIncentivesPerformanceIndicators, IF USER IS RCA, indicators and transform response', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);
      asyncStorage.getUserRole.mockResolvedValueOnce('RCA');

      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);

      manager.repo.fetchIncentivesPerformanceIndicators.mockResolvedValueOnce(
        MOCK_REPO_INDICATORS_RESPONSE
      );

      await manager.getIncentivesPerformanceIndicators(MOCK_INCENTIVE_ID);

      expect(asyncStorage.getUserLogin).toHaveBeenCalled();
      expect(manager.repo.fetchIncentivesPerformanceIndicators).toHaveBeenCalledWith(
        MOCK_RCA_ID,
        MOCK_INCENTIVE_ID
      );
      expect(incentivesUtils.transformIncentiveIndicatorsResponse).toHaveBeenCalledWith(
        MOCK_REPO_INDICATORS_RESPONSE.data,
        false
      );
    });
    it('should fetchIncentivesPerformanceIndicatorsTerritoryManager, IF USER IS GT, and transform response', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_GT_ID);
      asyncStorage.getUserRole.mockResolvedValueOnce('GT');

      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_GT_ID);

      manager.repo.fetchIncentivesPerformanceIndicatorsTerritoryManager.mockResolvedValueOnce(
        MOCK_REPO_INDICATORS_RESPONSE
      );

      await manager.getIncentivesPerformanceIndicators(MOCK_INCENTIVE_ID);

      expect(asyncStorage.getUserLogin).toHaveBeenCalled();
      expect(
        manager.repo.fetchIncentivesPerformanceIndicatorsTerritoryManager
      ).toHaveBeenCalledWith(MOCK_GT_ID, MOCK_INCENTIVE_ID);
      expect(incentivesUtils.transformIncentiveIndicatorsResponse).toHaveBeenCalledWith(
        MOCK_REPO_INDICATORS_RESPONSE.data,
        true
      );
    });

    it('should call handleError if repo throws an error', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);

      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);

      manager.repo.fetchIncentivesPerformanceIndicators.mockImplementationOnce(() => {
        throw new Error('');
      });

      await manager.getIncentivesPerformanceIndicators(MOCK_INCENTIVE_ID);

      expect(asyncStorage.getUserLogin).toHaveBeenCalled();
      expect(manager.repo.fetchIncentivesPerformanceIndicators).toHaveBeenCalled();
      expect(incentivesUtils.transformIncentiveIndicatorsResponse).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });
  });

  describe('Tests on getIncentivesMartins', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    it('Success: should call repo.fetchIcentivesMartins and transform response data', async () => {
      // cenario
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);
      manager.repo.fetchIcentivesMartins.mockImplementationOnce(() => mockIncentivesMartins);

      // execução do que estou testando
      await manager.getIncentivesMartins();

      // aferições
      expect(asyncStorage.getUserLogin).toHaveBeenCalled();
      expect(manager.repo.fetchIcentivesMartins).toHaveBeenCalledWith(MOCK_RCA_ID);
      expect(incentivesUtils.transformIncentivesMartinsResponse).toHaveBeenCalledWith(
        mockIncentivesMartins.data
      );
    });

    it('Failed: shoud call handleError when repo.fetchIcentivesMartins throws an error ', async () => {
      const MOCK_ERROR_FROM_REPO = new Error('Error from repo');

      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);
      manager.repo.fetchIcentivesMartins.mockImplementationOnce(() => {
        throw MOCK_ERROR_FROM_REPO;
      });

      await manager.getIncentivesMartins();

      expect(incentivesUtils.transformIncentivesMartinsResponse).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalledWith(MOCK_ERROR_FROM_REPO);
    });

    it('Failed: shoud call handleError when transformIncentivesMartinsResponse throws an error ', async () => {
      const MOCK_ERROR_FROM_TRANSFORM = new Error('Error from transform ');

      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);
      manager.repo.fetchIcentivesMartins.mockImplementationOnce(() => mockIncentivesMartins);
      incentivesUtils.transformIncentivesMartinsResponse.mockImplementationOnce(() => {
        throw MOCK_ERROR_FROM_TRANSFORM;
      });

      await manager.getIncentivesMartins();

      expect(incentivesUtils.transformIncentivesMartinsResponse).toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalledWith(MOCK_ERROR_FROM_TRANSFORM);
    });
  });

  describe('Tests on getIncentivesMartinsDetails', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('Success: should call repo.fetchIcentivesMartinsDetails and transform response data', async () => {
      manager.repo.fetchIcentivesMartinsDetails.mockResolvedValueOnce(mockIncentivesMartinsDetails);

      await manager.getIncentivesMartinsDetails(MOCK_INCENTIVE_ID);

      expect(manager.repo.fetchIcentivesMartinsDetails).toHaveBeenCalledWith(MOCK_INCENTIVE_ID);
      expect(incentivesUtils.transformIncentivesMartinsDetailsResponse).toHaveBeenCalledWith(
        mockIncentivesMartinsDetails.data
      );
    });
  });

  it(`Failed: should not call transformIncentivesMartinsDetailsResponse 
  when repo.fetchIcentivesMartinsDetails throws an error `, async () => {
    const ERROR_FROM_REPO = new Error('Error from repo');

    manager.repo.fetchIcentivesMartinsDetails.mockImplementationOnce(() => {
      throw ERROR_FROM_REPO;
    });

    await manager.getIncentivesMartinsDetails(MOCK_INCENTIVE_ID);

    expect(incentivesUtils.transformIncentivesMartinsDetailsResponse).not.toHaveBeenCalled();
    expect(manager.handleError).toHaveBeenCalledWith(ERROR_FROM_REPO);
  });

  it(`Failed: should call handleError when transformIncentivesMartinsDetailsResponse 
  throws an error
  `, async () => {
    const ERROR_FROM_TRANSFORM = new Error('Error from transform');

    manager.repo.fetchIcentivesMartinsDetails.mockResolvedValueOnce(mockIncentivesMartinsDetails);
    incentivesUtils.transformIncentivesMartinsDetailsResponse.mockImplementationOnce(() => {
      throw ERROR_FROM_TRANSFORM;
    });

    await manager.getIncentivesMartinsDetails(MOCK_INCENTIVE_ID);

    expect(incentivesUtils.transformIncentivesMartinsDetailsResponse).toHaveBeenCalled();
    expect(manager.handleError).toHaveBeenCalledWith(ERROR_FROM_TRANSFORM);
  });
  describe('Tests on getSuppliersIndicators', () => {
    const SELECTED_MONTH_MOCK = '2022-01-01';
    it('should ', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);

      manager.repo.fetchSuppliersIndicatorsMonth.mockResolvedValueOnce({
        MOCK_SUPPLIERS_INDICATORS_MONTH,
      });

      manager.repo.fetchSuppliersIndicatorsWeeks.mockResolvedValueOnce({
        MOCK_SUPPLIERS_INDICATORS_WEEKS,
      });

      const res = await manager.getSuppliersIndicators(SELECTED_MONTH_MOCK);

      expect(manager.repo.fetchSuppliersIndicatorsMonth).toHaveBeenCalledWith(
        MOCK_RCA_ID,
        SELECTED_MONTH_MOCK
      );
      expect(manager.repo.fetchSuppliersIndicatorsWeeks).toHaveBeenCalledWith(
        MOCK_RCA_ID,
        SELECTED_MONTH_MOCK
      );
      expect(incentivesUtils.transformSuppliersIndicatorsMonth).toHaveBeenCalledWith(
        SELECTED_MONTH_MOCK.data
      );
      expect(incentivesUtils.transformSuppliersIndicatorsWeeks).toHaveBeenCalledWith(
        SELECTED_MONTH_MOCK.data
      );

      expect(res).toHaveProperty('month');
      expect(res).toHaveProperty('weeks');
    });

    it('should call manager.handleError', async () => {
      manager.repo.fetchSuppliersIndicatorsMonth.mockImplementationOnce(() => {
        throw new Error('-');
      });

      await manager.getSuppliersIndicators(SELECTED_MONTH_MOCK);
      expect(manager.handleError).toHaveBeenCalled();
    });
  });
});

const MOCK_SUPPLIERS_INDICATORS_WEEKS = {
  data: {
    weeks: [
      {
        week: 'string',
        focus_suppliers_indicators: [
          {
            id: 'string',
            focus_suppliers_total_customers_result: 0,
            wildcard_suppliers_total_customers_result: 0,
            wildcard_suppliers_customers_result: [
              {
                wildcard_suppliers_quantity: 0,
                customers_quantity: 0,
              },
            ],
            earned_value: 0,
          },
        ],
      },
    ],
  },
};
const MOCK_SUPPLIERS_INDICATORS_MONTH = {
  data: {
    focus_suppliers_indicators: [
      {
        id: 'string',
        focus_suppliers_total_customers_result: 0,
        wildcard_suppliers_total_customers_result: 0,
        wildcard_suppliers_customers_result: [
          {
            wildcard_suppliers_quantity: 0,
            customers_quantity: 0,
          },
        ],
        earned_value: 0,
      },
    ],
  },
};
