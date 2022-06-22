import APIBFF from '@shared/base/api/APIBFF';
import {
  IIncentiveResponse,
  IIncentivePerformanceResponse,
  IIncentiveMartinsResponse,
  IIcentiveMartinsDetailsResponse,
  IIncentiveMartinsPerformanceResponse,
  IIncentiveMartinsPerformanceWeeksResponse,
  ISupplierIndicatorsWeeksResponse,
  ISupplierIndicatorsMonthResponse,
} from 'shared/types';

export default class IncentivesRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  fetchIncentives(rcaId: string) {
    const url = `/sales-reps/${rcaId}/business-incentives`;
    return this.apiBff.instance.get<IIncentiveResponse>(url);
  }

  fetchIncentivesTerritoryManager(managerId: string) {
    const url = `/territory-managers/${managerId}/business-incentives`;
    return this.apiBff.instance.get<IIncentiveResponse>(url);
  }

  fetchIncentivesPerformanceIndicators(userId: string, incentiveId: string) {
    const url = `/sales-reps/${userId}/business-incentives/${incentiveId}/performance-indicators`;
    return this.apiBff.instance.get<IIncentivePerformanceResponse>(url);
  }

  fetchIncentivesPerformanceIndicatorsTerritoryManager(userId: string, incentiveId: string) {
    const url = `/territory-managers/${userId}/business-incentives/${incentiveId}/performance-indicators`;
    return this.apiBff.instance.get<IIncentivePerformanceResponse>(url);
  }

  fetchIcentivesMartins(userId: string) {
    const url = `/sales-reps/${userId}/sales-incentives`;
    return this.apiBff.instance.get<IIncentiveMartinsResponse>(url);
  }

  fetchIcentivesMartinsDetails(incentiveId: string) {
    const url = `/sales-incentives/${incentiveId}`;
    return this.apiBff.instance.get<IIcentiveMartinsDetailsResponse>(url);
  }

  fetchPerformanceIncentiveMartinsMonth(userId: string, incentiveId: string, yearMonth: string) {
    const url = `/sales-reps/${userId}/sales-incentives/${incentiveId}/month/${yearMonth}/performance-indicators`;
    return this.apiBff.instance.get<IIncentiveMartinsPerformanceResponse>(url);
  }

  fetchPerformanceIncentiveMartinsWeeks(userId: string, incentiveId: string, yearMonth: string) {
    const url = `/sales-reps/${userId}/sales-incentives/${incentiveId}/month/${yearMonth}/weeks/performance-indicators`;
    return this.apiBff.instance.get<IIncentiveMartinsPerformanceWeeksResponse>(url);
  }

  fetchSuppliersIndicatorsWeeks(rcaId: string, selectedMonth: string) {
    const url = `/sales-reps/${rcaId}/focus-suppliers/month/${selectedMonth}/weeks/indicators`;
    return this.apiBff.instance.get<ISupplierIndicatorsWeeksResponse>(url);
  }

  fetchSuppliersIndicatorsMonth(rcaId: string, selectedMonth: string) {
    const url = `/sales-reps/${rcaId}/focus-suppliers/indicators?month=${selectedMonth}`;
    return this.apiBff.instance.get<ISupplierIndicatorsMonthResponse>(url);
  }
}
