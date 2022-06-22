export interface ITermUsePostResponse {
  id: number;
  terms_of_use_first_acceptance_date: string;
  terms_of_use_last_acceptance_date: string;
}

export interface ITermUseGetResponse {
  id: number;
  name: string;
  cpf: string;
  hierarchical_level?: string;
  terms_of_use_last_update: string; // (YYYY-MM-DD HH:MI:SS)
  terms_of_use_acceptance_date: string;
  terms_of_use_last_acceptance_date: string;
}

export interface ITermUsePostSalesRepResponse {
  sales_reps: Array<ITermUsePostResponse>;
}

export interface ITermUseGetSalesRepResponse {
  sales_reps: Array<ITermUseGetResponse>;
}

export interface ITermUsePostSalesManagerResponse {
  sales_managers: Array<ITermUsePostResponse>;
}

export interface ITermUseGetSalesManagerResponse {
  sales_managers: Array<ITermUseGetResponse>;
}
