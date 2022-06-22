import { mapperVisits } from '@shared/utils';
import APIBFF from '@shared/base/api/APIBFF';
import VisitModel from '@shared/models/Visit/VisitModel';
import ClickemonModel from '@shared/models/Clickemon/ClickemonModel';
import CustomerModel from '@shared/models/Customer/CustomerModel';
import { IClickemonResponse, IVisitCustomer } from '@shared/types';

export default class CustomerRoutesRepository extends ClickemonModel {
  public apiBff;

  visitsModel: VisitModel;

  customerModel: CustomerModel;

  constructor() {
    super();
    this.apiBff = new APIBFF();
    this.visitsModel = new VisitModel();
    this.customerModel = new CustomerModel();
  }

  async getClickemons(userLogin: string, latitude: number, longitude: number, radius: number) {
    return this.apiBff.instance.get<IClickemonResponse>(
      `/sales-reps/${userLogin}/inactive-customers?latitude=${latitude}&longitude=${longitude}&radius=${radius}`
    );
  }

  async getVisits() {
    return this.visitsModel.getAllManualJoin<IVisitCustomer>(
      {
        rightTable: {
          name: 'customers',
          key: 'id',
        },
        leftTable: {
          name: 'visits',
          key: 'customer_id',
        },
      },
      mapperVisits
    );
  }

  async getCustomerById(customerId: string) {
    return this.customerModel.getById(customerId);
  }
}
