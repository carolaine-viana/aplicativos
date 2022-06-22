export interface ISummaryResponse {
  earnings_summary: [
    {
      id: number;
      month: number;
      taxes: number;
      total_debts: number;
      total_credits: number;
      opening_balance: number;
      final_balance: number;
      available_balance: number;
    }
  ];
}
