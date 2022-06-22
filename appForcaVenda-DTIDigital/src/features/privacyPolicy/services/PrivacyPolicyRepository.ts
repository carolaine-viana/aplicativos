import APIBFF from '@shared/base/api/APIBFF';
import {
  ITermUseGetSalesRepResponse,
  ITermUseGetSalesManagerResponse,
  ITermUsePostSalesRepResponse,
  ITermUsePostSalesManagerResponse,
} from 'shared/types';

export default class PrivacyPolicyRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  fetchSalesRepsAcceptedPrivacyPolicy(userId: string) {
    const url = `/sales-reps/${userId}`;
    return this.apiBff.instance.get<ITermUseGetSalesRepResponse>(url);
  }

  fetchSalesManagersAcceptedPrivacyPolicy(userId: string) {
    const url = `/sales-managers/${userId}`;
    return this.apiBff.instance.get<ITermUseGetSalesManagerResponse>(url);
  }

  sendSalesRepsAcceptedPrivacyPolicy(userId: string) {
    const url = `/sales-reps/${userId}/accept-terms-of-use`;
    return this.apiBff.instance.post<ITermUsePostSalesRepResponse>(url);
  }

  sendSalesManagersAcceptedPrivacyPolicy(userId: string) {
    const url = `/sales-managers/${userId}/accept-terms-of-use`;
    return this.apiBff.instance.post<ITermUsePostSalesManagerResponse>(url);
  }
}
