import expect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import APIBFFMock from '@shared/base/api/APIBFF';
import ServedCustomersRepository from '../services/ServedCustomersRepository';

jest.mock(
  '@shared/base/api/APIBFF',
  () =>
    class APIBFFMock {
      get = jest.fn();
    }
);

describe('Tests ServedCustomersRepository', () => {
  const MOCK_YEAR_MONTH_PARAM = '202202';
  const MOCK_YEAR_MONTH_DAY_PARAM = '2022-02-01';
  const MOCK_SUPPLIER_TYPE = 'foco';
  const MOCK_USER_ID = '2560';

  let repository;
  beforeAll(() => {
    repository = new ServedCustomersRepository();
    repository.apiBff.instance = new APIBFFMock();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it(`should call request to GET weeks of certain month`, () => {
    repository.fetchMonthWeeks(MOCK_YEAR_MONTH_PARAM);
    expect(repository.apiBff.instance.get).toHaveBeenCalled();
    expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
      `/sales-incentives/month/${MOCK_YEAR_MONTH_PARAM}/weeks`
    );
  });
  it(`should call request to GET focus supplier by week and type `, () => {
    repository.fetchFocusSupplierWeek(MOCK_USER_ID, MOCK_SUPPLIER_TYPE, MOCK_YEAR_MONTH_DAY_PARAM);
    expect(repository.apiBff.instance.get).toHaveBeenCalled();
    expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
      `/sales-reps/${MOCK_USER_ID}/focus-suppliers/customers-results?type=${MOCK_SUPPLIER_TYPE}&week=${MOCK_YEAR_MONTH_DAY_PARAM}`
    );
  });
  it(`should call request to GET focus supplier by month and type `, () => {
    repository.fetchFocusSupplierMonth(MOCK_USER_ID, MOCK_SUPPLIER_TYPE, MOCK_YEAR_MONTH_PARAM);
    expect(repository.apiBff.instance.get).toHaveBeenCalled();
    expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
      `/sales-reps/${MOCK_USER_ID}/focus-suppliers/customers-results?type=${MOCK_SUPPLIER_TYPE}&month=${MOCK_YEAR_MONTH_PARAM}`
    );
  });
});
