import VisitModel from '@shared/models/Visit/VisitModel';
import { IVisitCustomer } from 'shared/types';
import { mapperVisits } from 'shared/utils';
import APIBFF from '../../../shared/base/api/APIBFF';

import CustomerModel from '../../../shared/models/Customer/CustomerModel';

export default class RoadMapRepository extends CustomerModel {
  public apiBff;

  visitModel: VisitModel;

  constructor() {
    super();
    this.apiBff = new APIBFF();
    this.visitModel = new VisitModel();
  }

  async getCostumerVisits() {
    return this.visitModel.getAllManualJoin<IVisitCustomer>(
      {
        rightTable: {
          name: 'customers',
          key: 'id',
        },
        leftTable: {
          name: 'visits',
          key: 'customer_id',
        },
      },
      mapperVisits
    );
  }
}
