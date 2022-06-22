import {
  IWeeksResponse,
  IWeekFormats,
  TDateFormats,
  IFocusSupplierCustomer,
  IFocusSupplierCustomersResponse,
  TOption,
} from 'shared/types';
import { formatDate, getLastMonday, getLastMonthsDate } from '@shared/utils';

export const transformWeeksResponse = (
  data: IWeeksResponse
): (IWeekFormats & { pureDate: string })[] =>
  data.weeks.map((w) => ({
    ptBRFormat: w.pt_BR_format,
    universalFormat: w.universal_format,
    pureDate: w.universal_format,
  }));

export const transformFocusSupplier = (
  data: IFocusSupplierCustomersResponse
): IFocusSupplierCustomer[] =>
  data.customers.map((customer) => ({
    id: customer.id.toString(),
    tradeName: customer.trade_name,
    companyName: customer.company_name,
    cnpj: customer.cnpj,
    businessUnit: customer.business_unit,
    focusSuppliers: customer.focus_suppliers,
  }));

export const getDateWithPattern = (date: Date | string, format = 'yyyy-MM-dd') => {
  if (date instanceof Date) {
    return formatDate(date, format);
  }
  return date;
};

export const getDateParamFocusSupplierWeek = (date: string) => {
  const dateParam = date.split('T');

  return dateParam[0] as TDateFormats['yearMonthDay'];
};

export const getDateParamFocusSupplierMonth = (date: Date | string) => {
  if (date instanceof Date) {
    return getDateWithPattern(date, 'yyyyMM');
  }
  return date as TDateFormats['yearMonth'];
};

export const getMonthsFilters = (): (TOption & {
  pureDate: string;
  weeks: ReturnType<typeof getWeekCurrentMonth>[];
})[] =>
  getLastMonthsDate(11, true).map((monthDate: { stringDate: string; pureDate: Date }) => ({
    label: monthDate.stringDate,
    value: monthDate.stringDate.replace(' ', '_').toUpperCase(),
    pureDate: monthDate.pureDate.toISOString(),
    weeks: [],
  }));

export const getWeekCurrentMonth = () => {
  const lastMonday = getLastMonday(new Date());
  return {
    ptBRFormat: formatDate(lastMonday, 'dd/MM/yyyy'),
    universalFormat: formatDate(lastMonday, 'yyyy-MM-dd'),
    pureDate: lastMonday.toISOString(),
  };
};

export const ServedCustomersSuppliersTypes = [
  {
    label: 'Todos',
    value: 'todos',
  },
  {
    label: 'Foco',
    value: 'foco',
  },
  {
    label: 'Coringa',
    value: 'coringa',
  },
];

export const mountMonthParam = (isoDate: string) =>
  formatDate(new Date(isoDate), 'yyyyMM') as TDateFormats['yearMonth'];

export const getCalendarButtonMonth = (pureDate: string) => {
  const [year, month] = pureDate.slice(0, 7).split('-');
  return new Date(+year, +month - 1);
};
