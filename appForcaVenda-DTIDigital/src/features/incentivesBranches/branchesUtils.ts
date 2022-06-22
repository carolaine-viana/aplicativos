import { IBranchesResponse, IIncentiveBranch } from 'shared/types';

export const transformBranchesResponse = (data: IBranchesResponse): Array<IIncentiveBranch> =>
  data.business_incentive_branches;
