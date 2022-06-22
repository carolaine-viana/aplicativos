/**
 * Use this to apply business rules on data input/output
 */
import { getUserLogin, setUserLogin, clear as clearAsyncStorage } from '@shared/utils/asyncStorage';

import AppManager from 'features/app/services/AppManager';
import { IUserCreateDto } from 'shared/models/User/IUserDtos';
import Database from '@shared/base/db/DataBase';
import { isArrayEmpty } from 'shared/utils';
import BaseManager from '../../../shared/base/api/BaseManager';
import LoginRepository from './LoginRepository';
import { checkUserLoginGV, extractUserId, mountUserGVInfo } from '../loginUtils';

export class LoginManager extends BaseManager {
  private repo;

  constructor() {
    super();
    this.repo = new LoginRepository();
  }

  public async loginUser(userLogin: string, userPassword: string) {
    try {
      const isUserLoginGV = checkUserLoginGV(userLogin);
      if (isUserLoginGV) {
        return await this.loginGV(userLogin, userPassword);
      }

      return await this.loginRep(userLogin, userPassword);
    } catch (error) {
      return false;
    }
  }

  async loginRep(userLogin: string, userPassword: string) {
    const currentLoggedUser = await getUserLogin();
    const response = await this.repo.loginUser(userLogin, userPassword);
    const responseUser = await this.repo.fetchUserId(userLogin);

    if (response.data.status && !isArrayEmpty(responseUser.data.sales_reps)) {
      if (currentLoggedUser !== userLogin) {
        await clearAsyncStorage();
        await this.resetLocalData();
      }
      await setUserLogin(extractUserId(responseUser.data));

      return Boolean(response.data.status);
    }
    return false;
  }

  async loginGV(userLogin: string, userPassword: string) {
    const response = await this.repo.loginGV(userLogin, userPassword);
    const userInfo = mountUserGVInfo(response.data);
    await this.persistGVInfo(userInfo);
    await setUserLogin(userInfo?.id as string);
    return true;
  }

  async persistGVInfo(userInfo: IUserCreateDto) {
    const appManager = new AppManager();
    await appManager.persistUserInfo(userInfo);
    await appManager.setRoleIntoStorage(userInfo.role);
  }

  async resetLocalData() {
    await Database.action(async () => {
      await Database.unsafeResetDatabase();
    });
  }
}
