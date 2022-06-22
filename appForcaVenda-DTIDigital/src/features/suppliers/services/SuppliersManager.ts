/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { mountMonthParam, mountWeekParam } from '@shared/utils/generalUtils';
import { ISupplier, ICustomersServed, TSupplierTypes } from 'shared/types';
import { getUserLogin } from 'shared/utils/asyncStorage';
import {
  transformSuppliersBattleMapResponse,
  TTimeCourse,
  transformCustomersServedResponse,
  transformSuppliersIndicatorsMonth,
  transformSuppliersIndicatorsWeeks,
} from '../suppliersUtils';
import SuppliersRepository from './SuppliersRepository';

export default class SuppliersManager extends BaseManager {
  repo: SuppliersRepository;

  constructor() {
    super();
    this.repo = new SuppliersRepository();
  }

  async mountFilters(
    timeCourse: TTimeCourse
  ): Promise<{ rcaLogin: string; timeCourseReqParam: string }> {
    const rcaLogin = (await getUserLogin()) as string;
    const timeCourseReqParam = timeCourse === 'month' ? mountMonthParam() : mountWeekParam();
    return {
      rcaLogin,
      timeCourseReqParam,
    };
  }

  async getSuppliersBattleMap(
    timeCourse: TTimeCourse,
    category: TSupplierTypes
  ): Promise<ISupplier[] | undefined> {
    try {
      const { rcaLogin, timeCourseReqParam } = await this.mountFilters(timeCourse);
      const res = await this.repo.fetchSuppliersBattleMap(rcaLogin, category, timeCourseReqParam);

      const transformedData = transformSuppliersBattleMapResponse(res.data);
      return transformedData;
    } catch (error) {
      this.handleError(error);
    }
  }

  // TODO: 22738: REMOVER FUNÇÃO DO MANAGER E REPO E TRANSFORM. JA FEITO NA FEATURE CUSTOMER SERVED
  async getCustomersServed(
    timeCourse: TTimeCourse,
    category: TSupplierTypes
  ): Promise<ICustomersServed[] | undefined> {
    try {
      const { rcaLogin, timeCourseReqParam } = await this.mountFilters(timeCourse);
      const res = await this.repo.fetchCustomersServed(rcaLogin, category, timeCourseReqParam);

      return transformCustomersServedResponse(res.data);
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
