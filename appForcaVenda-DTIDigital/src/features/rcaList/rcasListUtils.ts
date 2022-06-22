import { IRcaTerritory } from 'shared/types';
import { isArrayEmpty } from 'shared/utils';

export const filterRcasWithTerritories = (
  rcasList: IRcaTerritory[] | undefined,
  textFilter: string
) => {
  if (!rcasList || isArrayEmpty(rcasList)) {
    return [];
  }
  if (!textFilter) {
    return rcasList;
  }
  return rcasList?.filter((rca) => {
    const treatedName = rca.name.toUpperCase();
    const treatedTerritories = rca.territories
      ?.map((territory) => territory.name)
      ?.join(' ')
      ?.toUpperCase();

    return (
      treatedName.includes(textFilter.toUpperCase()) ||
      treatedTerritories.includes(textFilter.toUpperCase())
    );
  });
};
