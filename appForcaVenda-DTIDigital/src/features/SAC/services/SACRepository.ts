import APIECOMMERCE from '@shared/base/api/APIECOMMERCE';
import APIBFF from '@shared/base/api/APIBFF';
import axios, { AxiosResponse } from 'axios';
import { IECommerceResponse, IUserRoleResponse } from 'shared/types';

export default class SACRepository {
  public apiECommerce;

  public apiBff;

  constructor() {
    this.apiECommerce = new APIECOMMERCE();
    this.apiBff = new APIBFF();
  }

  async fetUserCustomerCredentials(
    cpf: string,
    cnpj: string
  ): Promise<AxiosResponse<IECommerceResponse>> {
    const url = `?cnpj=${cnpj}&cpf=${cpf}`;
    return this.apiECommerce.instance.get<{
      CNPJ_CPF: string;
      Mensagem: string;
    }>(url);
  }

  async fetchLinkPage(link: string) {
    return axios.get(link);
  }

  async fetchUserCpf(userLogin: string): Promise<AxiosResponse<IUserRoleResponse>> {
    return this.apiBff.instance.get(`/sales-reps/${userLogin}`);
  }
}
