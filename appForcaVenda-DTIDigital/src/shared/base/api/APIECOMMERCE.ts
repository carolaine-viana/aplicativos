import { AxiosRequestConfig } from 'axios';
import { E_COMMERCE_URL_BASE, E_COMMERCE_X_SSL_AUTH } from 'shared/constants/API_SDK_KEYS';
import BaseAPI from './BaseAPI';

class APIECOMMERCE extends BaseAPI {
  private static instance?: APIECOMMERCE;

  constructor() {
    const instanceConfig = APIECOMMERCE.getPreConfig();
    super(instanceConfig);

    if (APIECOMMERCE.instance instanceof APIECOMMERCE) {
      return APIECOMMERCE.instance;
    }

    APIECOMMERCE.instance = this;
  }

  static getPreConfig(): AxiosRequestConfig {
    return {
      baseURL: E_COMMERCE_URL_BASE,
      headers: {
        'X-Ssl-Auth': E_COMMERCE_X_SSL_AUTH,
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
      },
    };
  }
}

export default APIECOMMERCE;
