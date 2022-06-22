import VisitModel from 'shared/models/Visit/VisitModel';
import CustomerModel from '../../../shared/models/Customer/CustomerModel';
import APIBFF from '../../../shared/base/api/APIBFF';
import { ICustomerResponse } from '../../../shared/types';

export default class CustomerListRepository extends CustomerModel {
  visitModel;

  public apiBff;

  constructor() {
    super();
    this.visitModel = new VisitModel();
    this.apiBff = new APIBFF();
  }

  async getCustomers(userLogin: string) {
    const url = `/sales-reps/${userLogin}/customers`;
    return this.apiBff.instance.get<ICustomerResponse>(url);
  }
}
