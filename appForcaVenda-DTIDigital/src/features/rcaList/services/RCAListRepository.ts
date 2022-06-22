// import SomeModel from '@shared/models/';
import * as asyncStorage from '@shared/utils/asyncStorage';
import APIBFF from '@shared/base/api/APIBFF';
import { IRcasGTResponse } from 'shared/types';

export default class RCAListRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  async getRcasGt() {
    const userLogin = await asyncStorage.getUserLogin();
    return this.apiBff.instance.get<IRcasGTResponse>(`/territory-managers/${userLogin}/sales-reps`);
  }
}
