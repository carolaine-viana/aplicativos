import { TFullfillment } from '../TFullfillment';

interface IIncentiveMartinsIndicatorResponse {
  indicator_name: string;
  indicator_type: string;
  indicator_forecast: number;
  indicator_result: number;
  earned_value: number;
  indicator_percentage: number;
  indicator_fulfillment: TFullfillment;
}
interface IIncentiveMartinsPerformanceResponse {
  sales_incentive_performance_indicators: Array<IIncentiveMartinsIndicatorResponse>;
}
interface IIncentiveMartinsPerformanceWeeksResponse {
  weeks: Array<{
    week: string;
    sales_incentive_performance_indicators: Array<IIncentiveMartinsIndicatorResponse>;
  }>;
}

export {
  IIncentiveMartinsPerformanceResponse,
  IIncentiveMartinsPerformanceWeeksResponse,
  IIncentiveMartinsIndicatorResponse,
};
