import APIBFF from '@shared/base/api/APIBFF';
import { IOrdersResponse } from '@shared/types';

export default class RepositoryName {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  fetchOrders() {
    const url = '';
    return this.apiBff.instance.get<IOrdersResponse>(url);
  }
}
