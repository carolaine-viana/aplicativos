export interface IFocusSupplierCustomer {
  id: string;
  tradeName: string;
  companyName: string;
  cnpj: string;
  businessUnit: string;
  focusSuppliers: Array<{
    id: number;
    name: string;
    type: string;
    level: string;
  }>;
}
