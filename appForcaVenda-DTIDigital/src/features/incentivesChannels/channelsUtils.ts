import { IChannelsResponse, IIncentiveChannel } from '@shared/types';

export const transformChannelsResponse = (data: IChannelsResponse): Array<IIncentiveChannel> =>
  data.business_incentive_channels;
