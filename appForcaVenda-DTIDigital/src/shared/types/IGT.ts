import { ITerritory } from './ITerritory';

export interface IGT {
  id: number;
  name: string;
  regions: ITerritory[];
}
