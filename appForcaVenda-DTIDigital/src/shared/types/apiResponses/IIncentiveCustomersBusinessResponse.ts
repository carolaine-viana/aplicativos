export interface IIncentiveCustomersBusinessResponse {
  business_incentive_customers: Array<{
    id?: number;
    name?: string;
    operation_type?: string;
  }>;
}
