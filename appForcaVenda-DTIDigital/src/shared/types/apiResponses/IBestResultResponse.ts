export interface IBestResultResponse {
  performance_indicators_best_result: [
    {
      customers_best_result: number;
      customers_best_month: string;
    }
  ];
}

export interface IBestResultResponseGT {
  team_performance_indicators_best_result: [
    {
      team_customers_best_result: number;
    }
  ];
}
