import expect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import '../../../shared/utils/jestCustomMatchers';
import { MONTH_WEEKS_RESPONSE, CUSTOMERS_BY_FOCUS_SUPPLIER_RESPONSE } from './servedCustomers.mock';
import * as servedCustomersUtils from '../servedCustomersUtils';
import * as dateUtils from '@shared/utils/dateUtils';

jest.mock('@shared/utils/dateUtils', () => ({
  formatDate: jest.fn(),
}));

describe('Tests servedCustomersUtils', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('Tests transformWeeksResponse', () => {
    it('should covert snake case keys into camelCase', () => {
      const res = servedCustomersUtils.transformWeeksResponse(MONTH_WEEKS_RESPONSE.data);
      expect(res).toContainObject({
        ptBRFormat: '01/02/2022',
        universalFormat: '2022-02-01',
      });
    });
  });
  describe('Tests transformFocusSupplier', () => {
    it('should covert snake case keys into camelCase', () => {
      const res = servedCustomersUtils.transformFocusSupplier(CUSTOMERS_BY_FOCUS_SUPPLIER_RESPONSE);
      expect(res).toContainObject({
        tradeName: 'trade_name',
        companyName: 'company_name',
      });
    });
  });
  describe('Tests getDateParamFocusSupplierWeek', () => {
    it('should call format date', () => {
      const MOCK_ISODATE = '2022-01-24T00:00:00.000Z';
      const res = servedCustomersUtils.getDateParamFocusSupplierWeek(MOCK_ISODATE);
      expect(res).toEqual('2022-01-24');
    });
  });
  describe('Tests getDateParamFocusSupplierMonth', () => {
    it('should call format date', () => {
      servedCustomersUtils.getDateParamFocusSupplierMonth(new Date(2022, 1, 1));
      expect(dateUtils.formatDate).toHaveBeenCalled();
    });
    it('should NOT call format date', () => {
      servedCustomersUtils.getDateParamFocusSupplierMonth('2022-02-02');
      expect(dateUtils.formatDate).not.toHaveBeenCalled();
    });
  });
});
