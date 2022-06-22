/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { IIncentiveHasCustomers, IIncentiveCustomersBusiness } from 'shared/types';
import {
  transformIncentiveCustomers,
  transformIncentiveCustomersBusiness,
} from '../IncentiveCustomersUtils';
import IncentiveCustomersRepository from './IncentiveCustomersRepository';

export default class IncentiveCustomersManager extends BaseManager {
  repo: IncentiveCustomersRepository;

  constructor() {
    super();
    this.repo = new IncentiveCustomersRepository();
  }

  async getIncentivesCustomers(incentiveId: string): Promise<IIncentiveHasCustomers> {
    try {
      const response = await this.repo.fetchIncentivesCustomers(incentiveId);
      const transformedData = transformIncentiveCustomers(response.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getIncentivesCustomersBusiness(
    incentiveId: string,
    customerId: string
  ): Promise<IIncentiveCustomersBusiness[]> {
    try {
      const response = await this.repo.fetchIncentivesCustomersBusiness(incentiveId, customerId);
      const transformedData = transformIncentiveCustomersBusiness(response.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
