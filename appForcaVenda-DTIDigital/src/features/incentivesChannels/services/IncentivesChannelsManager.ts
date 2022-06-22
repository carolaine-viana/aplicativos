import BaseManager from '@shared/base/api/BaseManager';
import { transformChannelsResponse } from '../channelsUtils';
import IncentivesChannelsRepository from './IncentivesChannelsRepository';

export default class IncentivesChannelsManager extends BaseManager {
  repo: IncentivesChannelsRepository;

  constructor() {
    super();
    this.repo = new IncentivesChannelsRepository();
  }

  async getChannels(incentiveId: string) {
    try {
      const res = await this.repo.fetchChannels(incentiveId);
      const transformedData = transformChannelsResponse(res.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
