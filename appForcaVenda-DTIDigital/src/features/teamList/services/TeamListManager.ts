import { transformGtListResponse } from 'features/gtList/gtListUtils';
import BaseManager from 'shared/base/api/BaseManager';
import { IGV, IRcaTerritory } from 'shared/types';
import { transformRCAListResponse, filterTeam, transformGvGTListResponse } from '../teamUtils';
import TeamListRepository from './TeamListRepository';

export default class TeamListManager extends BaseManager {
  repo: TeamListRepository;

  constructor() {
    super();
    this.repo = new TeamListRepository();
  }

  async getRCA(): Promise<IGV[] | undefined> {
    try {
      const response = await this.repo.fetchRCA();
      const transformedData = transformRCAListResponse(response.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getGTs() {
    try {
      const response = await this.repo.fetchGT();
      const transformedData = transformGtListResponse(response.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getGTRCA(type: string) {
    try {
      const rca = (await this.getRCA()) ?? [];
      const gt = (await this.getGTs()) ?? [];
      const classifiedRca = rca?.map((r: any) => ({ ...r, type: 'RCA' }));
      const classifiedGt = gt?.map((g: any) => ({ ...g, type: 'GT' }));
      if (type === 'RCA') {
        return classifiedRca;
      }
      if (type === 'GT') {
        return classifiedGt;
      }
      return [...classifiedRca, ...classifiedGt];
    } catch (error) {
      console.log(error);
      return this.handleError(error);
    }
  }

  // TEAM RCA GV
  async getRCALIST(id: string) {
    try {
      const response = await this.repo.fetchGvGT(id);
      const transformedData = transformGvGTListResponse(response.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
