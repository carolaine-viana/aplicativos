/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { IUserCreateDto, IUserReadDto } from '@shared/models/User/IUserDtos';
import { Profiles } from 'shared/types';
import { getUserLogin, getUserRole } from 'shared/utils/asyncStorage';
import { getEarningsBalace } from '../dashUtils';
import DashboardRepository from './DashboardRepository';

export default class DashboardManager extends BaseManager {
  repo: DashboardRepository;

  constructor() {
    super();
    this.repo = new DashboardRepository();
  }

  async syncUserEarningsBalance(userLogin: string) {
    try {
      const response = await this.repo.getUserEarningsBalance();

      const earningsBalance = getEarningsBalace(response);
      if (userLogin) {
        await this.repo.userModel.updated(userLogin, (record: IUserCreateDto) => {
          record.earningsBalance = earningsBalance;
        });
      }
    } catch {}
  }

  public async getUserEarningsBalance(): Promise<IUserReadDto | null | void> {
    try {
      const userLogin = await getUserLogin();

      if (userLogin) {
        const userRole = await getUserRole();
        const isGV = userRole === Profiles.GV;
        if (!isGV) {
          await this.syncUserEarningsBalance(userLogin);
        }
        const user = await this.repo.userModel.getById(userLogin);
        return user;
      }
      return null;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
