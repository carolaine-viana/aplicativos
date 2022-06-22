import APIBFF from '@shared/base/api/APIBFF';
import { IBestResultResponse, Profiles } from 'shared/types';
import { getUserRole } from 'shared/utils/asyncStorage';

export default class BestResultRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  async fetchBestResult(userLogin: string) {
    const role = await getUserRole();

    if (role === Profiles.RCA) {
      return this.apiBff.instance.get<IBestResultResponse>(
        `/sales-reps/${userLogin}/performance-indicators-best-result`
      );
    }

    if (role === Profiles.GT) {
      return this.apiBff.instance.get<IBestResultResponse>(
        `/territory-managers/${userLogin}/team-performance-indicators-best-result`
      );
    }
  }
}
