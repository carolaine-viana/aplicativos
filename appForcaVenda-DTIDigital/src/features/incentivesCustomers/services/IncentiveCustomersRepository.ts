import APIBFF from '@shared/base/api/APIBFF';
import { IIncentiveCustomersResponse, IIncentiveCustomersBusinessResponse } from 'shared/types';

export default class IncentiveCustomersRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  fetchIncentivesCustomers(incentiveId: string) {
    const url = `/business-incentives/${incentiveId}/customers`;
    return this.apiBff.instance.get<IIncentiveCustomersResponse>(url);
  }

  fetchIncentivesCustomersBusiness(incentiveId: string, customerId: string) {
    const url = `/business-incentives/${incentiveId}/customers/${customerId}`;

    return this.apiBff.instance.get<IIncentiveCustomersBusinessResponse>(url);
  }
}
