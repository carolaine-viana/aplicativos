import AppManager from '../services/AppManager';
import AppRepository from '../services/AppRepository';
import expect from 'expect';
import * as asyncStorage from '../../../shared/utils/asyncStorage';
import * as appUtils from '../appUtils';

jest.mock('../services/AppRepository', () => {
  return class AppRepositoryMock {
    constructor() {}
    fetchUserRole = jest.fn();
    userModel = {
      deleteAll: jest.fn(),
      createLocal: jest.fn(),
    };
  };
});

jest.mock('../../../shared/base/api/BaseManager');

jest.mock('../../../shared/utils/asyncStorage', () => ({
  getUserRole: jest.fn(),
  getUserLogin: jest.fn(),
  setUserRole: jest.fn(),
  clear: jest.fn(),
}));

jest.mock('../appUtils', () => ({
  mountUserInfo: jest.fn(),
  mapUserRole: jest.fn(),
}));

describe('Tests AppManager', () => {
  let mockRepo;
  let manager;
  const responseApiMock = {
    data: [{ sales_reps: [{ hierarchical_level: 'gestor' }] }],
  };

  beforeAll(() => {
    mockRepo = new AppRepository();
    manager = new AppManager();
    manager.repo = mockRepo;
  });

  describe('Tests return user role from async storage', () => {
    it('should return RCA as user role', async () => {
      asyncStorage.getUserRole.mockResolvedValueOnce('RCA');
      const res = await manager.getUserRole();
      expect(asyncStorage.getUserRole).toHaveBeenCalled();
      expect(res).toEqual('RCA');
    });
  });

  describe('Tests getUserRole()', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('should call repo to get user role and set it into storage', async () => {
      const mockUserInfo = {
        id: '44184',
        name: 'UserName',
        role: 'RCA',
      };

      manager.repo.fetchUserRole.mockResolvedValueOnce(responseApiMock);
      asyncStorage.getUserRole.mockResolvedValueOnce(null);
      asyncStorage.getUserLogin.mockResolvedValueOnce(mockUserInfo.id);
      appUtils.mountUserInfo.mockReturnValueOnce(mockUserInfo);

      const spysetRoleIntoStorage = jest.spyOn(manager, 'setRoleIntoStorage');
      const spySaveUserInfo = jest.spyOn(manager, 'persistUserInfo');
      spySaveUserInfo.mockResolvedValueOnce(true);

      await manager.getUserRole();
      expect(asyncStorage.getUserLogin).toHaveBeenCalled();
      expect(asyncStorage.getUserRole).toHaveBeenCalled();
      expect(spySaveUserInfo).toHaveBeenCalledWith(mockUserInfo);
      expect(spysetRoleIntoStorage).toHaveBeenCalledWith(mockUserInfo.role);
    });

    it('should not call repo to get user role. Should return it from storage', async () => {
      asyncStorage.getUserRole.mockResolvedValueOnce('RCA');

      const res = await manager.getUserRole();
      expect(asyncStorage.getUserRole).toHaveBeenCalled();
      expect(res).toEqual('RCA');
    });
  });

  describe('Tests setRoleIntoStorage()', () => {
    it(`should save 'RCA' indo storage`, async () => {
      await manager.setRoleIntoStorage('RCA');
      expect(asyncStorage.setUserRole).toHaveBeenCalledWith('RCA');
    });
    it(`should return null`, async () => {
      const res = await manager.setRoleIntoStorage();
      expect(res).toBeNull();
    });
  });

  describe('Tests persistUserInfo()', () => {
    it('should delete user and create in local DB', async () => {
      const mockUser = {
        id: '1234',
        name: 'User Name',
        role: 'RCA',
      };
      await manager.persistUserInfo(mockUser);
      expect(manager.repo.userModel.deleteAll).toHaveBeenCalled();
      expect(manager.repo.userModel.createLocal).toHaveBeenCalledWith(mockUser, 'id');
    });
  });

  describe('Tests on logout', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('should NOT clear async storage when logged user is RCA', async () => {
      asyncStorage.getUserRole.mockResolvedValueOnce('RCA');
      await manager.logout();
      expect(asyncStorage.getUserRole).toHaveBeenCalled();
      expect(asyncStorage.clear).not.toHaveBeenCalled();
    });
    it('should  clear async storage when logged user is NOT RCA', async () => {
      asyncStorage.getUserRole.mockResolvedValueOnce('GT');
      await manager.logout();
      expect(asyncStorage.getUserRole).toHaveBeenCalled();
      expect(asyncStorage.clear).toHaveBeenCalled();
    });
  });
});
