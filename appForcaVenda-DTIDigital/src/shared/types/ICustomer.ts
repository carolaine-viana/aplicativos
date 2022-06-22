import { TCreditStatus } from './TCreditStatus';
import { IClickemon } from './IClickemon';

export interface ICustomer extends IClickemon {
  remote_id?: number;
  nameid: number;
  territory_inclusion_date: string;
  last_purchase_date: string;
  credit_status: TCreditStatus;
  business_unit: string;
  phone_number: string;
  buyer_name: string;
  buyer_phone_number: string;
}
