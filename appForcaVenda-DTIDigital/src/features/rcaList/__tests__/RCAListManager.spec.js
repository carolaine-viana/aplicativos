import '../../../shared/utils/mock-react-native-third-lib';
import RCAListRepository from '../services/RCAListRepository';
import RCAListManager from '../services/RCAListManager';
// import * as asyncStorage from '../../../shared/utils/asyncStorage';

jest.mock('../../../shared/base/api/BaseManager');
jest.mock('../services/RCAListRepository');
// jest.mock('../../../shared/utils/asyncStorage', {
//   getUserLogin: jest.fn(),
// });

describe('Tests RCAListManager', () => {
  let manager;
  let mockRepo;
  beforeAll(() => {
    mockRepo = new RCAListRepository();
    manager = new RCAListManager();
    manager.repo = mockRepo;
    manager.handleError = jest.fn();
  });
  it('should call repo to get GT Rcas ', async () => {
    manager.repo.getRcasGt.mockReturnValueOnce({ data: { sales_reps: [] } });
    await manager.getRcasGt();
    expect(manager.repo.getRcasGt).toHaveBeenCalled();
  });
  it('should handle error from repo', async () => {
    manager.repo.getRcasGt.mockImplementationOnce(() => {
      throw new Error('');
    });
    await manager.getRcasGt();
    expect(manager.handleError).toHaveBeenCalled();
  });
});
