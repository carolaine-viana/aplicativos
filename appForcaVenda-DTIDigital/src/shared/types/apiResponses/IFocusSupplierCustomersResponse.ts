export interface IFocusSupplierCustomersResponse {
  customers: Array<{
    id: number;
    trade_name: string;
    company_name: string;
    cnpj: string;
    business_unit: string;
    focus_suppliers: Array<{
      id: number;
      name: string;
      type: string;
      level: string;
    }>;
  }>;
}
