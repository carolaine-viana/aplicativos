import VisitModel from '@shared/models/Visit/VisitModel';
import { ICustomerCreateDto } from '@shared/models/Customer/ICustomerDtos';
import { IVisitCreateDto } from '@shared/types';
import CustomerModel from '@shared/models/Customer/CustomerModel';

export default class VisitRepository extends VisitModel {
  customerModel: CustomerModel;

  constructor() {
    super();
    this.customerModel = new CustomerModel();
  }

  public async createVisit(newVisit: IVisitCreateDto, customerId: string | number) {
    return this.createLocal({
      ...newVisit,
      visitCompleted: false,
      customerId: customerId.toString(),
    });
  }

  public async createCustomer(customerVisit: ICustomerCreateDto) {
    const created = await this.customerModel.createLocal(customerVisit);
    return created?.id;
  }

  public async checkCustomerExist(customerId: string) {
    const customer = await this.customerModel.collection.find(customerId);
    return Boolean(customer.id === customerId);
  }
}
