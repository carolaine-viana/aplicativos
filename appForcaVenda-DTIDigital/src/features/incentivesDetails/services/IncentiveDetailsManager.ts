/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { IIncentiveDetail } from 'shared/types';
import { transformIncentiveDetailsResponse } from '../incentiveDetailsUtils';
import IncentiveDetailsRepository from './IncentiveDetailsRepository';

export default class IncentiveDetailsManager extends BaseManager {
  repo: IncentiveDetailsRepository;

  constructor() {
    super();
    this.repo = new IncentiveDetailsRepository();
  }

  async getIncentivesDetails(incentiveId: string): Promise<IIncentiveDetail> {
    try {
      const response = await this.repo.fetchIncentivesDetails(incentiveId);
      const transformedData = transformIncentiveDetailsResponse(response.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
