/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { getUserLogin, getUserRole } from 'shared/utils/asyncStorage';
import { openFile, shareFile, writeFile, createFolder } from 'shared/base';
import { Profiles } from 'shared/types';
import { transformBEMBalanceResponse, errorMessages } from '../bemUtils';
import BEMRepository from './BEMRepository';

export default class ManagerName extends BaseManager {
  repo: BEMRepository;

  constructor() {
    super();
    this.repo = new BEMRepository();
  }

  async getBEMBalance() {
    try {
      const userID = await getUserLogin();
      const userRole = await getUserRole();
      let response;
      if (userID) {
        if (userRole === Profiles.RCA) {
          response = await this.repo.fetchBEMBalanceRCA(userID);
        } else if (userRole === Profiles.GT) {
          response = await this.repo.fetchBEMBalanceGT(userID);
        } else {
          response = await this.repo.fetchBEMBalanceGV(userID);
        }
        const transformedData = transformBEMBalanceResponse(response.data);
        return transformedData;
      }
    } catch (error) {
      return this.handleError(error);
    }
  }

  async shareBEMBalanceSheet(fileName: string, fileContent: string) {
    try {
      await writeFile(fileName, fileContent);
      await shareFile(fileName);
    } catch (error) {
      throw new Error(errorMessages.share);
    }
  }

  async openBEMBalanceSheet(fileName: string, fileContent: string) {
    try {
      await writeFile(fileName, fileContent);
      await openFile(fileName);
    } catch (error) {
      throw new Error(errorMessages.open);
    }
  }

  async createFolder() {
    try {
      await createFolder();
    } catch (error) {
      throw new Error(errorMessages.default);
    }
  }
}
