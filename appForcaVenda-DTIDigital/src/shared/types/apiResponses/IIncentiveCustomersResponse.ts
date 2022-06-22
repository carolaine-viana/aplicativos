export interface IIncentiveCustomersResponse {
  has_customers: boolean;
  business_incentive_customers_structure: Array<{
    state: string;
    business_segment: string;
    business_unit: string;
  }>;
}
