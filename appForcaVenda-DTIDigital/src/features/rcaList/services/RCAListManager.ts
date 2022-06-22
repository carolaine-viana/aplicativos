/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { IRcaTerritory } from '@shared/types';
import RCAListRepository from './RCAListRepository';

export default class RCAListManager extends BaseManager {
  repo: RCAListRepository;

  constructor() {
    super();
    this.repo = new RCAListRepository();
  }

  async getRcasGt(): Promise<IRcaTerritory[] | undefined> {
    try {
      const response = await this.repo.getRcasGt();
      return response.data.sales_reps;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
