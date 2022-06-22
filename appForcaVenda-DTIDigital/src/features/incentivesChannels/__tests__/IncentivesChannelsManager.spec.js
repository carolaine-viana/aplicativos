import expect from 'expect';
import * as channelsUtils from '../channelsUtils';
import IncentivesChannelsRepositoryMock from '../services/IncentivesChannelsRepository';
import IncentivesChannelsManager from '../services/IncentivesChannelsManager';

jest.mock('../channelsUtils', () => {
  return {
    transformChannelsResponse: jest.fn(),
  };
});

jest.mock('../services/IncentivesChannelsRepository', () => {
  return class MockRepo {
    fetchChannels = jest.fn();
  };
});

const mockRepoResponce = {
  data: {
    business_incentive_channels: [
      {
        name: 'Incentive One',
      },
      {
        name: 'Incentive Two',
      },
    ],
  },
};

describe('Tests IncentivesChannelsManager', () => {
  const MOCK_INCENTIVE_ID = '2845';
  let manager;

  beforeAll(() => {
    manager = new IncentivesChannelsManager();
    manager.repo = new IncentivesChannelsRepositoryMock();
    manager.handleError = jest.fn();
  });

  describe('Tests getChannels', () => {
    it('should call repo.fetchChannels and transform data', async () => {
      manager.repo.fetchChannels.mockReturnValueOnce(mockRepoResponce);
      await manager.getChannels(MOCK_INCENTIVE_ID);
      expect(manager.repo.fetchChannels).toHaveBeenCalledWith(MOCK_INCENTIVE_ID);
      expect(channelsUtils.transformChannelsResponse).toHaveBeenCalledWith(mockRepoResponce.data);
    });
    it('should call manager.handleError when repo throws an error', async () => {
      manager.repo.fetchChannels.mockImplementationOnce(() => {
        throw new Error('');
      });
      await manager.getChannels(MOCK_INCENTIVE_ID);
      expect(manager.handleError).toHaveBeenCalled();
    });
    it('should call manager.handleError when transformChannelsResponse throws an error', async () => {
      channelsUtils.transformChannelsResponse.mockImplementationOnce(() => {
        throw new Error('');
      });
      await manager.getChannels(MOCK_INCENTIVE_ID);
      expect(manager.handleError).toHaveBeenCalled();
    });
  });
});
