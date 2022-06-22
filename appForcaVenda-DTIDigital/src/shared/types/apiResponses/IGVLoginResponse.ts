export interface IGVLoginResponse {
  status: number;
  message: string;
  sales_managers: [
    {
      id: number | string;
      name: string;
    }
  ];
}
