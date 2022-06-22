import APIBFF from '@shared/base/api/APIBFF';
import { IWeeksResponse, TDateFormats, IFocusSupplierCustomersResponse } from 'shared/types';

export default class ServedCustomersRepository {
  public apiBff;

  constructor() {
    this.apiBff = new APIBFF();
  }

  fetchMonthWeeks(yearMonth: TDateFormats['yearMonth']) {
    const url = `/sales-incentives/month/${yearMonth}/weeks`;
    return this.apiBff.instance.get<IWeeksResponse>(url);
  }

  fetchFocusSupplierWeek(
    userId: string,
    supplierType: string,
    yearMonthDay: TDateFormats['yearMonthDay']
  ) {
    let url;
    if (supplierType) {
      url = `/sales-reps/${userId}/focus-suppliers/customers-results?type=${supplierType}&week=${yearMonthDay}`;
    } else {
      url = `/sales-reps/${userId}/focus-suppliers/customers-results?week=${yearMonthDay}`;
    }
    return this.apiBff.instance.get<IFocusSupplierCustomersResponse>(url);
  }

  fetchFocusSupplierMonth(
    userId: string,
    supplierType: string,
    yearMonth: TDateFormats['yearMonth']
  ) {
    const url = `/sales-reps/${userId}/focus-suppliers/customers-results?type=${supplierType}&month=${yearMonth}`;
    return this.apiBff.instance.get<IFocusSupplierCustomersResponse>(url);
  }
}
