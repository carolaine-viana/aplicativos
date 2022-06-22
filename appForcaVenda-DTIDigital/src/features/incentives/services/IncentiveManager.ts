/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { IIncentive, IIncentivePerformanceIndicator, Profiles } from 'shared/types';
import { getUserLogin, getUserRole } from 'shared/utils/asyncStorage';
import {
  transformIncentiveIndicatorsResponse,
  transformIncentiveResponse,
  transformIncentivesMartinsResponse,
  transformIncentivesMartinsDetailsResponse,
  transformIncentivesMartinsPerformanceMonth,
  transformIncentivesMartinsPerformanceWeeks,
  classifyIncentives,
  transformSuppliersIndicatorsMonth,
  transformSuppliersIndicatorsWeeks,
} from '../incentivesUtils';
import IncentivesRepository from './IncentiveRepository';

export default class IncentiveManager extends BaseManager {
  repo: IncentivesRepository;

  constructor() {
    super();
    this.repo = new IncentivesRepository();
  }

  async getIncentives(): Promise<IIncentive[] | undefined> {
    try {
      const userId = (await getUserLogin())!;
      const role = await getUserRole();
      let response;

      if (role === Profiles.GT) {
        response = await this.repo.fetchIncentivesTerritoryManager(userId);
      } else {
        response = await this.repo.fetchIncentives(userId);
      }

      const transformedData = transformIncentiveResponse(response.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getIncentivesPerformanceIndicators(
    indicatorId: string
  ): Promise<IIncentivePerformanceIndicator[] | undefined> {
    try {
      const userId = (await getUserLogin())!;
      const userRole = await getUserRole();
      let response;
      const isGT = userRole === Profiles.GT;
      if (isGT) {
        response = await this.repo.fetchIncentivesPerformanceIndicatorsTerritoryManager(
          userId,
          indicatorId
        );
      } else {
        response = await this.repo.fetchIncentivesPerformanceIndicators(userId, indicatorId);
      }
      return transformIncentiveIndicatorsResponse(response.data, isGT);
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getIncentivesMartins() {
    try {
      const userId = (await getUserLogin())!;
      const response = await this.repo.fetchIcentivesMartins(userId);
      const transformedData = transformIncentivesMartinsResponse(response.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getIncentivesMartinsDetails(incentiveId: string) {
    try {
      const response = await this.repo.fetchIcentivesMartinsDetails(incentiveId);
      const transformedData = transformIncentivesMartinsDetailsResponse(response.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getMartinsPerformanceIndicators(incentiveId: string, selectedMonth: string) {
    try {
      const userId = (await getUserLogin())!;

      const monthIndicatorsPromise = this.repo.fetchPerformanceIncentiveMartinsMonth(
        userId,
        incentiveId,
        selectedMonth
      );

      const weeksIndicatorsPromise = this.repo.fetchPerformanceIncentiveMartinsWeeks(
        userId,
        incentiveId,
        selectedMonth
      );

      const [monthResponse, weeksResponse] = await Promise.all([
        monthIndicatorsPromise,
        weeksIndicatorsPromise,
      ]);

      return {
        month: transformIncentivesMartinsPerformanceMonth(monthResponse.data),
        weeks: transformIncentivesMartinsPerformanceWeeks(weeksResponse.data),
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getAllIncentives() {
    try {
      const supplierIncentives = (await this.getIncentives()) ?? [];
      const martinsIncentives = (await this.getIncentivesMartins()) ?? [];
      return classifyIncentives(supplierIncentives, martinsIncentives);
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getSuppliersIndicators(selectedMonth: string) {
    try {
      const rcaLogin = (await getUserLogin()) as string;

      const monthSuppliersPromise = this.repo.fetchSuppliersIndicatorsMonth(
        rcaLogin,
        selectedMonth
      );
      const weeksSuppliersPromise = this.repo.fetchSuppliersIndicatorsWeeks(
        rcaLogin,
        selectedMonth
      );

      const [monthResponse, weeksResponse] = await Promise.all([
        monthSuppliersPromise,
        weeksSuppliersPromise,
      ]);

      return {
        month: transformSuppliersIndicatorsMonth(monthResponse.data),
        weeks: transformSuppliersIndicatorsWeeks(weeksResponse.data),
      };
    } catch (error) {
      return this.handleError(error);
    }
  }
}
