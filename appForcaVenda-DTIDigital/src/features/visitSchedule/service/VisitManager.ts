/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { ICustomerCreateDto } from '@shared/models/Customer/ICustomerDtos';
import { IVisitCreateDto } from '@shared/types';
import VisitRepository from './VisitRepository';

export default class VisitManager extends BaseManager {
  repo: VisitRepository;

  constructor() {
    super();
    this.repo = new VisitRepository();
  }

  public async saveVisit(customerVisit: ICustomerCreateDto, newVisit: IVisitCreateDto) {
    try {
      if (customerVisit.id) {
        const customerExist = await this.repo.checkCustomerExist(customerVisit.id.toString());
        if (customerExist) {
          const createdVisit = await this.repo.createVisit(newVisit, customerVisit.id);
          return createdVisit;
        }
        const customerCreated = await this.repo.createCustomer(customerVisit);
        if (customerCreated) {
          const createdVisit = await this.repo.createVisit(newVisit, customerCreated);
          return createdVisit;
        }
      }
      return null;
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async editVisit(customerVisit: ICustomerCreateDto) {
    try {
      if (customerVisit.id) {
        const customerExist = await this.repo.checkCustomerExist(customerVisit.id.toString());
        if (customerExist) {
          const updatedVisit = await this.repo.update((editVisit) => editVisit);
          return updatedVisit;
        }
      }
      return null;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
