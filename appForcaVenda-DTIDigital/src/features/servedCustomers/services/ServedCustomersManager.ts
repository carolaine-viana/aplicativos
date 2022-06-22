/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { TSupplierTypes, TDateFormats } from 'shared/types';
import { getUserLogin } from '@shared/utils/asyncStorage';
import {
  getDateParamFocusSupplierMonth,
  getDateParamFocusSupplierWeek,
  transformFocusSupplier,
  transformWeeksResponse,
} from '../servedCustomersUtils';
import ServedCustomersRepository from './ServedCustomersRepository';

export default class ServedCustomersManager extends BaseManager {
  repo: ServedCustomersRepository;

  constructor() {
    super();
    this.repo = new ServedCustomersRepository();
  }

  async getMonthWeeks(monthDate: Date | TDateFormats['yearMonth']) {
    try {
      const monthDateParam = getDateParamFocusSupplierMonth(monthDate);
      const response = await this.repo.fetchMonthWeeks(monthDateParam);
      const transformedData = transformWeeksResponse(response.data);
      return transformedData;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getFocusSupplierWeek(
    yearMonthDayDate: TDateFormats['yearMonthDay'] | string,
    supplierType: TSupplierTypes | 'todos'
  ) {
    try {
      const userId = (await getUserLogin()) as string;
      const stringYearMonth = getDateParamFocusSupplierWeek(yearMonthDayDate);
      if (supplierType === 'todos') {
        const response = await this.repo.fetchFocusSupplierWeek(userId, '', stringYearMonth);

        return transformFocusSupplier(response.data);
      }
      const response = await this.repo.fetchFocusSupplierWeek(
        userId,
        supplierType,
        stringYearMonth
      );
      return transformFocusSupplier(response.data);
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getFocusSupplierMonth(
    yearMonth: Date | TDateFormats['yearMonth'],
    supplierType: TSupplierTypes
  ) {
    try {
      const userId = (await getUserLogin()) as string;
      const stringYearMonth = getDateParamFocusSupplierMonth(yearMonth);
      const response = await this.repo.fetchFocusSupplierMonth(
        userId,
        supplierType,
        stringYearMonth
      );
      return transformFocusSupplier(response.data);
    } catch (error) {
      return this.handleError(error);
    }
  }
}
