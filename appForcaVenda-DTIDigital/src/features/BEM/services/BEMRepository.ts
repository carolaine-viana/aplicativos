import { AxiosResponse } from 'axios';
import APIBFF from '@shared/base/api/APIBFF';
import { IBEMBalanceResponse } from 'shared/types';

export default class RepositoryName {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  async fetchBEMBalanceRCA(salesRepId: string): Promise<AxiosResponse<IBEMBalanceResponse>> {
    const url = `/sales-reps/${salesRepId}/exclusive-benefits/customer-balances/spreadsheet`;
    return this.apiBff.instance.get(url);
  }

  async fetchBEMBalanceGT(territoryManagerId: string): Promise<AxiosResponse<IBEMBalanceResponse>> {
    const url = `/territory-managers/${territoryManagerId}/exclusive-benefits/customer-balances/spreadsheet`;
    return this.apiBff.instance.get(url);
  }

  async fetchBEMBalanceGV(salesManagerId: string): Promise<AxiosResponse<IBEMBalanceResponse>> {
    const url = `/sales-managers/${salesManagerId}/exclusive-benefits/customer-balances/spreadsheet`;
    return this.apiBff.instance.get(url);
  }
}
