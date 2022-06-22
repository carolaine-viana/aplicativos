import expect from 'expect';
import DashboardManager from '../services/DashboardManager';
import DashboardRepository from '../services/DashboardRepository';
import * as asyncStorage from '../../../shared/utils/asyncStorage';

jest.mock('../../../shared/utils/asyncStorage', () => ({
  getUserLogin: jest.fn(),
  getUserRole: jest.fn(),
}));

jest.mock('../dashUtils', () => ({
  transformUser: jest.fn(),
}));

jest.mock('../../../shared/base/api/BaseManager', () => {
  return class MockBaseManager {
    constructor() {}
  };
});

jest.mock('../services/DashboardRepository', () => {
  return class MockRepo {
    constructor() {}
    getUserEarningsBalance = jest.fn();
  };
});

describe('Testes DashboardManager', () => {
  let manager;

  beforeAll(() => {
    manager = new DashboardManager();
    manager.repo = new DashboardRepository();
    manager.handleError = jest.fn();
    manager.repo.userModel = {
      getById: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Tests getUserEarningsBalance', () => {
    const USER_LOGIN = '1234';
    const mockUserDB = {
      id: USER_LOGIN,
      name: 'User Name',
    };

    it('should return user info earnings balance', async () => {
      const sypSyncUserEarningsBalance = jest.spyOn(manager, 'syncUserEarningsBalance');

      asyncStorage.getUserLogin.mockResolvedValueOnce(USER_LOGIN);
      asyncStorage.getUserRole.mockResolvedValueOnce('GT');
      manager.repo.userModel.getById.mockResolvedValueOnce(mockUserDB);

      const res = await manager.getUserEarningsBalance();
      expect(sypSyncUserEarningsBalance).toHaveBeenCalledWith(USER_LOGIN);
      expect(manager.repo.userModel.getById).toHaveBeenCalledWith(USER_LOGIN);
      expect(res).toMatchObject(mockUserDB);
    });

    it('should null on trying to get earnings balance', async () => {
      asyncStorage.getUserLogin.mockResolvedValueOnce(null);

      const res = await manager.getUserEarningsBalance();
      expect(res).toBeNull();
    });

    it('should handle thrown error', async () => {
      asyncStorage.getUserLogin.mockImplementationOnce(() => {
        throw new Error('');
      });

      await manager.getUserEarningsBalance();
      expect(manager.handleError).toHaveBeenCalled();
    });
  });
});
