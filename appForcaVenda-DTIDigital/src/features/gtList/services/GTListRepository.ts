import APIBFF from '@shared/base/api/APIBFF';
import { IGTListResponse } from '@shared/types';

export default class GTListRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  fetchGTs(managerId: string): Promise<{ data: IGTListResponse }> {
    const url = `sales-managers/${managerId}/territory-managers`;
    return this.apiBff.instance.get<IGTListResponse>(url);
  }
}
