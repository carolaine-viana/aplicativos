interface IIncentiveMartinsRes {
  id: number;
  name: string;
  target_group: string;
  status: string;
}
export interface IIncentiveMartinsResponse {
  sales_incentives: IIncentiveMartinsRes[];
}
