import { IGT, IGTListResponse } from 'shared/types';

export const filterGts = (text: string, gtlist: Array<IGT> | null): Array<IGT> | [] => {
  if (!gtlist) {
    return [];
  }
  if (!text) {
    return gtlist;
  }

  return gtlist?.filter((gt) => {
    const regions = gt.regions
      ?.map((r: any) => r.name)
      .join(' ')
      .toUpperCase();
    const gtName = gt.name.toUpperCase();
    return regions.includes(text.toUpperCase()) || gtName.includes(text.toUpperCase());
  });
};

export const joinGTRegions = (regions: IGT['regions']) => regions.map((r) => r.name).join(' ');

export const transformGtListResponse = (gtListData: IGTListResponse): Array<IGT> =>
  gtListData.territory_managers;
