import '../../../shared/utils/mock-react-native-third-lib';
import expect from 'expect';
import * as asyncStorage from '../../../shared/utils/asyncStorage';
import LoginRepository from '../service/LoginRepository';
import { LoginManager } from '../service/LoginManager';
import * as loginUtils from '../loginUtils';
import DataBaseMock from '../../../shared/base/db/DataBase';

jest.mock('../../../shared/base/db/DataBase', () => {
  return {
    action: jest.fn(),
  };
});

jest.mock('../loginUtils', () => ({
  mountUserGVInfo: jest.fn(),
  checkUserLoginGV: jest.fn(),
}));

jest.mock('../../app/services/AppManager', () => {
  return class AppManagerMock {
    constructor() {}
    persistUserInfo = jest.fn();
    setRoleIntoStorage = jest.fn();
  };
});

jest.mock('../../../shared/utils/asyncStorage', () => {
  return {
    setUserLogin: jest.fn(),
    getUserLogin: jest.fn(),
    clear: jest.fn(),
  };
});

jest.mock('../../../shared/base/api/BaseManager', () => {
  return class BaseManagerMock {};
});

jest.mock('../service/LoginRepository', () => {
  return class LoginRepoMock {
    loginUser = jest.fn();
    loginGV = jest.fn();
  };
});

describe('Tests LoginManager', () => {
  const USER_LOGIN = '44181';
  const USER_PSW = '44181';
  const USER_ROLE_RCA = 'RCA';
  const USER_ROLE_GV = 'GV';
  const MOCKREPONSE_REPO = {
    data: {
      status: 1,
    },
  };

  let manager;

  beforeAll(() => {
    manager = new LoginManager();
    manager.repo = new LoginRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Tests on loginUser()', () => {
    it(`should call loginRep when user is ${USER_ROLE_RCA}`, async () => {
      loginUtils.checkUserLoginGV.mockReturnValueOnce(false);
      const spyLoginRep = jest.spyOn(manager, 'loginRep');

      await manager.loginUser(USER_LOGIN, USER_PSW);

      expect(loginUtils.checkUserLoginGV).toHaveBeenCalled();
      expect(spyLoginRep).toHaveBeenCalled();
    });
    it(`should call loginRloginGV  when user is ${USER_ROLE_GV}`, async () => {
      loginUtils.checkUserLoginGV.mockReturnValueOnce(true);
      const spyLoginGV = jest.spyOn(manager, 'loginGV');
      const spyLoginRep = jest.spyOn(manager, 'loginRep');

      await manager.loginUser(USER_LOGIN, USER_PSW);

      expect(loginUtils.checkUserLoginGV).toHaveBeenCalled();
      expect(spyLoginRep).not.toHaveBeenCalled();
      expect(spyLoginGV).toHaveBeenCalled();
      spyLoginRep.mockClear();
      spyLoginGV.mockClear();
    });
  });
  describe('Tests on loginRep()', () => {
    it.skip('should clear async storage if new user is different of current logged user', async () => {
      const NEW_USER_LOGIN_IN = '15775';

      manager.repo.loginUser.mockResolvedValueOnce(MOCKREPONSE_REPO);
      asyncStorage.getUserLogin.mockResolvedValueOnce(USER_LOGIN);
      const spyResetLocalData = jest.spyOn(manager, 'resetLocalData');

      const res = await manager.loginRep(NEW_USER_LOGIN_IN, USER_PSW);

      expect(asyncStorage.clear).toHaveBeenCalled();
      expect(spyResetLocalData).toHaveBeenCalled();
      expect(asyncStorage.setUserLogin).toHaveBeenCalled();
      expect(res).toBe(true);
    });
    it.skip('should NOT clear async storage if new user IS SAME AS current logged user', async () => {
      manager.repo.loginUser.mockResolvedValueOnce(MOCKREPONSE_REPO);
      asyncStorage.getUserLogin.mockResolvedValueOnce(USER_LOGIN);
      const spyResetLocalData = jest.spyOn(manager, 'resetLocalData');

      const res = await manager.loginRep(USER_LOGIN, USER_PSW);

      expect(asyncStorage.clear).not.toHaveBeenCalled();
      expect(spyResetLocalData).not.toHaveBeenCalled();
      expect(asyncStorage.setUserLogin).toHaveBeenCalled();
      expect(res).toBe(true);
    });
  });

  describe('Tests on loginGV()', () => {
    it('should persist login info when user is GV ', async () => {
      const MOCK_LOGIN_GV_RESPONSE = {
        data: {
          id: '1234',
          name: 'GV Name',
          role: 'GV',
        },
      };

      manager.repo.loginGV.mockResolvedValueOnce(MOCK_LOGIN_GV_RESPONSE);
      loginUtils.mountUserGVInfo.mockReturnValueOnce(MOCK_LOGIN_GV_RESPONSE.data);
      const spyPersistGVInfo = jest.spyOn(manager, 'persistGVInfo');

      await manager.loginGV(USER_LOGIN, USER_PSW);

      expect(manager.repo.loginGV).toHaveBeenCalled();
      expect(spyPersistGVInfo).toHaveBeenCalled();
      expect(asyncStorage.setUserLogin).toHaveBeenCalledWith(MOCK_LOGIN_GV_RESPONSE.data.id);
    });
  });
  describe('Tests on resetLocalData()', () => {
    it('should call Database action', async () => {
      await manager.resetLocalData();
      expect(DataBaseMock.action).toHaveBeenCalled();
    });
  });
});
