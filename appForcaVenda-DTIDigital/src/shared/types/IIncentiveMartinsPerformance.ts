import { TFullfillment } from './TFullfillment';

interface IIncentiveMartinsIndicator {
  indicatorName: string;
  indicatorType: string;
  indicatorForecast: number;
  indicatorResult: number;
  earnedValue: number;
  indicatorPercentage: number;
  indicatorFulfillment: TFullfillment;
}

interface IIncentiveMartinsIndicatorWeek extends IIncentiveMartinsIndicator {
  week: string;
}

export { IIncentiveMartinsIndicator, IIncentiveMartinsIndicatorWeek };
