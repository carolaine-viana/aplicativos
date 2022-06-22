import expect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import * as asyncStorage from '@shared/utils/asyncStorage';
import ServedCustomersManager from '../services/ServedCustomersManager';
import ServedCustomersRepositoryMock from '../services/ServedCustomersRepository';
import { MONTH_WEEKS_RESPONSE, CUSTOMERS_BY_FOCUS_SUPPLIER_RESPONSE } from './servedCustomers.mock';
import * as servedCustomersUtils from '../servedCustomersUtils';

jest.mock('../servedCustomersUtils', () => ({
  transformWeeksResponse: jest.fn(),
  transformFocusSupplier: jest.fn(),
  getDateParamFocusSupplierMonth: jest.fn(),
  getDateParamFocusSupplierWeek: jest.fn(),
}));

jest.mock('@shared/utils/asyncStorage', () => ({
  getUserLogin: jest.fn(),
}));

jest.mock('../services/ServedCustomersRepository', () => {
  return class ServedCustomersRepositoryMock {
    fetchMonthWeeks = jest.fn();
    fetchFocusSupplierWeek = jest.fn();
    fetchFocusSupplierMonth = jest.fn();
  };
});

describe('Tests ServedCustomersManager', () => {
  let manager;
  const MOCK_YEAR_MONTH = '202202';
  const MOCK_YEAR_MONTH_DAY_PARAM = '2022-02-01';
  const MOCK_SUPPLIER_TYPE = 'foco';
  const MOCK_USER_ID = '2560';
  beforeAll(() => {
    manager = new ServedCustomersManager();
    manager.repo = new ServedCustomersRepositoryMock();
    manager.handleError = jest.fn();
  });

  describe('Tests on getMonthWeeks ', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should call repo and transform response', async () => {
      manager.repo.fetchMonthWeeks.mockResolvedValueOnce(MONTH_WEEKS_RESPONSE);
      await manager.getMonthWeeks(new Date(2022, 1, 1));

      expect(manager.repo.fetchMonthWeeks).toHaveBeenCalled();
      expect(servedCustomersUtils.transformWeeksResponse).toHaveBeenCalledWith(
        MONTH_WEEKS_RESPONSE.data
      );
    });
    it('should NOT call transform response when repo throws an error', async () => {
      const ERROR = new Error('error from repo fetchMonthWeeks');
      manager.repo.fetchMonthWeeks.mockImplementationOnce(() => {
        throw ERROR;
      });

      await manager.getMonthWeeks(new Date(2022, 1, 1));

      expect(manager.repo.fetchMonthWeeks).toHaveBeenCalled();
      expect(servedCustomersUtils.transformWeeksResponse).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalled();
    });
  });

  describe('Tests on getFocusSupplierWeek ', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should call repo and transform response', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_USER_ID);
      servedCustomersUtils.getDateParamFocusSupplierWeek.mockReturnValueOnce(
        MOCK_YEAR_MONTH_DAY_PARAM
      );
      manager.repo.fetchFocusSupplierWeek.mockResolvedValueOnce(
        CUSTOMERS_BY_FOCUS_SUPPLIER_RESPONSE
      );

      await manager.getFocusSupplierWeek(MOCK_YEAR_MONTH_DAY_PARAM, MOCK_SUPPLIER_TYPE);

      expect(asyncStorage.getUserLogin).toHaveBeenCalled();
      expect(manager.repo.fetchFocusSupplierWeek).toHaveBeenCalledWith(
        MOCK_USER_ID,
        MOCK_SUPPLIER_TYPE,
        MOCK_YEAR_MONTH_DAY_PARAM
      );
      expect(servedCustomersUtils.transformFocusSupplier).toHaveBeenCalledWith(
        CUSTOMERS_BY_FOCUS_SUPPLIER_RESPONSE.data
      );
    });
    it('should NOT transform response when fetchFocusSupplierWeek throws and error', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_USER_ID);

      servedCustomersUtils.getDateParamFocusSupplierWeek.mockReturnValueOnce(
        MOCK_YEAR_MONTH_DAY_PARAM
      );

      manager.repo.fetchFocusSupplierWeek.mockImplementationOnce(() => {
        throw new Error('error fetchFocusSupplierWeek');
      });

      await manager.getFocusSupplierWeek(MOCK_YEAR_MONTH_DAY_PARAM, MOCK_SUPPLIER_TYPE);

      expect(asyncStorage.getUserLogin).toHaveBeenCalled();
      expect(manager.repo.fetchFocusSupplierWeek).toHaveBeenCalledWith(
        MOCK_USER_ID,
        MOCK_SUPPLIER_TYPE,
        MOCK_YEAR_MONTH_DAY_PARAM
      );
      expect(servedCustomersUtils.transformFocusSupplier).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalledTimes(1);
    });
  });
  describe('Tests on getFocusSupplierMonth ', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should call repo and transform response', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_USER_ID);
      servedCustomersUtils.getDateParamFocusSupplierMonth.mockReturnValueOnce(MOCK_YEAR_MONTH);
      manager.repo.fetchFocusSupplierMonth.mockResolvedValueOnce(
        CUSTOMERS_BY_FOCUS_SUPPLIER_RESPONSE
      );

      await manager.getFocusSupplierMonth(MOCK_YEAR_MONTH, MOCK_SUPPLIER_TYPE);

      expect(asyncStorage.getUserLogin).toHaveBeenCalled();
      expect(manager.repo.fetchFocusSupplierMonth).toHaveBeenCalledWith(
        MOCK_USER_ID,
        MOCK_SUPPLIER_TYPE,
        MOCK_YEAR_MONTH
      );
      expect(servedCustomersUtils.transformFocusSupplier).toHaveBeenCalledWith(
        CUSTOMERS_BY_FOCUS_SUPPLIER_RESPONSE.data
      );
    });
    it('should NOT transform response when fetchFocusSupplierMonth throws and error', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_USER_ID);

      servedCustomersUtils.getDateParamFocusSupplierMonth.mockReturnValueOnce(MOCK_YEAR_MONTH);

      manager.repo.fetchFocusSupplierMonth.mockImplementationOnce(() => {
        throw new Error('error fetchFocusSupplierMonth');
      });

      await manager.getFocusSupplierMonth(MOCK_YEAR_MONTH, MOCK_SUPPLIER_TYPE);

      expect(asyncStorage.getUserLogin).toHaveBeenCalled();
      expect(manager.repo.fetchFocusSupplierMonth).toHaveBeenCalledWith(
        MOCK_USER_ID,
        MOCK_SUPPLIER_TYPE,
        MOCK_YEAR_MONTH
      );
      expect(servedCustomersUtils.transformFocusSupplier).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalledTimes(1);
    });
  });
});
