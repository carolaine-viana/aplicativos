export interface IClickemon {
  id: number;
  cnpj: string;
  company_name: string;
  latitude: number;
  longitude: number;
  trade_name: string;
  visiting_number: string;
  visiting_street: string;
  visiting_neighborhood: string;
  visiting_city: string;
  visiting_zip_code: string;
  visiting_state: string;
  visiting_complement: string;
  new_customer: boolean;
  credit_status: string;
  purchased_this_month: boolean;
}
