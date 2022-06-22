import expect from 'expect';
import APIBFFMock from '../../../shared/base/api/APIBFF';
import IncentiveCustomersRepository from '../services/IncentiveCustomersRepository';

jest.mock('../../../shared/base/api/APIBFF', () => {
  return class APIBFFMock {
    instance = {
      get: jest.fn(),
    };
  };
});

const INCENTIVE_ID_MOCK = '2740';
const CUSTOMER_ID_MOCK = '5081982';

describe('Tests IncentiveCustomersRepository', () => {
  let repository = new IncentiveCustomersRepository();
  afterEach(() => {
    jest.resetAllMocks();
  });
  describe('Tests fetchIncentivesCustomers', () => {
    it(`should call incentive customers API with incentiveId ${INCENTIVE_ID_MOCK}`, async () => {
      await repository.fetchIncentivesCustomers(INCENTIVE_ID_MOCK);
      expect(repository.apiBff.instance.get).toHaveBeenCalled();
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('/business-incentives/');
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(INCENTIVE_ID_MOCK);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('/customers');
    });
  });
  describe('Tests fetchIncentivesCustomersBusiness', () => {
    it(`should call incentive customers API with incentiveId ${INCENTIVE_ID_MOCK} and customerId ${CUSTOMER_ID_MOCK}`, async () => {
      await repository.fetchIncentivesCustomersBusiness(INCENTIVE_ID_MOCK, CUSTOMER_ID_MOCK);
      expect(repository.apiBff.instance.get).toHaveBeenCalled();
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('/business-incentives/');
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        `${INCENTIVE_ID_MOCK}/customers/${CUSTOMER_ID_MOCK}`
      );
    });
  });
});
