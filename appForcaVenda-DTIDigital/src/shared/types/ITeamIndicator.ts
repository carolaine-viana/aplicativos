export interface ITeamIndicator {
  id: number;
  teamTotalSalesResult: number;
  teamPrivateBrandsSalesResult: number;
  teamPrivateBrandsSalesPercentage: number;
  teamSalesForecast: number;
  teamSalesResult: number;
  teamPartialSalesForecast: number;
  teamPartialSalesPercentage: number;
  teamPartialSalesFulfillment: string;
  teamCustomersForecast: number;
  teamCustomersResult: number;
  teamPartialCustomersForecast: number;
  teamPartialCustomersPercentage: number;
  teamPartialCustomersFulfillment: string;
  territorialOccupationForecast: number;
  territorialOccupationResult: number;
  territorialOccupationPercentage: number;
  territorialOccupationFulfillment: string;
  teamCouponsForecast: number;
  teamCouponsResult: number;
  teamPartialCouponsForecast: number;
  teamPartialCouponsPercentage: number;
  teamPartialCouponsFulfillment: string;
}
