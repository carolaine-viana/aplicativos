/**
 * Use this to interact with APIs and/or Local DB
 */
import { AxiosResponse } from 'axios';
import APIBFF from '../../../shared/base/api/APIBFF';
import { IUserRoleResponse } from '../../../shared/types';

class LoginRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  async loginUser(userLogin: string, userPassword: string) {
    return this.apiBff.instance.post(`/sales-reps/${userLogin}/authenticate`, {
      password: userPassword,
    });
  }

  async loginGV(userLogin: string, userPassword: string) {
    return this.apiBff.instance.post(`/sales-managers/${userLogin}/authenticate`, {
      password: userPassword,
    });
  }

  async fetchUserId(userLogin: string): Promise<AxiosResponse<IUserRoleResponse>> {
    return this.apiBff.instance.get(`/sales-reps/${userLogin}`);
  }
}

export default LoginRepository;
