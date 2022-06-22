/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import IncentiveIndicatorsRepository from './IncentiveIndicatorsRepository';
import { transformIncentiveIndicatorsResponse } from '../incentiveIndicatorsUtils';

export default class IncentiveIndicatorsManager extends BaseManager {
  repo: IncentiveIndicatorsRepository;

  constructor() {
    super();
    this.repo = new IncentiveIndicatorsRepository();
  }

  async getIncentiveIndicators(incentiveId: string) {
    try {
      const response = await this.repo.fechIncentiveIndicators(incentiveId);
      const transformedData = transformIncentiveIndicatorsResponse(response.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
