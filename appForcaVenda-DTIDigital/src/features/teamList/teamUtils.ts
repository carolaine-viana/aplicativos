import { IRcasGVResponse } from 'shared/types';

export const filters = {
  ordenar: {
    value: 'ordenar',
    label: 'Ordenar',
    activeColor: 'blue600',
    subFilters: [
      {
        value: 'az',
        label: 'A a Z',
        active: false,
      },
      {
        value: 'za',
        label: 'Z a A',
        active: false,
      },
    ],
  },
  perfilGT: {
    label: 'GT',
    value: 'GT',
    active: false,
    activeColor: 'blue600',
  },
  perfilRCA: {
    label: 'RCA',
    value: 'RCA',
    active: false,
    activeColor: 'blue600',
  },
};

export const transformRCAListResponse = (data: IRcasGVResponse) =>
  data.sales_reps.map((res) => ({
    ...res,
    territoryManagerId: res.territory_manager_id,
    territoryManagerName: res.territory_manager_name,
    regions: res.territories,
  }));

export const transformGvGTListResponse = (data: IRcasGVResponse) =>
  data.sales_reps.map((res) => ({
    ...res,
    regions: res.territories,
  }));

export const filterTeam = (text: string, data: any) => {
  if (!data) {
    return [];
  }
  if (!text) {
    return data;
  }

  return data?.filter((item: any) => {
    const regions = item.regions
      ?.map((r: any) => r.name)
      .join(' ')
      .toUpperCase();
    const gtName = item.name.toUpperCase();
    return regions.includes(text.toUpperCase()) || gtName.includes(text.toUpperCase());
  });
};
