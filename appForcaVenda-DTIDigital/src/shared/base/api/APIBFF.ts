import * as asyncStorage from '@shared/utils/asyncStorage';
import { AxiosRequestConfig } from 'axios';
import APIAUTH from '@shared/base/api/APIAUTH';
import { ITokenResponse } from 'shared/types';
import { isTokenExpired, mountTokenExpirationDate } from 'shared/utils';

import BaseAPI from './BaseAPI';

class APIBFF extends BaseAPI {
  private static instance?: APIBFF;

  private apiAuth;

  constructor() {
    const instanceConfig = APIBFF.getAPIBFFConfig();
    super(instanceConfig);
    this.apiAuth = new APIAUTH();
    if (APIBFF.instance instanceof APIBFF) {
      return APIBFF.instance;
    }

    APIBFF.instance = this;
    this.initializeCustomReqInterceptors();
  }

  static getAPIBFFConfig(): AxiosRequestConfig {
    // set other properties headers, timeout, auth..
    return {
      baseURL: 'https://ssd.martins.com.br/mobile.forcavendasapi',
      headers: {
        'Content-Type': 'application/json',
        client_id: '7ba20d24-3ddc-3f64-97e5-42b2aa433572',
      },
    };
  }

  initializeCustomReqInterceptors = () => {
    this.instance.interceptors.request.use(async (config) => {
      const expirationDate = await asyncStorage.getTokenExpiration();

      if (isTokenExpired(expirationDate)) {
        const responseToken = await this.apiAuth.instance.post<ITokenResponse>('', {
          grant_type: 'client_credentials',
        });
        const newDateExpiration = mountTokenExpirationDate(responseToken.data.expires_in);
        await asyncStorage.setToken(responseToken.data.access_token);
        await asyncStorage.setTokenExpiration(newDateExpiration);
      }

      const token = await asyncStorage.getToken();

      return {
        ...config,
        headers: {
          ...config.headers,
          access_token: token,
        },
      };
    });
  };

  static async getCredentials() {
    const token = await asyncStorage.getToken();
    const userLogin = await asyncStorage.getUserLogin();
    return {
      token,
      userLogin,
    };
  }
}

export default APIBFF;
