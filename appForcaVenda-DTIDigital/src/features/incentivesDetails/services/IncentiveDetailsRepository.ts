import APIBFF from '@shared/base/api/APIBFF';
import { IIncentiveDetailsResponse } from 'shared/types';

export default class IncentiveDetailsRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  fetchIncentivesDetails(incentiveId: string) {
    const url = `/business-incentives/${incentiveId}`;
    return this.apiBff.instance.get<IIncentiveDetailsResponse>(url);
  }
}
