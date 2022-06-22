import { ISupplier } from './ISupplier';

export interface ICustomersServed {
  id: string;
  tradeName: string;
  companyName: string;
  cnpj: string;
  businessUnit: string;
  focusSuppliers: ISupplier[];
}
