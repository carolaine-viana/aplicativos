/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { IIncentiveBranch } from 'shared/types';
import { transformBranchesResponse } from '../branchesUtils';
import IncentivesBranchesRepository from './IncentivesBranchesRepository';

export default class ManagerName extends BaseManager {
  repo: IncentivesBranchesRepository;

  constructor() {
    super();
    this.repo = new IncentivesBranchesRepository();
  }

  async getBranches(incentiveId: string): Promise<Array<IIncentiveBranch>> {
    try {
      const res = await this.repo.fetchBranches(incentiveId);
      const transformedData = transformBranchesResponse(res.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
