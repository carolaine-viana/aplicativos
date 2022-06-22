import expect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import CustomerListRepository from '../service/CustomerListRepository';
import APIBFF from '../../../shared/base/api/APIBFF';

jest.mock('../../../shared/models/Customer/CustomerModel', () => {
  return class MockCustomerModel {
    constructor() {}
  };
});

jest.mock('../../../shared/models/Visit/VisitModel', () => {
  return class MockVisitModel {
    constructor() {}
  };
});

jest.mock('../../../shared/base/api/APIBFF', () => {
  return class MockAPIBFF {
    constructor() {}
    get = jest.fn();
  };
});

describe('Tests CustomerListRepository', () => {
  const MOCK_USER_ID = '1234';
  let repository;

  beforeAll(() => {
    repository = new CustomerListRepository();
    repository.apiBff.instance = new APIBFF();
  });

  it('should call bff API to fetch customers', async () => {
    await repository.getCustomers(MOCK_USER_ID);
    expect(repository.apiBff.instance.get).toHaveBeenCalled();
    expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
      `sales-reps/${MOCK_USER_ID}/customers`
    );
  });
});
