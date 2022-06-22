import { default as expect } from 'expect';
import PerformanceRepository from '../services/PerformanceRepository';
import * as asyncStorage from '../../../shared/utils/asyncStorage';
import { mountMonthParam, mountWeekParam } from '../../../shared/utils';
import PerformanceManager from '../services/PerformanceManager';
import {
  transformCustomersIndicatorsResponse,
  transformSalesIndicatorsResponse,
  transformGtTeamIndicatorsResponse,
  extractMonthWeekIndicators,
} from '../performanceUtils';

jest.mock('../../../shared/utils/asyncStorage', () => {
  return {
    getUserLogin: jest.fn(),
    isUserGV: jest.fn(),
  };
});

jest.mock('../../../shared/utils/', () => {
  return {
    mountMonthParam: jest.fn(),
    mountWeekParam: jest.fn(),
  };
});

jest.mock('../performanceUtils', () => ({
  transformCustomersIndicatorsResponse: jest.fn(),
  transformSalesIndicatorsResponse: jest.fn(),
  transformGtTeamIndicatorsResponse: jest.fn(),
  extractMonthWeekIndicators: jest.fn(),
}));

jest.mock('../../../shared/base/api/BaseManager', () => {
  return class MockBaseManager {
    constructor() {}
  };
});

jest.mock('../services/PerformanceRepository', () => {
  return class MockRepo {
    customersIndicatorsModel;
    salesIndicatorsModel;
    constructor() {
      this.customersIndicatorsModel = {
        deleteAll: jest.fn(),
        insertMany: jest.fn(),
        getAllLocal: jest.fn(),
      };

      this.salesIndicatorsModel = {
        deleteAll: jest.fn(),
        insertMany: jest.fn(),
        getAllLocal: jest.fn(),
      };
    }
  };
});

describe('Tests PerformanceManager', () => {
  let manager;
  let mockRepo;
  const MOCK_RCA_ID = '1234';

  const monthIndicatorsMock = {
    data: ['monthIndicatorsMock'],
  };
  const weekIndicatorsMock = {
    data: ['weekIndicatorsMock'],
  };

  beforeAll(() => {
    mockRepo = new PerformanceRepository();
    manager = new PerformanceManager();
    manager.repo = mockRepo;
    manager.repo.getIndicatorsMonth = jest.fn();
    manager.repo.getIndicatorsWeek = jest.fn();
    manager.repo.getGVTeamIndicators = jest.fn();
    manager.repo.getGTTeamIndicators = jest.fn();
    manager.handleError = jest.fn();
    mountMonthParam.mockReturnValue('monthParam');
    mountWeekParam.mockReturnValue('weekParam');
  });

  describe('Tests fetchIndicators', () => {
    it('should get indicators from repo and transform them', async () => {
      manager.repo.getIndicatorsMonth.mockImplementation(
        () => new Promise((res) => res(monthIndicatorsMock))
      );

      manager.repo.getIndicatorsWeek.mockImplementation(
        () => new Promise((res) => res(weekIndicatorsMock))
      );

      transformCustomersIndicatorsResponse.mockReturnValueOnce([
        'transformedCustomersIndicatorsMonth',
        'transformedCustomersIndicatorsWeek',
      ]);

      transformSalesIndicatorsResponse.mockReturnValueOnce([
        'transformedSalesIndicators',
        'transformedSalesIndicatorsWeek',
      ]);

      const res = await manager.fetchIndicators(MOCK_RCA_ID);

      expect(manager.repo.getIndicatorsMonth).toHaveBeenCalledWith(MOCK_RCA_ID, 'monthParam');
      expect(manager.repo.getIndicatorsWeek).toHaveBeenCalledWith(MOCK_RCA_ID, 'weekParam');
      expect(transformCustomersIndicatorsResponse).toHaveBeenCalledWith(
        monthIndicatorsMock.data,
        weekIndicatorsMock.data
      );
      expect(transformSalesIndicatorsResponse).toHaveBeenCalledWith(
        monthIndicatorsMock.data,
        weekIndicatorsMock.data
      );
      expect(res).toHaveProperty('customersIndicators');
      expect(res.customersIndicators).toHaveProperty('month');
      expect(res.customersIndicators).toHaveProperty('week');
      expect(res).toHaveProperty('salesIndicators');
      expect(res.salesIndicators).toHaveProperty('month');
      expect(res.salesIndicators).toHaveProperty('week');
    });
  });

  describe('Tests syncIndicators', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it('should fetch indicators and persist them', async () => {
      asyncStorage.getUserLogin.mockReturnValueOnce(MOCK_RCA_ID);
      const spyFetchIndicators = jest.spyOn(manager, 'fetchIndicators');
      const spyPersistCustomers = jest.spyOn(manager, 'persistCustomers');
      const spyPersistSales = jest.spyOn(manager, 'persistSales');

      spyFetchIndicators.mockReturnValueOnce({
        customersIndicators: { month: {}, week: {} },
        salesIndicators: { month: {}, week: {} },
      });

      spyPersistCustomers.mockImplementationOnce(() => Promise.resolve());
      spyPersistSales.mockImplementationOnce(() => Promise.resolve());

      await manager.syncIndicators();

      await expect(spyFetchIndicators).toHaveBeenCalled();
      await expect(spyPersistCustomers).toHaveBeenCalled();
      await expect(spyPersistSales).toHaveBeenCalled();
    });

    it('should not fetch indicators and persist them', async () => {
      asyncStorage.getUserLogin = jest.fn().mockReturnValueOnce(null);
      const spyFetchIndicators = jest.spyOn(manager, 'fetchIndicators');
      await manager.syncIndicators();

      await expect(spyFetchIndicators).not.toHaveBeenCalled();
    });
  });

  describe('Tests persistCustomers', () => {
    it('should delete and insert customer indicators', async () => {
      await manager.persistCustomers(monthIndicatorsMock, weekIndicatorsMock);
      expect(manager.repo.customersIndicatorsModel.deleteAll).toHaveBeenCalled();
      expect(manager.repo.customersIndicatorsModel.insertMany).toHaveBeenCalledWith([
        monthIndicatorsMock,
        weekIndicatorsMock,
      ]);
    });
  });

  describe('Tests persistSales', () => {
    it('should delete and insert sales indicators', async () => {
      await manager.persistSales(monthIndicatorsMock, weekIndicatorsMock);
      expect(manager.repo.salesIndicatorsModel.deleteAll).toHaveBeenCalled();
      expect(manager.repo.salesIndicatorsModel.insertMany).toHaveBeenCalledWith([
        monthIndicatorsMock,
        weekIndicatorsMock,
      ]);
    });
  });

  describe('Tests getCustomerIndicators', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
    it('should get all local customer indicators and extract month/week', async () => {
      manager.repo.customersIndicatorsModel.getAllLocal.mockReturnValueOnce([{}]);
      await manager.getCustomerIndicators();
      expect(manager.repo.customersIndicatorsModel.getAllLocal).toHaveBeenCalled();
      expect(extractMonthWeekIndicators).toHaveBeenCalledWith([{}]);
    });
    it('should not extract month/week if there are no customer indicators', async () => {
      manager.repo.customersIndicatorsModel.getAllLocal.mockReturnValueOnce(null);
      await manager.getCustomerIndicators();
      expect(manager.repo.customersIndicatorsModel.getAllLocal).toHaveBeenCalled();
      expect(extractMonthWeekIndicators).not.toHaveBeenCalled();
    });
    it('should call handle error', async () => {
      manager.repo.customersIndicatorsModel.getAllLocal.mockImplementationOnce(() => {
        throw new Error('');
      });
      await manager.getCustomerIndicators();
      expect(manager.repo.customersIndicatorsModel.getAllLocal).toHaveBeenCalled();
      expect(extractMonthWeekIndicators).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });
  });

  describe('Tests getSalesIndicators', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
    it('should get all local sales indicators and extract month/week', async () => {
      manager.repo.salesIndicatorsModel.getAllLocal.mockReturnValueOnce([{}]);
      await manager.getSalesIndicators();
      expect(manager.repo.salesIndicatorsModel.getAllLocal).toHaveBeenCalled();
      expect(extractMonthWeekIndicators).toHaveBeenCalledWith([{}]);
    });
    it('should not extract month/week if there are no sales indicators', async () => {
      manager.repo.salesIndicatorsModel.getAllLocal.mockReturnValueOnce(null);
      await manager.getSalesIndicators();
      expect(manager.repo.salesIndicatorsModel.getAllLocal).toHaveBeenCalled();
      expect(extractMonthWeekIndicators).not.toHaveBeenCalled();
    });
    it('should call handle error', async () => {
      manager.repo.salesIndicatorsModel.getAllLocal.mockImplementationOnce(() => {
        throw new Error('');
      });
      await manager.getSalesIndicators();
      expect(manager.repo.salesIndicatorsModel.getAllLocal).toHaveBeenCalled();
      expect(extractMonthWeekIndicators).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });
  });

  describe('Tests getIndicators', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('should sync indicators when logged in user is a RCA', async () => {
      const isRCA = true;
      const spySyncIndicators = jest.spyOn(manager, 'syncIndicators');
      const spyGetCustomerIndicators = jest.spyOn(manager, 'getCustomerIndicators');
      const spyGetSalesIndicators = jest.spyOn(manager, 'getSalesIndicators');
      await manager.getIndicators(isRCA);
      expect(spySyncIndicators).toHaveBeenCalled();
      expect(spyGetCustomerIndicators).toHaveBeenCalled();
      expect(spyGetSalesIndicators).toHaveBeenCalled();
    });
    it('should fetch indicators when logged in user is a GT', async () => {
      const isRCA = false;
      const spyFetchIndicators = jest.spyOn(manager, 'fetchIndicators');
      const spySyncIndicators = jest.spyOn(manager, 'syncIndicators');
      await manager.getIndicators(isRCA, MOCK_RCA_ID);

      expect(spySyncIndicators).not.toHaveBeenCalled();
      expect(spyFetchIndicators).toHaveBeenCalledWith(MOCK_RCA_ID);
    });
    it('should call handle error', async () => {
      const isRCA = true;
      const spySyncIndicators = jest.spyOn(manager, 'syncIndicators').mockImplementationOnce(() => {
        throw new Error('');
      });
      await manager.getIndicators(isRCA);

      expect(spySyncIndicators).toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });
  });

  describe('Tests getManagerTeamIndicators', () => {
    it('should call repo getGTTeamIndicators when user is GT and then utils: transformGtTeamIndicatorsResponse', async () => {
      const mockRepoResponseData = {
        data: {
          team_performance_indicators: [],
        },
      };

      manager.repo.getGTTeamIndicators.mockReturnValueOnce(mockRepoResponseData);

      await manager.getManagerTeamIndicators();
      expect(manager.repo.getGTTeamIndicators).toHaveBeenCalled();
      expect(transformGtTeamIndicatorsResponse).toHaveBeenCalledWith(mockRepoResponseData.data);
    });

    it('should call repo getGVTeamIndicators when user is GV and then utils: transformGtTeamIndicatorsResponse', async () => {
      asyncStorage.isUserGV.mockResolvedValueOnce(true);

      const mockRepoResponseData = {
        data: {
          team_performance_indicators: [],
        },
      };

      manager.repo.getGVTeamIndicators.mockReturnValueOnce(mockRepoResponseData);

      await manager.getManagerTeamIndicators();
      expect(manager.repo.getGVTeamIndicators).toHaveBeenCalled();
      expect(transformGtTeamIndicatorsResponse).toHaveBeenCalledWith(mockRepoResponseData.data);
    });

    it('should catch erro with handleError when repo throws an error', async () => {
      manager.repo.getGTTeamIndicators.mockImplementationOnce(() => {
        throw new Error('');
      });

      await manager.getManagerTeamIndicators();

      expect(manager.handleError).toHaveBeenCalled();
    });

    it('should catch erro with handleError when transformGtTeamIndicatorsResponse throws an error', async () => {
      transformGtTeamIndicatorsResponse.mockImplementationOnce(() => {
        throw new Error('');
      });

      await manager.getManagerTeamIndicators();

      expect(manager.handleError).toHaveBeenCalled();
    });
  });

  describe('Tests getGTIndicators()', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    const MOCK_GT_ID = '6061';
    const mockRepoResponseGTIndicatorsData = {
      data: {
        team_performance_indicators: [],
      },
    };
    it('should call getGTTeamIndicators when is GV trying to access GT indicators', async () => {
      manager.repo.getGTTeamIndicators.mockReturnValueOnce(mockRepoResponseGTIndicatorsData);
      await manager.getGTIndicators(MOCK_GT_ID);
      expect(transformGtTeamIndicatorsResponse).toHaveBeenCalledWith(
        mockRepoResponseGTIndicatorsData.data
      );
    });

    it('should catch erro with handleError when getGTTeamIndicators throws an error', async () => {
      const MOCK_ERROR_FROM_REPO = new Error('Erro from repo');
      manager.repo.getGTTeamIndicators.mockImplementationOnce(() => {
        throw MOCK_ERROR_FROM_REPO;
      });

      await manager.getGTIndicators(MOCK_GT_ID);

      expect(transformGtTeamIndicatorsResponse).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalledWith(MOCK_ERROR_FROM_REPO);
    });

    it('should catch erro with handleError when transformGtTeamIndicatorsResponse throws an error', async () => {
      manager.repo.getGTTeamIndicators.mockReturnValueOnce(mockRepoResponseGTIndicatorsData);

      const MOCK_ERROR_FROM_TRANSFORM = new Error('Erro from transform');
      transformGtTeamIndicatorsResponse.mockImplementationOnce(() => {
        throw MOCK_ERROR_FROM_TRANSFORM;
      });

      await manager.getGTIndicators(MOCK_GT_ID);

      expect(manager.handleError).toHaveBeenCalledWith(MOCK_ERROR_FROM_TRANSFORM);
    });
  });
});
