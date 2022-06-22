import { ITerritory } from './ITerritory';

export interface IGV {
  id: number;
  name: string;
  territoryManagerId: number;
  territoryManagerName: string;
  regions: ITerritory[];
}
