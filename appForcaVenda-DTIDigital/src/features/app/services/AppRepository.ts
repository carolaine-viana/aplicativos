import { AxiosResponse } from 'axios';
import APIBFF from '@shared/base/api/APIBFF';
import { IUserRoleResponse } from 'shared/types';
import UserModel from '@shared/models/User/UserModel';

export interface IAppRepository {
  apiBff: APIBFF;
  userModel: UserModel;
  fetchUserRole: (userLogin: string) => Promise<AxiosResponse<IUserRoleResponse>>;
}
export default class AppRepository implements IAppRepository {
  apiBff;

  userModel;

  constructor() {
    this.apiBff = new APIBFF();
    this.userModel = new UserModel();
  }

  async fetchUserRole(userLogin: string): Promise<AxiosResponse<IUserRoleResponse>> {
    return this.apiBff.instance.get(`/sales-reps/${userLogin}`);
  }
}
