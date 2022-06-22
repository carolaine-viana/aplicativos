import { IIncentiveIndicator, IIncentiveIndicatorsResponse } from 'shared/types';

export const transformIncentiveIndicatorsResponse = (
  data: IIncentiveIndicatorsResponse
): Array<IIncentiveIndicator> => data.business_incentive_indicators;
