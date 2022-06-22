export const INCENTIVE_ID_MOCK = '2740';
export const CUSTOMER_ID_MOCK = '5081982';

export const INCENTIVES_CUSTOMERS_DATA_RESPONSE = {
  data: {
    has_customers: true,
    business_incentive_customers_structure: [
      {
        state: 'state',
        business_segment: 'segment',
        business_unit: 'unit',
      },
    ],
  },
};

export const INCENTIVES_CUSTOMERS_MANAGER_DATA = {
  hasCustomers: true,
  businessIncentiveCustomersStructure: [
    {
      state: 'state',
      businessSegment: 'segment',
      businessUnit: 'unit',
    },
  ],
};

export const INCENTIVES_CUSTOMERS_BUSINESS_DATA_RESPONSE = {
  data: {
    business_incentive_customers: [
      {
        id: '5081982',
        name: 'customer name',
        operation_type: 'operation type',
      },
    ],
  },
};
export const INCENTIVES_CUSTOMERS_BUSINESS_MANAGER_DATA = [
  {
    id: '5081982',
    name: 'customer name',
    operationtype: 'operation type',
  },
];
