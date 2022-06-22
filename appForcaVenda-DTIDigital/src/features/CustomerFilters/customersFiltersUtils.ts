/* eslint-disable no-nested-ternary */
import { ICustomerReadDto } from 'shared/models';
import { TAlphabeticalSort, TOption, TPredefinedFilter } from 'shared/types';
import {
  filterListByPreDefinedFilters,
  isArrayEmpty,
  objectMatchText,
  sortListByKey,
} from 'shared/utils';

export type TScheduleSortMode = 'recentes' | 'futuros';

export const filters = {
  ordenar: {
    value: 'ordenar',
    label: 'Ordenar',
    activeColor: 'blue600',
    subFilters: [
      {
        value: 'az',
        label: 'A a Z',
      },
      {
        value: 'za',
        label: 'Z a A',
      },
      {
        value: 'recentes',
        label: 'Recentes',
        screen: 'roadmap',
      },
      {
        value: 'futuros',
        label: 'Futuros',
        screen: 'roadmap',
      },
    ],
  },
  novo: {
    value: 'Novo',
    label: 'Novo',
    prop: 'newCustomer',
    type: 'boolean',
    shouldPass: true,
  },
  positivado: {
    value: 'Positivado',
    label: 'Positivado',
    prop: 'purchasedThisMonth',
    type: 'boolean',
    shouldPass: true,
  },
  naoPositivado: {
    value: 'Não positivado',
    label: 'Não positivado',
    prop: 'purchasedThisMonth',
    type: 'boolean',
    shouldPass: false,
  },
  normal: {
    value: 'Normal',
    label: 'Normal',
    prop: 'creditStatus',
    type: 'string',
  },
  reabilitado: {
    value: 'Reabilitado',
    label: 'Reabilitado',
    prop: 'creditStatus',
    type: 'string',
  },
  suspenso: {
    value: 'Suspenso',
    label: 'Suspenso',
    prop: 'creditStatus',
    type: 'string',
  },
  cortado: {
    value: 'Cortado',
    label: 'Cortado',
    prop: 'creditStatus',
    type: 'string',
  },
};

export const updateFiltersList = (
  selectedFilters: TPredefinedFilter[],
  newFilter: TPredefinedFilter
) => {
  const existIndex = selectedFilters.findIndex((item) => item.value === newFilter.value);
  if (existIndex >= 0) {
    selectedFilters.splice(existIndex, 1);
  } else {
    selectedFilters.push(newFilter);
  }

  return [...selectedFilters];
};

export const getFiltersWithActives = (selectedFilters: TPredefinedFilter[], screen: string) =>
  Object.values(filters)
    ?.filter((f) => !f.screen || f.screen === screen)
    .map((f) => ({
      ...f,
      active: !!selectedFilters.find((selected) => selected.value === f?.value),
    }))
    .sort((a, b) => (b?.label === 'Ordenar' || a.active === b.active ? 0 : a.active ? -1 : 1));

export const getSortListWithActives = (
  subFilters: (TOption & { screen: string })[],
  activeSort: string,
  screen: string
) =>
  subFilters
    .filter((f) => !f.screen || f.screen === screen)
    .map((subSort) => ({
      ...subSort,
      active: subSort.value === activeSort,
      activeColor: filters.ordenar.activeColor,
    }));

export const searchingCustomers = (
  text: string,
  customers: ICustomerReadDto[]
): ICustomerReadDto[] => {
  try {
    let result: ICustomerReadDto[];
    if (text) {
      result = customers?.filter((item: ICustomerReadDto) =>
        objectMatchText<ICustomerReadDto>(item, text)
      );
    } else {
      result = customers;
    }
    return result;
  } catch (error) {
    return [];
  }
};

export const filterCustomers = (
  selectedFilters: TPredefinedFilter[],
  customers: ICustomerReadDto[]
) => {
  if (isArrayEmpty(selectedFilters)) {
    return customers;
  }
  return filterListByPreDefinedFilters<ICustomerReadDto>(selectedFilters, customers);
};

export const sortByName = (customers: ICustomerReadDto[], sortMode: TAlphabeticalSort) =>
  sortListByKey(customers, 'companyName', sortMode);

export const sortBySchedule = (
  customers: (ICustomerReadDto & Partial<{ schedule: Date }>)[],
  sortMode: TAlphabeticalSort | TScheduleSortMode
) =>
  [...customers]?.sort((a, b) => {
    if (a.schedule && b.schedule) {
      if (sortMode === 'recentes') {
        return a.schedule < b.schedule ? -1 : 1;
      }
      if (sortMode === 'futuros') {
        return a.schedule < b.schedule ? 1 : -1;
      }
    }
    return 0;
  });
