import expect from 'expect';
import {
  transformIncentiveCustomers,
  transformIncentiveCustomersBusiness,
} from '../IncentiveCustomersUtils';

import {
  INCENTIVES_CUSTOMERS_DATA_RESPONSE,
  INCENTIVES_CUSTOMERS_BUSINESS_DATA_RESPONSE,
} from './responses.mock';

describe('Testes IncentiveCustomersUtils', () => {
  it('should transform snake_case into camelCase for INCENTIVES_CUSTOMERS_DATA_RESPONSE ', () => {
    const res = transformIncentiveCustomers(INCENTIVES_CUSTOMERS_DATA_RESPONSE.data);
    expect(res).toHaveProperty('businessIncentiveCustomersStructure');
    expect(res).toHaveProperty('hasCustomers');
    expect(res.businessIncentiveCustomersStructure).toHaveLength(1);
    expect(res.businessIncentiveCustomersStructure[0]).toHaveProperty('businessSegment');
    expect(res.businessIncentiveCustomersStructure[0]).toHaveProperty('businessUnit');
    expect(res.businessIncentiveCustomersStructure[0]).toHaveProperty('state');
  });

  it('should transform snake_case into camelCase for INCENTIVES_CUSTOMERS_BUSINESS_DATA_RESPONSE', () => {
    const res = transformIncentiveCustomersBusiness(
      INCENTIVES_CUSTOMERS_BUSINESS_DATA_RESPONSE.data
    );
    expect(res).toHaveLength(1);
    expect(res[0]).toHaveProperty('id');
    expect(res[0]).toHaveProperty('name');
    expect(res[0]).toHaveProperty('operationType');
  });
});
