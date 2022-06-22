/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { getUserLogin } from '@shared/utils/asyncStorage';
import { transformGtListResponse } from '../gtListUtils';
import GTListRepository from './GTListRepository';

export default class ManagerName extends BaseManager {
  repo: GTListRepository;

  constructor() {
    super();
    this.repo = new GTListRepository();
  }

  async getGTs() {
    try {
      const userId = await getUserLogin();
      const response = await this.repo.fetchGTs(userId as string);
      const transformedData = transformGtListResponse(response.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
