export interface IIncentivePerformanceIndicator {
  indicatorName: string;
  indicatorType: 'INTEGER' | 'DECIMAL';
  indicatorForecast: number;
  indicatorResult: number;
  indicatorGap: number;
  classification?: number;
  indicatorPercentage: number;
  indicatorFulfillment: string;
}
