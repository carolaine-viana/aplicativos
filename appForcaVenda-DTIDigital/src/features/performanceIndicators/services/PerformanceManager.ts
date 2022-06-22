/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import {
  ICustomersIndicatorsCreateDto,
  ICustomersIndicatorsReadDto,
  ISalesIndicatorsCreateDto,
  ISalesIndicatorsReadDto,
  ITeamIndicator,
} from 'shared/types';
import * as asyncStorage from 'shared/utils/asyncStorage';
import { mountMonthParam, mountWeekParam } from '@shared/utils';
import {
  transformCustomersIndicatorsResponse,
  transformSalesIndicatorsResponse,
  extractMonthWeekIndicators,
  transformGtTeamIndicatorsResponse,
} from '../performanceUtils';
import PerformanceRepository from './PerformanceRepository';

export default class PerformanceManager extends BaseManager {
  repo: PerformanceRepository;

  constructor() {
    super();
    this.repo = new PerformanceRepository();
  }

  async fetchIndicators(rcaId: string) {
    const monthParam = mountMonthParam();
    const weekhParam = mountWeekParam();

    const indicatorsPromises = [
      this.repo.getIndicatorsMonth(rcaId, monthParam),
      this.repo.getIndicatorsWeek(rcaId, weekhParam),
    ];
    const [monthIndicators, weekIndicators] = await Promise.all(indicatorsPromises);
    const [customersMonth, customersWeek] = transformCustomersIndicatorsResponse(
      monthIndicators.data,
      weekIndicators.data
    );
    const [salesMonth, salesWeek] = transformSalesIndicatorsResponse(
      monthIndicators.data,
      weekIndicators.data
    );
    return {
      customersIndicators: {
        month: customersMonth[0],
        week: customersWeek[0],
      },
      salesIndicators: {
        month: salesMonth[0],
        week: salesWeek[0],
      },
    };
  }

  async syncIndicators() {
    try {
      const userLogin = await asyncStorage.getUserLogin();
      if (userLogin) {
        const { customersIndicators, salesIndicators } = await this.fetchIndicators(userLogin);
        await this.persistCustomers(customersIndicators.month, customersIndicators.week);
        await this.persistSales(salesIndicators.month, salesIndicators.week);
      }
    } catch (error) {}
  }

  async persistCustomers(
    monthIndicators: ICustomersIndicatorsCreateDto,
    weekIndicators: ICustomersIndicatorsCreateDto
  ) {
    await this.repo.customersIndicatorsModel.deleteAll();
    await this.repo.customersIndicatorsModel.insertMany([monthIndicators, weekIndicators]);
  }

  async persistSales(
    monthIndicators: ISalesIndicatorsCreateDto,
    weekIndicators: ISalesIndicatorsCreateDto
  ) {
    await this.repo.salesIndicatorsModel.deleteAll();
    await this.repo.salesIndicatorsModel.insertMany([monthIndicators, weekIndicators]);
  }

  async getCustomerIndicators() {
    try {
      const indicators = await this.repo.customersIndicatorsModel.getAllLocal();
      if (indicators) {
        return extractMonthWeekIndicators<ICustomersIndicatorsReadDto>(indicators);
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  async getSalesIndicators() {
    try {
      const indicators = await this.repo.salesIndicatorsModel.getAllLocal();
      if (indicators) {
        return extractMonthWeekIndicators<ISalesIndicatorsReadDto>(indicators);
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  async getIndicators(isRCA: boolean | undefined, rcaId?: string | undefined) {
    try {
      if (isRCA) {
        await this.syncIndicators();
        const localCustomersIndicators = await this.getCustomerIndicators();
        const localSalesIndicators = await this.getSalesIndicators();
        return {
          customersIndicators: localCustomersIndicators,
          salesIndicators: localSalesIndicators,
        };
      }

      if (rcaId) {
        const { customersIndicators, salesIndicators } = await this.fetchIndicators(rcaId);

        return {
          customersIndicators,
          salesIndicators,
        };
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  async getManagerTeamIndicators(): Promise<ITeamIndicator | void> {
    try {
      const userLogin = (await asyncStorage.getUserLogin()) as string;
      const isGV = await asyncStorage.isUserGV();
      const monthParam = mountMonthParam();

      let response;
      if (isGV) {
        response = await this.repo.getGVTeamIndicators(userLogin, monthParam);
      } else {
        return await this.getGTIndicators(userLogin);
      }

      const result = transformGtTeamIndicatorsResponse(response.data);

      return result;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getGTIndicators(gtId: string | number): Promise<ITeamIndicator | void> {
    try {
      const monthParam = mountMonthParam();
      const response = await this.repo.getGTTeamIndicators(gtId, monthParam);
      const result = transformGtTeamIndicatorsResponse(response.data);
      return result;
    } catch (error) {
      return this.handleError(error);
    }
  }
}
