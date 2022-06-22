export interface IIndicatorsResponse {
  performance_indicators: [
    {
      id: number;
      customers_forecast: number | null;
      customers_result: number | null;
      focus_suppliers_customers_result?: number | null;
      wildcard_suppliers_customers_result?: number | null;
      sales_forecast: number | null;
      sales_result: number | null;
      private_brands_sales_result: number | null;
      private_brands_sales_percentage: number | null;
      sales_percentage: number | null;
      customers_gap: number;
      customers_percentage: number;
      customers_fulfillment: string;
      sales_gap: number;
      sales_fulfillment: string;
      private_brands_sales_percentage_forecast: number;
    }
  ];
}
