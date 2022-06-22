import APIBFF from '@shared/base/api/APIBFF';
import { IChannelsResponse } from '@shared/types';

export default class IncentivesChannelsRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  async fetchChannels(incentiveId: string) {
    return this.apiBff.instance.get<IChannelsResponse>(
      `business-incentives/${incentiveId}/channels`
    );
  }
}
