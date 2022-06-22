import APIBFF from '@shared/base/api/APIBFF';
import {
  ICustomersServedResponse,
  ISuppliersResponse,
  ISupplierIndicatorsWeeksResponse,
  ISupplierIndicatorsMonthResponse,
} from '@shared/types';

export default class SuppliersRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  async fetchSuppliersBattleMap(rcaId: string, category: string, timeCourse: string) {
    const url = `/sales-reps/${rcaId}/focus-suppliers?type=${category}&${timeCourse}`;
    return this.apiBff.instance.get<ISuppliersResponse>(url);
  }

  // TODO: 22738: REMOVER FUNÇÃO DO MANAGER E REPO E TRANSFORM. JA FEITO NA FEATURE CUSTOMER SERVED
  async fetchCustomersServed(rcaId: string, category: string, timeCourse: string) {
    const url = `/sales-reps/${rcaId}/focus-suppliers/customers-results?type=${category}&${timeCourse}`;
    return this.apiBff.instance.get<ICustomersServedResponse>(url);
  }

  // TODO: TESTES UNITARIOS
  async fetchSuppliersIndicatorsWeeks(rcaId: string, selectedMonth: string) {
    const url = `/sales-reps/${rcaId}/focus-suppliers/month/${selectedMonth}/weeks/indicators`;
    return this.apiBff.instance.get<ISupplierIndicatorsWeeksResponse>(url);
  }

  async fetchSuppliersIndicatorsMonth(rcaId: string, selectedMonth: string) {
    const url = `/sales-reps/${rcaId}/focus-suppliers/indicators?month=${selectedMonth}`;
    return this.apiBff.instance.get<ISupplierIndicatorsMonthResponse>(url);
  }
}
