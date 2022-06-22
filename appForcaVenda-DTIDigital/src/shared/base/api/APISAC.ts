import { AxiosRequestConfig } from 'axios';
import { mountAuthenticatedLink } from 'features/SAC/sacUtils';
import { SAC_URL_BASE } from 'shared/constants/API_SDK_KEYS';
import { EPage } from 'shared/types';
import BaseAPI from './BaseAPI';

class APISAC extends BaseAPI {
  private static instance?: APISAC;

  constructor() {
    const instanceConfig = APISAC.getAPISACConfig();
    super(instanceConfig);

    if (APISAC.instance instanceof APISAC) {
      return APISAC.instance;
    }

    APISAC.instance = this;
    this.initializeCustomReqInterceptors();
  }

  initializeCustomReqInterceptors = () => {
    this.instance.interceptors.request.use(async (config) => {
      if (config.method === 'GET') {
        const headerLocation = mountAuthenticatedLink(config.url as EPage, config.params);
        return {
          ...config,
          headers: {
            ...config.headers,
            Location: headerLocation,
          },
        };
      }
      return {};
    });
  };

  static getAPISACConfig(): AxiosRequestConfig {
    return {
      baseURL: SAC_URL_BASE,
      headers: {},
    };
  }
}

export default APISAC;
