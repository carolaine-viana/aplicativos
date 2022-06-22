interface IPerformanceIndicatorResponse {
  indicator_name: string;
  indicator_type: 'INTEGER' | 'DECIMAL';
  indicator_forecast: number;
  indicator_result: number;
  indicator_gap: number;
  sales_rep_classification?: number;
  territory_manager_classification?: number;
  indicator_percentage: number;
  indicator_fulfillment: string;
}

export interface IIncentivePerformanceResponse {
  business_incentive_performance_indicators: Array<IPerformanceIndicatorResponse>;
}
