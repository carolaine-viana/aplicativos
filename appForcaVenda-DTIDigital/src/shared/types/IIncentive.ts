export interface IIncentive {
  id: string;
  name: string;
  targetGroup: string;
  status: string;
  startDate: string;
  endDate: string;
  mechanics: string;
  comments: string;
}

export interface IIncentiveDetail extends Partial<IIncentive> {
  salesForecast: number;
  salesResult: number;
  campaignName: string;
  campaignSalesForecast: number;
  campaignSalesResult: number;
  totalNumberOfDays: number;
  elapsedNumberOfDays: number;
  ruleDescription: string;
  awards: Array<{ rule: number; prize: string }>;
}
