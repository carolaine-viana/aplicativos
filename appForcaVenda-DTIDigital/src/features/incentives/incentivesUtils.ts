import {
  IIncentive,
  IIncentiveResponse,
  IIncentivePerformanceResponse,
  IIncentivePerformanceIndicator,
  KnownIncentives,
  TIncentive,
  IIncentiveMartinsResponse,
  IIcentiveMartinsDetailsResponse,
  IIncentiveMartinsIndicatorResponse,
  IIncentiveMartinsPerformanceResponse,
  IIncentiveMartinsPerformanceWeeksResponse,
  IIncentiveMartinsIndicator,
  IIncentiveMartinsIndicatorWeek,
  RoutesNames,
  ISuppliersIndicators,
  ISupplierIndicatorsMonthResponse,
  ISupplierIndicatorsWeeksResponse,
  ISuppliersIndicatorsWeek,
} from 'shared/types';
import { IIncentiveMartins, IIncentiveMartinsDetails } from 'shared/types/IIncentiveMartins';
import { doesArrayHaveContent, getCurrency, isArrayEmpty, objectMatchText } from 'shared/utils';

export const transformIncentiveResponse = (data: IIncentiveResponse): IIncentive[] =>
  data.business_incentives.map((incentive) => ({
    id: incentive?.id?.toString(),
    name: incentive.name,
    targetGroup: incentive.target_group,
    status: incentive.status,
    startDate: incentive.start_date,
    endDate: incentive.end_date,
    mechanics: incentive.mechanics,
    comments: incentive.comments,
  }));

export const transformIncentiveIndicatorsResponse = (
  data: IIncentivePerformanceResponse,
  isGT = false
): IIncentivePerformanceIndicator[] =>
  data.business_incentive_performance_indicators?.map((indicator) => ({
    indicatorName: indicator.indicator_name,
    indicatorType: indicator.indicator_type,
    indicatorForecast: indicator.indicator_forecast,
    indicatorResult: indicator.indicator_result,
    indicatorGap: indicator.indicator_gap,
    classification: isGT
      ? indicator.territory_manager_classification
      : indicator.sales_rep_classification,
    indicatorPercentage: indicator.indicator_percentage,
    indicatorFulfillment: indicator.indicator_fulfillment,
  }));

export const transformIncentivesMartinsResponse = (
  data: IIncentiveMartinsResponse
): IIncentiveMartins[] =>
  data?.sales_incentives?.map((incentive) => ({
    ...incentive,
    id: incentive.id.toString(),
    targetGroup: incentive.target_group,
  }));

export const transformIncentivesMartinsDetailsResponse = (
  data: IIcentiveMartinsDetailsResponse
): IIncentiveMartinsDetails => ({
  ...data?.sales_incentives[0],
  ruleDescription: data?.sales_incentives[0].rule_description,
});

export const transformIncentivesMartinsIndicator = (
  indicatorRes: IIncentiveMartinsIndicatorResponse
): IIncentiveMartinsIndicator => ({
  indicatorName: indicatorRes.indicator_name,
  indicatorType: indicatorRes.indicator_type,
  indicatorForecast: indicatorRes.indicator_forecast,
  indicatorResult: indicatorRes.indicator_result,
  earnedValue: indicatorRes.earned_value,
  indicatorPercentage: indicatorRes.indicator_percentage,
  indicatorFulfillment: indicatorRes.indicator_fulfillment,
});

export const transformIncentivesMartinsPerformanceMonth = (
  data: IIncentiveMartinsPerformanceResponse
): IIncentiveMartinsIndicator => {
  const monthIndicator = data.sales_incentive_performance_indicators[0];
  return transformIncentivesMartinsIndicator(monthIndicator);
};

export const transformIncentivesMartinsPerformanceWeeks = (
  data: IIncentiveMartinsPerformanceWeeksResponse
): IIncentiveMartinsIndicatorWeek[] => {
  const indicatorsWeeks = data.weeks;
  return indicatorsWeeks.map((i) => {
    const indicatorValues = i.sales_incentive_performance_indicators[0];
    return {
      week: i.week,
      ...transformIncentivesMartinsIndicator(indicatorValues),
    };
  });
};

export const transformSuppliersIndicators = (indicator: any): ISuppliersIndicators => ({
  id: indicator.id.toString(),
  focusSuppliersTotalCustomersResult: indicator?.focus_suppliers_total_customers_result,
  wildcardSuppliersTotalCustomersResult: indicator?.wildcard_suppliers_total_customers_result,
  focusSuppliersCustomersResult: doesArrayHaveContent(indicator?.focus_suppliers_customers_result)
    ? indicator?.focus_suppliers_customers_result?.map((item) => ({
        focusSuppliersQuantity: item?.focus_suppliers_quantity,
        customersQuantity: item?.customers_quantity,
      }))
    : null,
  wildcardSuppliersCustomersResult: doesArrayHaveContent(
    indicator?.wildcard_suppliers_customers_result
  )
    ? indicator?.wildcard_suppliers_customers_result?.map((item) => ({
        wildcardSuppliersQuantity: item?.wildcard_suppliers_quantity,
        customersQuantity: item?.customers_quantity,
      }))
    : null,
  earnedValue: indicator.earned_value,
});

export const transformSuppliersIndicatorsMonth = (
  data: ISupplierIndicatorsMonthResponse
): ISuppliersIndicators => {
  const indicator = data.focus_suppliers_indicators[0];
  return transformSuppliersIndicators(indicator);
};

export const transformSuppliersIndicatorsWeeks = (
  data: ISupplierIndicatorsWeeksResponse
): ISuppliersIndicatorsWeek[] => {
  const suppliersWeeks = data.weeks;
  return suppliersWeeks.map((i) => {
    const indicatorValues = i.focus_suppliers_indicators[0];
    return {
      week: i.week,
      ...transformSuppliersIndicators(indicatorValues),
    };
  });
};

export const formatValue = (value: number, format: 'INTEGER' | 'DECIMAL') => {
  if (format === 'INTEGER') {
    return Number(value).toFixed(0);
  }
  return getCurrency(value);
};

export const getProgressColor = (indicatorFulfillment: 'LOW' | 'COMPLETE') => {
  if (indicatorFulfillment === 'LOW') {
    return 'red600';
  }
  if (indicatorFulfillment === 'COMPLETE') {
    return 'green400';
  }

  return 'yellow400';
};

export const searchIncentives = (
  incentives: IIncentive[] | IIncentiveMartins[] | null | undefined,
  searchText: string
) => {
  if (!searchText && !isArrayEmpty(incentives)) {
    return incentives;
  }
  if (!incentives) {
    return [];
  }
  return incentives.filter((incentive) => objectMatchText(incentive, searchText));
};

export const incentiveOptions = [
  {
    label: 'Todos',
    value: 'TODOS',
  },
  {
    label: 'Martins',
    value: KnownIncentives.INCENTIVE_MARTINS,
  },
  {
    label: 'Fornecedor',
    value: KnownIncentives.INCENTIVE_SUPPLIER,
  },
];

export const getSelectedIncentiveByValue = (selectedValue: TIncentive) =>
  incentiveOptions.find((o) => o.value === selectedValue);

export const classifyIncentives = (
  supplierIncentives: IIncentive[],
  martinsIncentives: IIncentiveMartins[]
) => {
  const classifiedIncentivesSuppliers = supplierIncentives.map((s) => ({ ...s, type: 'supplier' }));
  const classifiedIncentivesMartins = martinsIncentives.map((m) => ({ ...m, type: 'martins' }));
  return {
    classifiedIncentivesSuppliers,
    classifiedIncentivesMartins,
  };
};

export const getTitleIncentives = (isRCA = false, routeName?: string) => {
  if (!routeName || !isRCA) {
    return routesTitles[RoutesNames.INCENTIVES_LIST];
  }
  if (routeName) {
    return routesTitles[routeName as keyof typeof routesTitles];
  }
};

const routesTitles = {
  [RoutesNames.INCENTIVES_LIST]: 'Incentivos',
  [RoutesNames.INCENTIVESMARTINSTABS]: 'Incentivos Martins',
  [RoutesNames.INCENTIVEDETAILSTABS]: 'Incentivos Fornecedor',
};

export const getData = (
  data: ReturnType<typeof classifyIncentives> | null,
  searchText: string,
  loadingFilter: boolean,
  onlySuppliers: boolean,
  onlyMartins: boolean
) => {
  let dataToSearch: IIncentive[] | IIncentiveMartins[] = [];

  if (data && !loadingFilter) {
    if (onlySuppliers) {
      dataToSearch = [...data.classifiedIncentivesSuppliers];
      return searchIncentives(dataToSearch, searchText);
    }
    if (onlyMartins) {
      dataToSearch = [...data.classifiedIncentivesMartins];
      return searchIncentives(dataToSearch, searchText);
    }
    dataToSearch = [...data.classifiedIncentivesMartins, ...data.classifiedIncentivesSuppliers];
    return searchIncentives(dataToSearch, searchText);
  }
  return [];
};
