import APIBFF from '@shared/base/api/APIBFF';
import UserModel from '@shared/models/User/UserModel';
import { IUserResponse } from 'shared/types/apiResponses/IUserResponse';
import { getUserLogin } from 'shared/utils/asyncStorage';

export default class DashboardRepository {
  public apiBff: APIBFF;

  public userModel;

  constructor() {
    this.apiBff = new APIBFF();
    this.userModel = new UserModel();
  }

  async getUserEarningsBalance() {
    const userLogin = await getUserLogin();

    return this.apiBff.instance.get<IUserResponse>(`/sales-reps/${userLogin}/earnings-balance`);
  }
}
