import '../../../shared/utils/mock-react-native-third-lib';
import performanceUtils from '../performanceUtils';
import {
  transformSalesIndicatorsResponseCreate,
  transformCustomerIndicatorsResponseCreate,
  getStartEndDate,
} from '../performanceUtils';
import { default as expect } from 'expect';

const indicatorsMock = [
  {
    timeCourse: 'month',
  },
  {
    timeCourse: 'week',
  },
];

describe('Tests performanceUtils ', () => {
  const indicatorResponseMock = {
    performance_indicators: [
      {
        id: 1234,
        customers_forecast: 0,
        customers_result: 0,
        focus_suppliers_customers_result: 0,
        wildcard_suppliers_customers_result: 0,
        sales_forecast: 0,
        sales_result: 0,
        private_brands_sales_result: 0,
      },
    ],
  };

  describe('Tests transformCustomersIndicatorsResponse', () => {
    it('should call transformCustomerIndicatorsResponseCreate twice', () => {
      const mockMonthData = indicatorsMock[0];
      const mockWeekData = indicatorsMock[1];
      performanceUtils.transformCustomerIndicatorsResponseCreate = jest.fn().mockResolvedValue({});
      const res = performanceUtils.transformCustomersIndicatorsResponse(
        mockMonthData,
        mockWeekData
      );
      expect(performanceUtils.transformCustomerIndicatorsResponseCreate).toHaveBeenCalledTimes(2);
      expect(performanceUtils.transformCustomerIndicatorsResponseCreate.mock.calls[0][1]).toEqual(
        'month'
      );
      expect(performanceUtils.transformCustomerIndicatorsResponseCreate.mock.calls[1][1]).toEqual(
        'week'
      );
      expect(res).toHaveLength(2);
    });

    it('should trasnform snake case into camel case properties', () => {
      performanceUtils.getStartEndDate = jest.fn().mockReturnValue({
        startDate: new Date(),
        endDate: new Date(),
      });
      const res = transformCustomerIndicatorsResponseCreate(indicatorResponseMock, 'month');

      const transformedIndicator = res[0];
      expect(performanceUtils.getStartEndDate).toHaveBeenCalled();
      expect(res).toHaveLength(1);

      expect(transformedIndicator).toHaveProperty(
        'userId',
        indicatorResponseMock.performance_indicators[0].id.toString()
      );

      expect(transformedIndicator).toHaveProperty('focusSuppliersCustomersResult');
      expect(transformedIndicator).toHaveProperty('wildcardSuppliersCustomersResult');
    });
  });

  describe('Tests transformSalesIndicatorsResponseCreate', () => {
    it('should trasnform snake case into camel case properties', () => {
      performanceUtils.getStartEndDate = jest.fn().mockReturnValue({
        startDate: new Date(),
        endDate: new Date(),
      });
      const res = transformSalesIndicatorsResponseCreate(indicatorResponseMock, 'month');

      const transformedIndicator = res[0];
      expect(performanceUtils.getStartEndDate).toHaveBeenCalled();
      expect(res).toHaveLength(1);

      expect(transformedIndicator).toHaveProperty(
        'userId',
        indicatorResponseMock.performance_indicators[0].id.toString()
      );
      expect(transformedIndicator).toHaveProperty('timeCourse', 'month');
      expect(transformedIndicator).toHaveProperty('startDate');
      expect(transformedIndicator).toHaveProperty('endDate');
      expect(transformedIndicator).toHaveProperty('salesForecast');
      expect(transformedIndicator).toHaveProperty('salesResult');
      expect(transformedIndicator).toHaveProperty('privateBrandsSalesResult');
    });
  });

  describe('Tests getStartEndDate', () => {
    const today = new Date(2021, 5, 20);
    it('should return startDate(14/06/2021) and endDate(19/06/2021) ', () => {
      const startWeekMock = new Date(2021, 5, 14);
      const endWeekMock = new Date(2021, 5, 19);
      const res = getStartEndDate('week', today);
      expect(res).toHaveProperty('startDate', startWeekMock);
      expect(res).toHaveProperty('endDate', endWeekMock);
    });
    it('should return startDate(01/06/2021) and endDate(30/06/2021) ', () => {
      const startMonthMock = new Date('2021-06-01T00:00:00.000Z');
      const endMonthMock = new Date('2021-06-30T23:59:59.999Z');
      const res = getStartEndDate('month', today);
      expect(res).toHaveProperty('startDate', startMonthMock);
      expect(res).toHaveProperty('endDate', endMonthMock);
    });
  });

  describe('Tests getTabsCustomerIndicators', () => {
    it('should return tabs Semana and Mês', () => {
      const res = performanceUtils.getTabsAllPeriod();
      expect(res).toHaveProperty('week');
      expect(res).toHaveProperty('month');
      expect(res['week']).toHaveProperty('title', 'Semana');
      expect(res['month']).toHaveProperty('title', 'Mês');
    });
  });

  describe('Tests transformGtTeamIndicatorsResponse', () => {
    it('should get indicators out from response and transform snake_case keys into camelCase keys', () => {
      const res = performanceUtils.transformGtTeamIndicatorsResponse({
        team_performance_indicators: [
          {
            id: '0000',
            team_total_sales_result: 30,
            team_private_brands_sales_result: 100,
          },
        ],
      });

      expect(res).toHaveProperty('id', '0000');
      expect(res).toHaveProperty('teamTotalSalesResult', 30);
      expect(res).toHaveProperty('teamPrivateBrandsSalesResult', 100);
    });
  });
});
