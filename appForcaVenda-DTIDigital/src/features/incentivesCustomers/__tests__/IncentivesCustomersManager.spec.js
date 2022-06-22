import expect from 'expect';
import * as incentiveCustomersUtils from '../IncentiveCustomersUtils';
import IncentivesCustomersManager from '../services/IncentivesCustomersManager';
import {
  CUSTOMER_ID_MOCK,
  INCENTIVE_ID_MOCK,
  INCENTIVES_CUSTOMERS_DATA_RESPONSE,
  INCENTIVES_CUSTOMERS_BUSINESS_DATA_RESPONSE,
} from './responses.mock';

jest.mock('../../../shared/base/api/BaseManager');

jest.mock('../services/IncentiveCustomersRepository', () => {
  return class IncentiveCustomersRepositoryMock {
    fetchIncentivesCustomers = jest.fn();
    fetchIncentivesCustomersBusiness = jest.fn();
  };
});

jest.mock('../IncentiveCustomersUtils', () => ({
  transformIncentiveCustomers: jest.fn(),
  transformIncentiveCustomersBusiness: jest.fn(),
}));

describe('Tests IncentivesCustomersManager', () => {
  let manager = new IncentivesCustomersManager();
  const ERROR_FROM_REPO = new Error('Error from repo');
  const ERROR_FROM_TRANSFORM = new Error('Error from transform');

  beforeAll(() => {
    manager.handleError = jest.fn();
  });

  describe('Tests getIncentivesCustomers()', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('should call repo.fetchIncentivesCustomers and transform response ', async () => {
      manager.repo.fetchIncentivesCustomers.mockResolvedValueOnce(
        INCENTIVES_CUSTOMERS_DATA_RESPONSE
      );

      await manager.getIncentivesCustomers(INCENTIVE_ID_MOCK);

      expect(manager.repo.fetchIncentivesCustomers).toHaveBeenCalledWith(INCENTIVE_ID_MOCK);
      expect(incentiveCustomersUtils.transformIncentiveCustomers).toHaveBeenCalledWith(
        INCENTIVES_CUSTOMERS_DATA_RESPONSE.data
      );
    });
    it('should handle error when repo.fetchIncentivesCustomers throws an error ', async () => {
      manager.repo.fetchIncentivesCustomers.mockImplementationOnce(() => {
        throw ERROR_FROM_REPO;
      });

      await manager.getIncentivesCustomers(INCENTIVE_ID_MOCK);

      expect(manager.handleError).toHaveBeenCalledWith(ERROR_FROM_REPO);
      expect(incentiveCustomersUtils.transformIncentiveCustomers).not.toHaveBeenCalled();
    });

    it('should handle error when transformIncentiveCustomers throws an error ', async () => {
      manager.repo.fetchIncentivesCustomers.mockResolvedValueOnce(
        INCENTIVES_CUSTOMERS_DATA_RESPONSE
      );

      incentiveCustomersUtils.transformIncentiveCustomers.mockImplementationOnce(() => {
        throw ERROR_FROM_TRANSFORM;
      });

      await manager.getIncentivesCustomers(INCENTIVE_ID_MOCK);

      expect(manager.repo.fetchIncentivesCustomers).toHaveBeenCalled();
      expect(incentiveCustomersUtils.transformIncentiveCustomers).toHaveBeenCalledWith(
        INCENTIVES_CUSTOMERS_DATA_RESPONSE.data
      );
      expect(manager.handleError).toHaveBeenCalledTimes(1);
      expect(manager.handleError).toHaveBeenCalledWith(ERROR_FROM_TRANSFORM);
    });
  });

  describe('Tests getIncentivesCustomersBusiness()', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('should call repo.fetchIncentivesCustomersBusiness and transform response ', async () => {
      manager.repo.fetchIncentivesCustomersBusiness.mockResolvedValueOnce(
        INCENTIVES_CUSTOMERS_BUSINESS_DATA_RESPONSE
      );

      await manager.getIncentivesCustomersBusiness(INCENTIVE_ID_MOCK, CUSTOMER_ID_MOCK);

      expect(manager.repo.fetchIncentivesCustomersBusiness).toHaveBeenCalledWith(
        INCENTIVE_ID_MOCK,
        CUSTOMER_ID_MOCK
      );
      expect(incentiveCustomersUtils.transformIncentiveCustomersBusiness).toHaveBeenCalledWith(
        INCENTIVES_CUSTOMERS_BUSINESS_DATA_RESPONSE.data
      );
    });

    it('should handle error when repo.fetchIncentivesCustomersBusiness throws an error ', async () => {
      manager.repo.fetchIncentivesCustomersBusiness.mockImplementationOnce(() => {
        throw ERROR_FROM_REPO;
      });

      await manager.getIncentivesCustomersBusiness(INCENTIVE_ID_MOCK, CUSTOMER_ID_MOCK);

      expect(manager.handleError).toHaveBeenCalledTimes(1);
      expect(manager.handleError).toHaveBeenCalledWith(ERROR_FROM_REPO);
      expect(incentiveCustomersUtils.transformIncentiveCustomersBusiness).not.toHaveBeenCalled();
    });

    it('should handle error when transformIncentiveCustomersBusiness throws an error ', async () => {
      manager.repo.fetchIncentivesCustomersBusiness.mockResolvedValueOnce(
        INCENTIVES_CUSTOMERS_BUSINESS_DATA_RESPONSE
      );

      incentiveCustomersUtils.transformIncentiveCustomersBusiness.mockImplementationOnce(() => {
        throw ERROR_FROM_TRANSFORM;
      });

      await manager.getIncentivesCustomersBusiness(INCENTIVE_ID_MOCK, CUSTOMER_ID_MOCK);

      expect(manager.repo.fetchIncentivesCustomersBusiness).toHaveBeenCalled();
      expect(incentiveCustomersUtils.transformIncentiveCustomersBusiness).toHaveBeenCalledWith(
        INCENTIVES_CUSTOMERS_BUSINESS_DATA_RESPONSE.data
      );
      expect(manager.handleError).toHaveBeenCalledTimes(1);
      expect(manager.handleError).toHaveBeenCalledWith(ERROR_FROM_TRANSFORM);
    });
  });
});
