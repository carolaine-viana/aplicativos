import { IVisitReadDto, ICustomerReadDto } from '@shared/models';
import { TCreditStatus } from './TCreditStatus';

export interface IVisitCustomer extends IVisitReadDto, ICustomerReadDto {}
export interface IVisitCustomerTable {
  id: string;
  cnpj: string;
  customer_id: string;
  schedule: Date;
  latitude: number;
  longitude: number;
  trade_name: string;
  company_name: string;
  visit_completed: boolean;
  visiting_complement: string;
  visiting_city: string;
  visiting_state: string;
  visiting_neighborhood: string;
  visiting_number: string;
  visiting_street: string;
  visiting_zip_code: string;
  new_customer: boolean;
  credit_status: TCreditStatus;
  purchased_this_month: boolean;
  phone_number: string;
  buyer_name: string;
  buyer_phone_number: string;
  last_purchase_date: string;
  business_unit: string;
}
