import {
  ISuppliersResponse,
  ICustomersServedResponse,
  ISupplier,
  ICustomersServed,
  ISuppliersIndicatorsWeek,
  ISupplierIndicatorsMonthResponse,
  ISupplierIndicatorsWeeksResponse,
  ISuppliersIndicators,
} from 'shared/types';
import { filterArraObjectAnyValue, getMonthWeekTabs } from 'shared/utils';

export type TTimeCourse = 'month' | 'week';

export const getTimeCourseTabs = () => getMonthWeekTabs();

export const getTitle = (routeName: 'battleMap' | 'customersServed') => {
  if (routeName === 'battleMap') {
    return 'Mapa de batalha';
  }
  if (routeName === 'customersServed') {
    return 'Clientes Atendidos';
  }
  return '';
};

// TODO: 22738: REMOVER FUNÇÃO DO MANAGER E REPO E TRANSFORM. JA FEITO NA FEATURE CUSTOMER SERVED

export const transformCustomersServedResponse = (data: ICustomersServedResponse) =>
  data.customers.map(({ id, trade_name, company_name, focus_suppliers, business_unit, cnpj }) => ({
    id: id?.toString(),
    cnpj,
    tradeName: trade_name,
    companyName: company_name,
    businessUnit: business_unit,
    focusSuppliers: focus_suppliers,
  }));

export const transformSuppliersBattleMapResponse = (data: ISuppliersResponse): Array<ISupplier> =>
  data.focus_suppliers.map(({ id, name, type, level }) => ({
    id: id ? id?.toString() : '---',
    name: name || '---',
    type: type || '---',
    level: level || '---',
  }));

export const transformSuppliersIndicators = (indicator: any): ISuppliersIndicators => ({
  id: indicator.id.toString(),
  focusSuppliersTotalCustomersResult: indicator?.focus_suppliers_total_customers_result,
  wildcardSuppliersTotalCustomersResult: indicator?.wildcard_suppliers_total_customers_result,
  wildcardSuppliersCustomersResult: indicator?.wildcard_suppliers_customers_result?.map((item) => ({
    wildcardSuppliersQuantity: item?.wildcard_suppliers_quantity,
    customersQuantity: item?.customers_quantity,
  })),
  earnedValue: indicator.earnedValue,
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

export const filterBattleMapDada = (data: Array<ISupplier> | undefined, searchText: string) => {
  if (!searchText) {
    return data;
  }
  if (!data) {
    return [];
  }
  return filterArraObjectAnyValue(data, searchText);
};

export const filterCustomersServedData = (
  data: Array<ICustomersServed> | undefined,
  searchText: string
) => {
  if (!searchText) {
    return data;
  }
  if (!data) {
    return [];
  }
  const mappedCustomersFocusSuppliers = data.map((item) => ({
    ...item,
    focusSuppliersValues: item.focusSuppliers
      .map((supplier: ISupplier) => Object.values(supplier))
      .join(' '),
  }));
  return filterArraObjectAnyValue(mappedCustomersFocusSuppliers, searchText);
};
