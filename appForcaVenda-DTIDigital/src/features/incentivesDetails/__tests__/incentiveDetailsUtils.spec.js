import { transformIncentiveDetailsResponse } from '../incentiveDetailsUtils';

const mockDataTransform = {
  business_incentives: [
    {
      sales_forecast: '1234',
      sales_result: '6541',
      campaign_name: 'campaign name',
      campaign_sales_forecast: '1985',
      campaign_sales_result: '1548',
      total_number_of_days: '10',
      elapsed_number_of_days: '15',
      rule_description: 'rule description',
    },
  ],
};

describe('Tests incentiveDetailsUtils', () => {
  describe('Tests transformIncentiveDetailsResponse', () => {
    it('should transform snake_case keys into camelCase keys', () => {
      const res = transformIncentiveDetailsResponse(mockDataTransform);
      expect(res).toHaveProperty('salesForecast');
      expect(res).toHaveProperty('campaignName');
      expect(res).toHaveProperty('campaignSalesForecast');
      expect(res).toHaveProperty('elapsedNumberOfDays');
    });
    it('should throw error if pass no param', () => {
      let error;
      try {
        transformIncentiveDetailsResponse();
      } catch (e) {
        error = e;
      }
      expect(error).toBeDefined();
    });
  });
});
