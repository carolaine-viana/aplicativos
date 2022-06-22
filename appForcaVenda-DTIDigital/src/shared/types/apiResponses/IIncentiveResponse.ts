interface IIncentiveRes {
  id: number;
  comments: string;
  name: string;
  target_group: string;
  status: string;
  start_date: string;
  end_date: string;
  mechanics: string;
}

interface IIncentiveDetailRes extends Partial<IIncentiveRes> {
  sales_forecast: number;
  sales_result: number;
  campaign_name: string;
  campaign_sales_forecast: number;
  campaign_sales_result: number;
  total_number_of_days: number;
  elapsed_number_of_days: number;
  rule_description: string;
  awards: Array<{ rule: number; prize: string }>;
}

export interface IIncentiveDetailsResponse {
  business_incentives: Array<IIncentiveDetailRes>;
}

export interface IIncentiveResponse {
  business_incentives: Array<IIncentiveRes>;
}
