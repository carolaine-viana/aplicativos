/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { EPage, TSACPages } from '@shared/types';
import * as asyncStorage from '@shared/utils/asyncStorage';
import { extractCPF, isValidCredentials, mountAuthenticatedLink } from '../sacUtils';
import SACRepository from './SACRepository';

export default class SACManager extends BaseManager {
  repo: SACRepository;

  constructor() {
    super();
    this.repo = new SACRepository();
  }

  async getLink(cnpj: string, page: TSACPages) {
    try {
      const userLogin = (await asyncStorage.getUserLogin()) as string;

      const response = await this.repo.fetchUserCpf(userLogin);
      const userCPF = extractCPF(response.data);

      if (userCPF) {
        const userCustomerCredentials = await this.repo.fetUserCustomerCredentials(userCPF, cnpj);
        const { CNPJ_CPF } = userCustomerCredentials.data;

        if (isValidCredentials(CNPJ_CPF)) {
          const link = mountAuthenticatedLink(page, { login: CNPJ_CPF });
          const linkOk = await this.repo.fetchLinkPage(link);

          if (linkOk.status === 200) {
            return link;
          }
          return this.handleError('');
        }
      }

      return this.handleError('');
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getOccurrencePage(cnpj: string) {
    return this.getLink(cnpj, EPage.OCCURRENCE);
  }

  async getHistoryPage(cnpj: string) {
    return this.getLink(cnpj, EPage.HISTORY);
  }
}
