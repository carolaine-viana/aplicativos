import {
  IIndicatorsResponse,
  ICustomersIndicatorsCreateDto,
  ISalesIndicatorsCreateDto,
  ITeamIndicatorsResponse,
  ITimeCourse,
} from '@shared/types';

import {
  getLastMonday,
  addDays,
  getStartOfMonth,
  getEndOfMonth,
  getMonthWeekTabs,
} from '@shared/utils';
import { ITeamIndicator } from 'shared/types/ITeamIndicator';

export const getStartEndDate = (timeCourse: string, date = new Date()) => {
  const isTimeCourseMonth = timeCourse === 'month';
  const startDate = isTimeCourseMonth ? getStartOfMonth(date) : getLastMonday(date);
  const endDate = isTimeCourseMonth ? getEndOfMonth(date) : addDays(startDate, 5);
  return {
    startDate,
    endDate,
  };
};

export const transformCustomerIndicatorsResponseCreate = (
  data: IIndicatorsResponse,
  timeCourse: 'month' | 'week'
): ICustomersIndicatorsCreateDto[] => {
  const indicators = data.performance_indicators;
  return indicators?.map((indicator): ICustomersIndicatorsCreateDto => {
    const { startDate, endDate } = selfFunctions.getStartEndDate(timeCourse);
    return {
      userId: indicator.id.toString(),
      timeCourse,
      startDate,
      endDate,
      customersForecast: indicator.customers_forecast ?? 0,
      customersResult: indicator.customers_result ?? 0,
      focusSuppliersCustomersResult: indicator.focus_suppliers_customers_result ?? 0,
      wildcardSuppliersCustomersResult: indicator.wildcard_suppliers_customers_result ?? 0,
      customersGap: indicator.customers_gap ?? 0,
      customersPercentage: indicator.customers_percentage ?? 0,
      customersFulfillment: indicator.customers_fulfillment ?? 'low',
    };
  });
};

export const transformSalesIndicatorsResponseCreate = (
  data: IIndicatorsResponse,
  timeCourse: 'month' | 'week'
): ISalesIndicatorsCreateDto[] => {
  const indicators = data.performance_indicators;
  return indicators?.map((indicator): ISalesIndicatorsCreateDto => {
    const { startDate, endDate } = selfFunctions.getStartEndDate(timeCourse);
    return {
      userId: indicator.id.toString(),
      timeCourse,
      startDate,
      endDate,
      salesForecast: indicator.sales_forecast ?? 0,
      salesResult: indicator.sales_result ?? 0,
      privateBrandsSalesResult: indicator.private_brands_sales_result ?? 0,
      privateBrandsSalesPercentage: indicator.private_brands_sales_percentage ?? 0,
      salesPercentage: indicator.sales_percentage ?? 0,
      privateBrandsSalesPercentageForecast: indicator.private_brands_sales_percentage_forecast ?? 0,
    };
  });
};

export const transformSalesIndicatorsResponse = (
  monthData: IIndicatorsResponse,
  weekData: IIndicatorsResponse
) => {
  const monthIndicatorsTransformed = selfFunctions.transformSalesIndicatorsResponseCreate(
    monthData,
    'month'
  );
  const weekIndicatorsTansformed = selfFunctions.transformSalesIndicatorsResponseCreate(
    weekData,
    'week'
  );
  return [monthIndicatorsTransformed, weekIndicatorsTansformed];
};

export const transformCustomersIndicatorsResponse = (
  monthData: IIndicatorsResponse,
  weekData: IIndicatorsResponse
) => {
  const monthIndicatorsTransformed = selfFunctions.transformCustomerIndicatorsResponseCreate(
    monthData,
    'month'
  );
  const weekIndicatorsTansformed = selfFunctions.transformCustomerIndicatorsResponseCreate(
    weekData,
    'week'
  );
  return [monthIndicatorsTransformed, weekIndicatorsTansformed];
};

export const extractMonthWeekIndicators = <T>(indicators: Array<T & ITimeCourse>) => {
  const indicatorsMonth =
    indicators.filter((indicator) => indicator.timeCourse === 'month')[0] ?? {};
  const indicatorsWeek = indicators.filter((indicator) => indicator.timeCourse === 'week')[0] ?? {};
  return {
    month: indicatorsMonth,
    week: indicatorsWeek,
  };
};

export const getTabsAllPeriod = () => getMonthWeekTabs();

export const calculatePercentage = (fullValue: number, partialValue: number) => {
  const totalPercentage = 100;
  const partialPercentage = (totalPercentage * partialValue) / fullValue;

  return partialPercentage;
};

export const transformGtTeamIndicatorsResponse = (
  responseData: ITeamIndicatorsResponse
): ITeamIndicator => {
  const indicators = responseData.team_performance_indicators;
  return indicators.map((indicator) => ({
    id: indicator.id,
    teamTotalSalesResult: indicator.team_total_sales_result ?? 0,
    teamPrivateBrandsSalesResult: indicator.team_private_brands_sales_result ?? 0,
    teamPrivateBrandsSalesPercentage: indicator.team_private_brands_sales_percentage ?? 0,
    teamSalesForecast: indicator.team_sales_forecast ?? 0,
    teamSalesResult: indicator.team_sales_result ?? 0,
    teamPartialSalesForecast: indicator.team_partial_sales_forecast ?? 0,
    teamPartialSalesPercentage: indicator.team_partial_sales_percentage ?? 0,
    teamPartialSalesFulfillment: indicator.team_partial_sales_fulfillment ?? 'low',
    teamCustomersForecast: indicator.team_customers_forecast ?? 0,
    teamCustomersResult: indicator.team_customers_result ?? 0,
    teamPartialCustomersForecast: indicator.team_partial_customers_forecast ?? 0,
    teamPartialCustomersPercentage: indicator.team_partial_customers_percentage ?? 0,
    teamPartialCustomersFulfillment: indicator.team_partial_customers_fulfillment ?? 'low',
    territorialOccupationForecast: indicator.territorial_occupation_forecast ?? 0,
    territorialOccupationResult: indicator.territorial_occupation_result ?? 0,
    territorialOccupationPercentage: indicator.territorial_occupation_percentage ?? 0,
    territorialOccupationFulfillment: indicator.territorial_occupation_fulfillment ?? 'low',
    teamCouponsForecast: indicator.team_coupons_forecast ?? 0,
    teamCouponsResult: indicator.team_coupons_result ?? 0,
    teamPartialCouponsForecast: indicator.team_partial_coupons_forecast ?? 0,
    teamPartialCouponsPercentage: indicator.team_partial_coupons_percentage ?? 0,
    teamPartialCouponsFulfillment: indicator.team_partial_coupons_fulfillment ?? 'low',
  }))[0];
};

export const getSalesForecastTabs = () => [
  {
    id: 'dia',
    title: 'Dia',
  },
  {
    id: 'mes',
    title: 'Mês',
  },
];

const selfFunctions = {
  transformCustomersIndicatorsResponse,
  transformCustomerIndicatorsResponseCreate,
  transformSalesIndicatorsResponseCreate,
  transformGtTeamIndicatorsResponse,
  getStartEndDate,
  getTabsAllPeriod,
};

export default selfFunctions;
