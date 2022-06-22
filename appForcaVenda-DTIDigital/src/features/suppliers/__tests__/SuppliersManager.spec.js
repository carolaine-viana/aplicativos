import expect from 'expect';
import * as generalUtils from 'shared/utils/generalUtils';
import * as asyncStorage from 'shared/utils/asyncStorage';
import * as suppliersUtils from '../suppliersUtils';
import SuppliersRepositoryMock from '../services/SuppliersRepository';
import SuppliersManager from '../services/SuppliersManager';
import { mockResponseSuccessFetchSuppliersBattleMap } from './mocks/responseBattleMap.mock';
import { mockResponseSuccessFetchCustomersServed } from './mocks/responseCustomerServed.mock';
import { mockResponseSuccessSuppliersIndicators } from './mocks/responseSuppliersIndicators.mock';

jest.mock('../services/SuppliersRepository', () => {
  return class SuppliersRepositoryMock {
    fetchSuppliersBattleMap = jest.fn();
    fetchCustomersServed = jest.fn();
    fetchSuppliersIndicators = jest.fn();
  };
});

jest.mock('../suppliersUtils', () => {
  return {
    transformSuppliersBattleMapResponse: jest.fn(),
    transformCustomersServedResponse: jest.fn(),
    transformSuppliersIndicators: jest.fn(),
  };
});

jest.mock('shared/utils/asyncStorage', () => {
  return {
    getUserLogin: jest.fn(),
  };
});

jest.mock('shared/utils/generalUtils', () => {
  return {
    mountMonthParam: jest.fn(),
    mountWeekParam: jest.fn(),
  };
});

describe('Tests SuppliersManager', () => {
  let mockRepo;
  let manager;

  beforeAll(() => {
    mockRepo = new SuppliersRepositoryMock();
    manager = new SuppliersManager();
    manager.repo = mockRepo;
    manager.handleError = jest.fn();
  });

  describe('Tests getSuppliersBattleMap ', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should call repo.fetchSuppliersBattleMap with params(44184, foco, 202108)', async () => {
      manager.repo.fetchSuppliersBattleMap.mockResolvedValueOnce(
        mockResponseSuccessFetchSuppliersBattleMap
      );
      asyncStorage.getUserLogin.mockResolvedValueOnce('44184');
      generalUtils.mountMonthParam.mockReturnValueOnce('202108');

      const timeCourseParam = 'month';
      const categoryParam = 'foco';

      await manager.getSuppliersBattleMap(timeCourseParam, categoryParam);
      expect(manager.repo.fetchSuppliersBattleMap.mock.calls[0][0]).toBe('44184');
      expect(manager.repo.fetchSuppliersBattleMap.mock.calls[0][1]).toBe('foco');
      expect(manager.repo.fetchSuppliersBattleMap.mock.calls[0][2]).toBe('202108');
      expect(suppliersUtils.transformSuppliersBattleMapResponse).toHaveBeenCalledTimes(1);
    });
    it('should call repo.fetchSuppliersBattleMap with params(44184, coringa, 2021-08-26)', async () => {
      manager.repo.fetchSuppliersBattleMap.mockResolvedValueOnce(
        mockResponseSuccessFetchSuppliersBattleMap
      );
      asyncStorage.getUserLogin.mockResolvedValueOnce('44184');
      generalUtils.mountWeekParam.mockReturnValueOnce('2021-08-26');

      const timeCourseParam = 'week';
      const categoryParam = 'coringa';

      await manager.getSuppliersBattleMap(timeCourseParam, categoryParam);
      expect(manager.repo.fetchSuppliersBattleMap.mock.calls[0][0]).toBe('44184');
      expect(manager.repo.fetchSuppliersBattleMap.mock.calls[0][1]).toBe('coringa');
      expect(manager.repo.fetchSuppliersBattleMap.mock.calls[0][2]).toBe('2021-08-26');
      expect(suppliersUtils.transformSuppliersBattleMapResponse).toHaveBeenCalledTimes(1);
    });

    it('should catch error with manager handleError', async () => {
      manager.repo.fetchSuppliersBattleMap.mockImplementationOnce(() => {
        throw new Error('');
      });
      await manager.getSuppliersBattleMap();

      expect(manager.handleError).toHaveBeenCalledTimes(1);
    });
  });

  describe('Tests getCustomersServed ', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should call repo.fetchCustomersServed with params(44184, foco, 202108)', async () => {
      manager.repo.fetchCustomersServed.mockResolvedValueOnce(
        mockResponseSuccessFetchCustomersServed
      );
      asyncStorage.getUserLogin.mockResolvedValueOnce('44184');
      generalUtils.mountMonthParam.mockReturnValueOnce('202108');

      const timeCourseParam = 'month';
      const categoryParam = 'foco';

      await manager.getCustomersServed(timeCourseParam, categoryParam);
      expect(manager.repo.fetchCustomersServed.mock.calls[0][0]).toBe('44184');
      expect(manager.repo.fetchCustomersServed.mock.calls[0][1]).toBe('foco');
      expect(manager.repo.fetchCustomersServed.mock.calls[0][2]).toBe('202108');
      expect(suppliersUtils.transformCustomersServedResponse).toHaveBeenCalledTimes(1);
    });
    it('should call repo.fetchCustomersServed with params(44184, coringa, 2021-08-26)', async () => {
      manager.repo.fetchCustomersServed.mockResolvedValueOnce(
        mockResponseSuccessFetchCustomersServed
      );
      asyncStorage.getUserLogin.mockResolvedValueOnce('44184');
      generalUtils.mountWeekParam.mockReturnValueOnce('2021-08-26');

      const timeCourseParam = 'week';
      const categoryParam = 'coringa';

      await manager.getCustomersServed(timeCourseParam, categoryParam);
      expect(manager.repo.fetchCustomersServed.mock.calls[0][0]).toBe('44184');
      expect(manager.repo.fetchCustomersServed.mock.calls[0][1]).toBe('coringa');
      expect(manager.repo.fetchCustomersServed.mock.calls[0][2]).toBe('2021-08-26');
      expect(suppliersUtils.transformCustomersServedResponse).toHaveBeenCalledTimes(1);
    });

    it('should catch error with manager handleError', async () => {
      manager.repo.fetchCustomersServed.mockImplementationOnce(() => {
        throw new Error('');
      });
      await manager.getCustomersServed();

      expect(manager.handleError).toHaveBeenCalledTimes(1);
    });
  });

  // TODO: TESTES UNITARIOS
  describe.skip('Tests getSuppliersIndicators', () => {
    it('should fetch suppliers indicators and transform response', async () => {
      manager.repo.fetchSuppliersIndicators.mockResolvedValueOnce(
        mockResponseSuccessSuppliersIndicators
      );
      asyncStorage.getUserLogin.mockResolvedValueOnce('44184');
      generalUtils.mountWeekParam.mockReturnValueOnce('2021-08-26');
      const timeCourseParam = 'week';

      await manager.getSuppliersIndicators(timeCourseParam);
      expect(manager.repo.fetchSuppliersIndicators.mock.calls[0][0]).toBe('44184');
      expect(manager.repo.fetchSuppliersIndicators.mock.calls[0][1]).toBe('2021-08-26');
      expect(suppliersUtils.transformSuppliersIndicators).toHaveBeenCalledTimes(1);
    });

    it('should catch error with manager handleError', async () => {
      manager.repo.fetchSuppliersIndicators.mockImplementationOnce(() => {
        throw new Error('');
      });
      await manager.getSuppliersIndicators();

      expect(manager.handleError).toHaveBeenCalledTimes(1);
    });
  });
});
