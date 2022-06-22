import BaseManager from '@shared/base/api/BaseManager';
import * as asyncStorage from '@shared/utils/asyncStorage';
import { getUserRole } from 'shared/utils/asyncStorage';
import { Profiles } from 'shared/types';
import BestResultRepository from './BestResultRepository';
import { transformBestResultResponse, transformBestResultResponseGT } from '../bestResultUtils';

export default class BestResultManager extends BaseManager {
  repo: BestResultRepository;

  constructor() {
    super();
    this.repo = new BestResultRepository();
  }

  async getBestResult() {
    const role = await getUserRole();
    try {
      const userLogin = (await asyncStorage.getUserLogin()) as string;
      const response = await this.repo.fetchBestResult(userLogin);

      if (role === Profiles.RCA) {
        return transformBestResultResponse(response.data);
      }

      if (role === Profiles.GT) {
        return transformBestResultResponseGT(response.data);
      }
    } catch (error) {
      return this.handleError(error);
    }
  }
}
