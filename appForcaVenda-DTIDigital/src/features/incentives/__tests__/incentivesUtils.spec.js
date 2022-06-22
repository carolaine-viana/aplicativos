import '../../../shared/utils/mock-react-native-third-lib';
import 'shared/utils/jestCustomMatchers';
import expect from 'expect';

import {
  transformIncentiveIndicatorsResponse,
  transformIncentiveResponse,
  formatValue,
  getProgressColor,
} from '../incentivesUtils';

describe('Tests incentivesUtils', () => {
  const mockRepoResponseIncentive = {
    business_incentives: [
      {
        id: '2876',
        comments: 'comments',
        name: 'name',
        target_group: 'RCA/CLT',
        status: 'EMAPURAÇÃO',
        start_date: '2021-08-16',
        end_date: '2021-08-16',
        mechanics: 'Bateu/Levou',
      },
    ],
  };
  it('should ', () => {
    const incentive = transformIncentiveResponse(mockRepoResponseIncentive);
    expect(incentive[0]).toHaveProperty('id', '2876');
    expect(incentive[0]).toHaveProperty('comments', 'comments');
    expect(incentive[0]).toHaveProperty('name', 'name');
    expect(incentive[0]).toHaveProperty('targetGroup', 'RCA/CLT');
    expect(incentive[0]).toHaveProperty('status', 'EMAPURAÇÃO');
    expect(incentive[0]).toHaveProperty('startDate', '2021-08-16');
    expect(incentive[0]).toHaveProperty('endDate', '2021-08-16');
    expect(incentive[0]).toHaveProperty('mechanics', 'Bateu/Levou');
  });

  describe('Tests formatValue', () => {
    it('should return value formated as integer', () => {
      const res = formatValue(520.2, 'INTEGER');
      expect(res).toEqual('520');
    });
    it('should return value formated as decimal', () => {
      const res = formatValue(520.2, 'DECIMAL');
      expect(res).toMatch(/520,20/i);
    });
  });

  describe('Tests getProgressColor', () => {
    it('should return red', () => {
      const res = getProgressColor('LOW');
      expect(res).toMatch('red');
    });
    it('should return green', () => {
      const res = getProgressColor('COMPLETE');
      expect(res).toMatch('green');
    });
    it('should return yellow', () => {
      const res = getProgressColor();
      expect(res).toMatch('yellow');
    });
  });

  describe('Tests transformIncentiveIndicatorsResponse', () => {
    it('should turn snake_case key into camelCase keys', () => {
      const mockDataParam = {
        business_incentive_performance_indicators: [
          {
            indicator_name: 'indicator_name',
            indicator_type: 'indicator_type',
            indicator_forecast: 'indicator_forecast',
          },
        ],
      };

      const res = transformIncentiveIndicatorsResponse(mockDataParam);
      expect(res).toHaveLength(1);
      expect(res).toContainObject({
        indicatorName: 'indicator_name',
      });
    });
  });
});
