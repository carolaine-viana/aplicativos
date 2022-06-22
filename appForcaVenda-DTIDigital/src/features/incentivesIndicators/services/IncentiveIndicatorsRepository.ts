import APIBFF from '@shared/base/api/APIBFF';
import { IIncentiveIndicatorsResponse } from 'shared/types';

export default class IncentiveIndicatorsRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  fechIncentiveIndicators(incentiveId: string) {
    const url = `/business-incentives/${incentiveId}/indicators`;
    return this.apiBff.instance.get<IIncentiveIndicatorsResponse>(url);
  }
}
