export interface ISupplierIndicatorsWeeksResponse {
  weeks: [
    {
      week: string;
      focus_suppliers_indicators: [
        {
          id: string;
          focus_suppliers_total_customers_result?: number;
          wildcard_suppliers_total_customers_result?: number;
          wildcard_suppliers_customers_result: [
            {
              wildcard_suppliers_quantity?: number;
              customers_quantity?: number;
            }
          ];
          earned_value?: number;
        }
      ];
    }
  ];
}

export interface ISupplierIndicatorsMonthResponse {
  focus_suppliers_indicators: [
    {
      id: number;
      focus_suppliers_total_customers_result?: number;
      wildcard_suppliers_total_customers_result?: number;
      wildcard_suppliers_customers_result: [
        {
          wildcard_suppliers_quantity?: number;
          customers_quantity?: number;
        }
      ];
      earned_value?: number;
    }
  ];
}
