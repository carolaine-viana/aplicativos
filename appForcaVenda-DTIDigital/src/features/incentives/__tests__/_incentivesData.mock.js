export const mockIncentivesMartins = {
  data: {
    sales_incentives: [
      {
        id: 1234,
        name: 'Nome Incentivo Um',
        target_group: 'Público Alvo',
        status: 'Em apuração',
      },
      {
        id: 4567,
        name: 'Nome Incentivo Dois',
        target_group: 'Público Alvo',
        status: 'Em apuração',
      },
    ],
  },
};

export const mockIncentivesMartinsDetails = {
  data: {
    sales_incentives: [
      {
        id: '1234',
        name: 'Nome do incentivo',
        rule_description: `Mussum Ipsum, cacilds vidis litro abertis.
        Mauris nec dolor in eros commodo tempor.`,
      },
    ],
  },
};

export const mockTransformedMartinsIndicators = {
  month: {
    indicatorName: 'Positivações',
    indicatorType: 'string',
    indicatorForecast: 523,
    indicatorResult: 200,
    earnedValue: 648,
    indicatorPercentage: 60,
    indicatorFulfillment: 'low',
  },
  weeks: [
    {
      indicatorName: '3/1/2022 a 9/1/2022',
      indicatorType: 'string',
      indicatorForecast: 0,
      indicatorResult: 0,
      earnedValue: 0,
      indicatorPercentage: 88,
      indicatorFulfillment: 'low',
    },
    {
      indicatorName: '10/1/2022 a 16/1/2022',
      indicatorType: 'string',
      indicatorForecast: 0,
      indicatorResult: 300,
      earnedValue: 1500,
      indicatorPercentage: 75,
      indicatorFulfillment: 'low',
    },
  ],
};

export const mockTransformedIncentiveDetails = {
  id: '2870',
  name: 'Positivações',
  ruleDescription: 'Some description..',
};

export const INCENTIVE_MOCK = {
  id: '1234',
  name: 'Icentive Name',
  targetGroup: 'Target group',
  status: 'Status',
  startDate: '01/02/2022',
  endDate: '03/02/2022',
  mechanics: 'Incentive Mechanics',
  comments: 'Coments',
  type: 'supplier',
};

export const INCENTIVE_MARTINS_MOCK = {
  id: '1234',
  name: 'Icentive Name',
  targetGroup: 'Target group',
  status: 'Status',
  type: 'martins',
};

export const CLASSIFIED_INCENTIVES_MOCK = {
  classifiedIncentivesMartins: [INCENTIVE_MARTINS_MOCK],
  classifiedIncentivesSuppliers: [INCENTIVE_MOCK],
};
