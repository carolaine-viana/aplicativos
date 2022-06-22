/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { getUserLogin } from '@shared/utils/asyncStorage';
import { ICustomerReadDto } from '@shared/models/Customer';
import { mapperCustomers } from 'shared/utils/mappers/mapperCustomers';

import CustomerListRepository from './CustomerListRepository';
import { extractCustomersIdsVisits, transformCustomers } from '../customerListUtils';

export default class VisitManager extends BaseManager {
  repo: CustomerListRepository;

  constructor() {
    super();
    this.repo = new CustomerListRepository();
  }

  public async syncCustomers() {
    try {
      const userLogin = await getUserLogin();

      if (userLogin) {
        const response = await this.repo.getCustomers(userLogin);

        const transformedData = transformCustomers(response.data);
        await this.repo.deleteAll();
        await this.repo.insertMany(transformedData);
        return transformedData;
      }
    } catch {}
  }

  public async getCustomers(): Promise<ICustomerReadDto[] | undefined> {
    try {
      await this.syncCustomers();
      const userLogin = await getUserLogin();

      if (userLogin) {
        const customers = await this.repo.getAllLocal(mapperCustomers);
        return customers as ICustomerReadDto[];
      }
      return [];
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async getCustomersPendingVisit(): Promise<(string | undefined)[] | undefined> {
    try {
      const customerPendingVisistsIds = await this.repo.visitModel.getByField(
        'visit_completed',
        false
      );
      if (customerPendingVisistsIds) {
        const customersIds = extractCustomersIdsVisits(customerPendingVisistsIds);
        return customersIds;
      }
    } catch (error) {
      return this.handleError(error);
    }
  }
}
