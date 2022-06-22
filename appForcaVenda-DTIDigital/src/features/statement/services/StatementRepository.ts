import APIBFF from '@shared/base/api/APIBFF';
import { ISummaryResponse, IStatementResponse } from 'shared/types';

export default class StatementRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  async fetchEarningsSummary(rcaId: string, monthReqParam: string) {
    const url = `/sales-reps/${rcaId}/earnings-summary?${monthReqParam}`;
    return this.apiBff.instance.get<ISummaryResponse>(url);
  }

  async fetchEarningsStatement(rcaId: string, monthReqParam: string) {
    const url = `/sales-reps/${rcaId}/earnings-statement?${monthReqParam}`;
    return this.apiBff.instance.get<IStatementResponse>(url);
  }
}
