import {
  IIncentiveCustomersBusiness,
  IIncentiveHasCustomers,
  IIncentiveCustomersResponse,
  IIncentiveCustomersBusinessResponse,
} from 'shared/types';

export const transformIncentiveCustomers = (
  data: IIncentiveCustomersResponse
): IIncentiveHasCustomers => ({
  hasCustomers: data?.has_customers,
  businessIncentiveCustomersStructure: data?.business_incentive_customers_structure?.map(
    (customer) => ({
      state: customer?.state || '-',
      businessSegment: customer?.business_segment || '-',
      businessUnit: customer?.business_unit || '-',
    })
  ),
});
export const transformIncentiveCustomersBusiness = (
  data: IIncentiveCustomersBusinessResponse
): Array<IIncentiveCustomersBusiness> =>
  data?.business_incentive_customers?.map((customerBusiness) => ({
    id: customerBusiness?.id?.toString() || '-',
    name: customerBusiness?.name || '-',
    operationType: customerBusiness?.operation_type || '-',
  }));
