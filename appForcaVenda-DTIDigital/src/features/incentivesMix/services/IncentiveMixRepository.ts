import APIBFF from '@shared/base/api/APIBFF';
import { IMixResponse } from 'shared/types';

export default class IncentiveProductsRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  fetchMix(incentiveId: string) {
    const url = `/business-incentives/${incentiveId}/products`;
    return this.apiBff.instance.get<IMixResponse>(url);
  }
}
