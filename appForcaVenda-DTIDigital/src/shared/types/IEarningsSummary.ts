export interface IEarningsSummary {
  id: number;
  month: number;
  totalDebts: number;
  totalCredits: number;
  openingBalance: number;
  finalBalance: number;
  taxes: number;
  availableBalance: number;
}
