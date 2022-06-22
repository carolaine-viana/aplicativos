// TODO: 22738: REMOVER FUNÇÃO DO MANAGER E REPO E TRANSFORM. JA FEITO NA FEATURE CUSTOMER SERVED
export interface ICustomersServedResponse {
  customers: [
    {
      id: string;
      trade_name: string;
      company_name: string;
      cnpj: string;
      business_unit: string;
      focus_suppliers: [
        {
          id: string;
          name: string;
          type: string;
          level: string;
        }
      ];
    }
  ];
}
