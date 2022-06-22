export interface IUserResponse {
  sales_reps: [
    {
      id: number;
      name: string;
      earnings_balance: number;
    }
  ];
}
