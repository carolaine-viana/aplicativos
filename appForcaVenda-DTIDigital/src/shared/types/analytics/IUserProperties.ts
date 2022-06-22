import { Profiles } from '../TRole';

export interface IUserProperties {
  id: string;
  role: Profiles.RCA | Profiles.GT | Profiles.GV;
  name?: string;
}
