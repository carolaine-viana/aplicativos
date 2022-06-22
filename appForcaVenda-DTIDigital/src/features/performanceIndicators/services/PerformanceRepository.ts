// import SomeModel from '@shared/models/';
import APIBFF from '@shared/base/api/APIBFF';
import { IIndicatorsResponse, ITeamIndicatorsResponse } from '@shared/types';
import SalesIndicatorsModel from '../../../shared/models/SalesIndicators/SalesIndicatorsModel';
import CustomersIndicatorsModel from '../../../shared/models/CustomersIndicators/CustomersIndicatorsModel';

export default class PerformanceRepository {
  public apiBff;

  public customersIndicatorsModel: CustomersIndicatorsModel;

  public salesIndicatorsModel: SalesIndicatorsModel;

  constructor() {
    this.apiBff = new APIBFF();
    this.customersIndicatorsModel = new CustomersIndicatorsModel();
    this.salesIndicatorsModel = new SalesIndicatorsModel();
  }

  async getIndicatorsMonth(rcaId: string, monthParam: string) {
    return this.apiBff.instance.get<IIndicatorsResponse>(
      `/sales-reps/${rcaId}/performance-indicators?${monthParam}`
    );
  }

  async getIndicatorsWeek(rcaId: string, weekParam: string) {
    return this.apiBff.instance.get<IIndicatorsResponse>(
      `/sales-reps/${rcaId}/performance-indicators?${weekParam}`
    );
  }

  async getGTTeamIndicators(userLogin: string, monthParam: string) {
    const url = `/territory-managers/${userLogin}/team-performance-indicators?${monthParam}`;
    return this.apiBff.instance.get<ITeamIndicatorsResponse>(url);
  }

  async getGVTeamIndicators(userLogin: string, monthParam: string) {
    return this.apiBff.instance.get<ITeamIndicatorsResponse>(
      `/sales-managers/${userLogin}/team-performance-indicators?${monthParam}`
    );
  }
}
