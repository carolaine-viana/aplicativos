import expect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import MockVisitModel from '../../../shared/models/Visit/VisitModel';
import MockCustomerListRepository from '../service/CustomerListRepository';
import CustomerListManager from '../service/CustomerListManager';
import * as customerListUtils from '../customerListUtils';
import * as asyncStorage from '../../../shared/utils/asyncStorage';
import * as mockMapper from '../../../shared/utils/mappers/mapperCustomers';

jest.mock('../../../shared/utils/mappers/mapperCustomers');

jest.mock('../../../shared/models/Visit/VisitModel', () => {
  return class MockVisitModel {
    constructor() {}
    getByField = jest.fn();
  };
});

jest.mock('../service/CustomerListRepository', () => {
  return class MockCustomerListRepository {
    constructor() {}
    deleteAll = jest.fn();
    insertMany = jest.fn();
    getCustomers = jest.fn();
    getAllLocal = jest.fn();
    visitModel = new MockVisitModel();
  };
});

describe('Tests CustomerListManager', () => {
  const MOCK_USER_ID = '1234';
  let manager;

  const MOCK_CUSTOMERS_RESPONSE = {
    data: [],
  };

  beforeAll(() => {
    manager = new CustomerListManager();
    manager.handleError = jest.fn();
    manager.repo = new MockCustomerListRepository();

    customerListUtils.transformCustomers = jest.fn();
    customerListUtils.extractCustomersIdsVisits = jest.fn();

    asyncStorage.getUserLogin = jest.fn();

    mockMapper.mapperCustomers = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Tests on syncCustomers', () => {
    it('should fetch customers, delete all from local DB and insert the new ones', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_USER_ID);
      manager.repo.getCustomers.mockResolvedValueOnce(MOCK_CUSTOMERS_RESPONSE);

      await manager.syncCustomers();

      expect(asyncStorage.getUserLogin).toHaveBeenCalled();
      expect(manager.repo.getCustomers).toHaveBeenCalled();
      expect(customerListUtils.transformCustomers).toHaveBeenCalledWith(
        MOCK_CUSTOMERS_RESPONSE.data
      );
      expect(manager.repo.deleteAll).toHaveBeenCalled();
      expect(manager.repo.insertMany).toHaveBeenCalled();
    });
  });

  describe('Tests on getCustomers', () => {
    it('should fetch customers, delete all from local DB and insert the new ones', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce('MOCK_USER_ID');

      const spySyncCustomers = jest.spyOn(manager, 'syncCustomers');
      spySyncCustomers.mockResolvedValueOnce(true);

      await manager.getCustomers();

      expect(spySyncCustomers).toHaveBeenCalled();
      expect(asyncStorage.getUserLogin).toHaveBeenCalled();
      expect(manager.repo.getAllLocal).toHaveBeenCalled();
    });
    it('should call  handleError in case of exceptions', async () => {
      const MOCK_ERROR_SYNC = new Error('erro on sync');

      asyncStorage.getUserLogin.mockResolvedValueOnce('MOCK_USER_ID');

      const spySyncCustomers = jest.spyOn(manager, 'syncCustomers');
      spySyncCustomers.mockImplementationOnce(() => {
        throw MOCK_ERROR_SYNC;
      });

      await manager.getCustomers();

      expect(spySyncCustomers).toHaveBeenCalled();
      expect(asyncStorage.getUserLogin).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalledWith(MOCK_ERROR_SYNC);
    });
  });

  describe('Tests on getCustomersPendingVisit', () => {
    const MOCK_PENDING_VISITS = ['SOME PENDING VISITS'];
    it('should call visitModel to get only pending visits', async () => {
      manager.repo.visitModel.getByField.mockResolvedValueOnce(MOCK_PENDING_VISITS);

      await manager.getCustomersPendingVisit();

      expect(manager.repo.visitModel.getByField).toHaveBeenCalled();
      expect(customerListUtils.extractCustomersIdsVisits).toHaveBeenCalledWith(MOCK_PENDING_VISITS);
    });
    it('should call visitModel to get only pending visits', async () => {
      const MOCK_ERROR_DB = new Error('ERROR FROM DB');

      manager.repo.visitModel.getByField.mockImplementationOnce(() => {
        throw MOCK_ERROR_DB;
      });

      await manager.getCustomersPendingVisit();

      expect(manager.repo.visitModel.getByField).toHaveBeenCalled();
      expect(customerListUtils.extractCustomersIdsVisits).not.toHaveBeenCalled();
      expect(manager.handleError).toHaveBeenCalledWith(MOCK_ERROR_DB);
    });
  });
});
