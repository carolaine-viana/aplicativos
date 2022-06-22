interface ITeamIndicatorAPI {
  id: number;
  team_total_sales_result: number;
  team_private_brands_sales_result: number;
  team_private_brands_sales_percentage: number;
  team_sales_forecast: number;
  team_sales_result: number;
  team_partial_sales_forecast: number;
  team_partial_sales_percentage: number;
  team_partial_sales_fulfillment: string;
  team_customers_forecast: number;
  team_customers_result: number;
  team_partial_customers_forecast: number;
  team_partial_customers_percentage: number;
  team_partial_customers_fulfillment: string;
  territorial_occupation_forecast: number;
  territorial_occupation_result: number;
  territorial_occupation_percentage: number;
  territorial_occupation_fulfillment: string;
  team_coupons_forecast: number;
  team_coupons_result: number;
  team_partial_coupons_forecast: number;
  team_partial_coupons_percentage: number;
  team_partial_coupons_fulfillment: string;
  team_private_brands_sales_percentage_forecast: number;
  team_partial_sales_gap: number;
  team_sales_gap: number;
  team_sales_percentage: number;
  team_sales_fulfillment: string;
  team_partial_customers_gap: number;
  team_customers_gap: number;
  team_customers_percentage: number;
  team_customers_fulfillment: string;
}

export interface ITeamIndicatorsResponse {
  team_performance_indicators: ITeamIndicatorAPI[];
}
