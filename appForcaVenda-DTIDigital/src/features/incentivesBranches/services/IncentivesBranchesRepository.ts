import APIBFF from '@shared/base/api/APIBFF';
import { IBranchesResponse } from 'shared/types';

export default class IncentivesBranchesRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  async fetchBranches(incentiveId: string) {
    return this.apiBff.instance.get<IBranchesResponse>(
      `business-incentives/${incentiveId}/branches`
    );
  }
}
