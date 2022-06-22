/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { Profiles, TRole } from '@shared/types';
import * as asyncStorage from '@shared/utils/asyncStorage';
import { IUserCreateDto } from 'shared/models/User/IUserDtos';
import { mountUserInfo } from '../appUtils';
import AppRepository, { IAppRepository } from './AppRepository';

export default class AppManager extends BaseManager {
  repo: IAppRepository;

  constructor() {
    super();
    this.repo = new AppRepository();
  }

  async setRoleIntoStorage(role: TRole | undefined) {
    if (role) {
      await asyncStorage.setUserRole(role);
      return role;
    }
    return null;
  }

  async persistUserInfo(user: IUserCreateDto) {
    await this.repo.userModel.deleteAll();
    await this.repo.userModel.createLocal(user, 'id');
  }

  async getUserInfo(userLogin: string) {
    const response = await this.repo.fetchUserRole(userLogin);
    return mountUserInfo(response.data);
  }

  async getUserRole() {
    try {
      const userRole = await asyncStorage.getUserRole();
      if (userRole) {
        return userRole;
      }

      const userLogin = await asyncStorage.getUserLogin();
      if (userLogin) {
        const userInfo = await this.getUserInfo(userLogin);
        if (userInfo) {
          await this.persistUserInfo(userInfo);
          return await this.setRoleIntoStorage(userInfo.role);
        }
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  async logout() {
    const userRole = await asyncStorage.getUserRole();
    if (userRole && userRole !== Profiles.RCA) {
      await asyncStorage.clear();
    }
  }
}
