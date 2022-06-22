/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { transformMixResponse } from '../incetiveMixUtils';
import IncentiveMixRepository from './IncentiveMixRepository';

export default class IncentiveMixManager extends BaseManager {
  repo: IncentiveMixRepository;

  constructor() {
    super();
    this.repo = new IncentiveMixRepository();
  }

  async getIncentiveMix(incentiveId: string) {
    try {
      const response = await this.repo.fetchMix(incentiveId);
      const transformedData = transformMixResponse(response.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
