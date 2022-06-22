/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { IEarningsStatement, IEarningsSummary } from 'shared/types';
import { getUserLogin } from 'shared/utils/asyncStorage';
import { transformEarningsResponses } from '../statementUtils';
import StatementRepository from './StatementRepository';

export default class StatementManager extends BaseManager {
  public repo;

  constructor() {
    super();
    this.repo = new StatementRepository();
  }

  async getStatementData(monthSelectedValue?: string): Promise<{
    summaryEarnings: IEarningsSummary | null;
    statementEarnings: IEarningsStatement[];
  }> {
    try {
      const rcaId = (await getUserLogin()) as string;
      const monthReqParam = `month=${monthSelectedValue}`;
      const summaryEarningsPromise = await this.repo.fetchEarningsSummary(rcaId, monthReqParam);
      const statementEarningsPromise = await this.repo.fetchEarningsStatement(rcaId, monthReqParam);

      const transformedData = transformEarningsResponses([
        summaryEarningsPromise.data,
        statementEarningsPromise.data,
      ]);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
