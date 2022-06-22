/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import OrdersRepository from './OrdersRepository';
// import { transformOrdersReponse } from '../ordersUtils';

export default class ManagerName extends BaseManager {
  repo: OrdersRepository;

  constructor() {
    super();
    this.repo = new OrdersRepository();
  }

  async getOrders() {
    try {
      // const response = await this.repo.fetchOrders();
      // const transformedData = transformOrdersReponse();
      // return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
