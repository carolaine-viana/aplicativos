/**
 * Use this to create generic/reusable API instances, API calls, API interceptors
 */
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import ReqResStatusError from '../../constants/ReqResStatusError';
import { IHttpError } from '../../types';

abstract class BaseAPI {
  // protected readonly instance: AxiosInstance;
  public instance: AxiosInstance;

  public constructor(instanceConfig?: AxiosRequestConfig) {
    this.instance = axios.create(instanceConfig);
    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this.handleResponse, this.handleError);
    this.instance.interceptors.request.use(this.handleRequest);
  };

  // do something before send request
  protected handleRequest = (config: AxiosRequestConfig) => config;

  private handleResponse = (axiosResponse: AxiosResponse) => axiosResponse;

  protected handleError = (error: AxiosError): Promise<IHttpError> => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return Promise.reject<IHttpError>({
        requestError: false,
        responseError: true,
        status: error.response.status.toString(),
        error: error.toJSON(),
      });
    }
    if (error.request) {
      // The request was made but no response was received
      return Promise.reject<IHttpError>({
        requestError: true,
        responseError: false,
        status: ReqResStatusError.UNKNOWN_ERROR.status,
        error: error.toJSON(),
      });
    }
    // Something happened in setting up the request that triggered an Error
    return Promise.reject<IHttpError>({
      requestError: false,
      responseError: false,
      status: ReqResStatusError.UNKNOWN_ERROR.status,
      error: error.toJSON(),
    });
  };
}

export default BaseAPI;
