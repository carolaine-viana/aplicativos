export interface IIncentiveHasCustomers {
  hasCustomers: boolean;
  businessIncentiveCustomersStructure: Array<{
    state?: string;
    businessSegment?: string;
    businessUnit?: string;
  }>;
}
