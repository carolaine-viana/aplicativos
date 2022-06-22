export interface ISupplierCustomerResult {
  wildcardSuppliersQuantity: number;
  customersQuantity: number;
}

export interface ISupplierFocusResult {
  focusSuppliersQuantity: number;
  customersQuantity: number;
}

export interface ISuppliersIndicators {
  id?: string;
  focusSuppliersTotalCustomersResult?: number;
  wildcardSuppliersTotalCustomersResult?: number;
  focusSuppliersCustomersResult?: ISupplierFocusResult[];
  wildcardSuppliersCustomersResult?: ISupplierCustomerResult[];
  earnedValue?: number;
}

export interface ISuppliersIndicatorsWeek extends ISuppliersIndicators {
  week: string;
}

export interface ISuppliersIndicatorsWeeks {
  weeks: ISuppliersIndicatorsWeek[];
}
