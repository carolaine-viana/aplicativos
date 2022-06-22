import * as asyncStorage from '@shared/utils/asyncStorage';
import APIBFF from '@shared/base/api/APIBFF';
import { IGTListResponse, IRcasGVResponse } from 'shared/types';

export default class TeamListRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  // GV COM ACESSO AO RCA (endpoint novo)
  async fetchRCA() {
    const userLogin = await asyncStorage.getUserLogin();
    return this.apiBff.instance.get<IRcasGVResponse>(`/sales-managers/${userLogin}/sales-reps`);
  }

  // codigo do GTLISTREPOSITORY (usado no GTRCA)
  async fetchGT() {
    const userLogin = await asyncStorage.getUserLogin();
    return this.apiBff.instance.get<IGTListResponse>(
      `/sales-managers/${userLogin}/territory-managers`
    );
  }

  // CODIGO DO RCALITREPOITORY (usado no GVGT)
  async fetchGvGT(id: string) {
    return this.apiBff.instance.get(`/territory-managers/${id}/sales-reps`);
  }
}
