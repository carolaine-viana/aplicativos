/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import {
  getAcceptedTermUseDate,
  setDateAcceptedTermUse,
  getUpdatedTermUseDate,
  setDateUpdatedTermUse,
  getUserLogin,
} from '@shared/utils/asyncStorage';
import { Profiles } from 'shared/types';
import PrivacyPolicyRepository from './PrivacyPolicyRepository';
import {
  isNewTermOfUse,
  transformTermUseGetResponseManagers,
  transformTermUseGetResponseReps,
} from '../privacyPolicyUtils';

export default class PrivacyPolicyManager extends BaseManager {
  repo: PrivacyPolicyRepository;

  constructor() {
    super();
    this.repo = new PrivacyPolicyRepository();
  }

  async syncDateAcceptedPrivacyPolicy(userRole: string, userId: string) {
    try {
      let response;
      let transformedData;
      const isSalesManager = userRole === Profiles.GV;
      if (isSalesManager) {
        response = await this.repo.fetchSalesManagersAcceptedPrivacyPolicy(userId);
        transformedData = transformTermUseGetResponseManagers(response.data);
      } else {
        response = await this.repo.fetchSalesRepsAcceptedPrivacyPolicy(userId);
        transformedData = transformTermUseGetResponseReps(response.data);
      }
      await setDateUpdatedTermUse(transformedData?.termsOfUseLastUpdate);
      await setDateAcceptedTermUse(transformedData?.termsOfUseLastAcceptanceDate);
    } catch {}
  }

  async shouldLoadPrivacyPolicy(userRole: string): Promise<boolean> {
    try {
      const userLogin = (await getUserLogin()) as string;
      await this.syncDateAcceptedPrivacyPolicy(userRole, userLogin);

      const acceptedTermUse = await getAcceptedTermUseDate();
      const updatedTermUseAfterSync = await getUpdatedTermUseDate();

      if (acceptedTermUse && updatedTermUseAfterSync) {
        return isNewTermOfUse(updatedTermUseAfterSync, acceptedTermUse);
      }

      return false;
    } catch {
      return false;
    }
  }

  async acceptTermOfUse(userRole: string): Promise<{
    accepted: boolean;
    error?: boolean;
  }> {
    try {
      const userLogin = (await getUserLogin()) as string;
      const isSalesManager = userRole === Profiles.GV;
      if (isSalesManager) {
        await this.repo.sendSalesManagersAcceptedPrivacyPolicy(userLogin);
      } else {
        await this.repo.sendSalesRepsAcceptedPrivacyPolicy(userLogin);
      }
      const shouldLoad = await this.shouldLoadPrivacyPolicy(userRole);
      return {
        accepted: !shouldLoad,
      };
    } catch {
      return {
        accepted: false,
        error: true,
      };
    }
  }
}
