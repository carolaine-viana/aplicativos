import { AxiosRequestConfig } from 'axios';

import BaseAPI from './BaseAPI';

class APIAUTH extends BaseAPI {
  private static instance?: APIAUTH;

  constructor() {
    const instanceConfig = APIAUTH.getAPIAUTHConfig();
    super(instanceConfig);
    if (APIAUTH.instance instanceof APIAUTH) {
      return APIAUTH.instance;
    }
    APIAUTH.instance = this;
  }

  static getAPIAUTHConfig(): AxiosRequestConfig {
    // set other properties headers, timeout, auth..
    return {
      baseURL: 'https://ssd.martins.com.br/oauth/access-token',
      headers: {
        Authorization:
          'Basic N2JhMjBkMjQtM2RkYy0zZjY0LTk3ZTUtNDJiMmFhNDMzNTcyOjIzMzNkNGM1LTQ5NDItM2ZiNi1iNTkzLWI5Nzg1YzljYzY3Nw==',
        'Content-Type': 'application/json',
      },
    };
  }
}

export default APIAUTH;
