import { IIncentiveDetailsResponse, IIncentiveDetail } from 'shared/types';

export const transformIncentiveDetailsResponse = (
  data: IIncentiveDetailsResponse
): IIncentiveDetail => {
  const details = data.business_incentives[0];
  return {
    ...details,
    id: details?.id?.toString(),
    salesForecast: details.sales_forecast,
    salesResult: details.sales_result,
    campaignName: details.campaign_name,
    campaignSalesForecast: details.campaign_sales_forecast,
    campaignSalesResult: details.campaign_sales_result,
    totalNumberOfDays: details.total_number_of_days,
    elapsedNumberOfDays: details.elapsed_number_of_days,
    ruleDescription: details.rule_description,
  };
};
