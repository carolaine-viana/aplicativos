export interface IStatementResponse {
  earnings_statement: [
    {
      entry_date: string;
      entry_day: number;
      entry_description: string;
      entry_amount: number;
    }
  ];
}
