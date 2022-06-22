import { ITerritory } from '../ITerritory';

export interface IRcasGVResponse {
  sales_reps: Array<{
    id: number;
    name: string;
    territory_manager_id: number;
    territory_manager_name: string;
    territories: ITerritory[];
  }>;
}
