/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { IVisitCreateDto, IVisitCustomer } from '@shared/types';
import RoadMapRepository from './RoadMapRepository';
import { getPendingVisits } from '../RoadMapUtils';

export class RoadMapManager extends BaseManager {
  repo: RoadMapRepository;

  constructor() {
    super();
    this.repo = new RoadMapRepository();
  }

  public async getRoadMap(): Promise<IVisitCustomer[]> {
    try {
      const custumerVisits = await this.repo.getCostumerVisits();
      if (custumerVisits) {
        const filterVisit = getPendingVisits(custumerVisits);
        return filterVisit;
      }
      return [];
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async excludeVisit(id: string) {
    try {
      await this.repo.visitModel.delete(id);
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async visitEdit(id: string, schedule: Date) {
    try {
      await this.repo.visitModel.updated(id, (data: IVisitCreateDto) => {
        data.schedule = schedule;
      });
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async visitComplete(id: string | undefined) {
    try {
      if (id) {
        await this.repo.visitModel.updated(id, (data: IVisitCreateDto) => {
          data.visitCompleted = true;
        });
      }
    } catch (error) {
      return this.handleError(error);
    }
  }
}
