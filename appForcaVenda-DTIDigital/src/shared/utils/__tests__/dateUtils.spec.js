import {
  getDateWithTime,
  formatDate,
  getNumberDayOfWeek,
  getLastMonday,
  getLastMonthsDate,
} from '../dateUtils';

import '../../../shared/utils/jestCustomMatchers';

describe('Tests dateUtils', () => {
  describe('Tests getDateWithTime', () => {
    it('should return date with given hour and minutes', () => {
      const result = getDateWithTime(new Date(), 2, 10);
      expect(result instanceof Date).toEqual(true);
      expect(result.getMinutes()).toEqual(10);
    });
  });
  describe('Tests formatDate', () => {
    it('should return date as DD-MM-YYYY', () => {
      const result = formatDate(new Date(2021, 5, 10));
      expect(result).toEqual('10-06-2021');
    });
    it('should return date as YYYY-MM-DD', () => {
      const result = formatDate(new Date(2022, 1, 4), 'yyyy-MM-dd');
      expect(result).toEqual('2022-02-04');
    });
    it('should return date as YYYYMM', () => {
      const result = formatDate(new Date(2022, 1, 4), 'yyyyMM');
      expect(result).toEqual('202202');
    });
  });

  describe('Tests getNumberDayOfWeek', () => {
    it('should return 2', () => {
      const result = getNumberDayOfWeek(new Date(2021, 5, 22));
      expect(result).toEqual(2);
    });
    it('should return 0', () => {
      const result = getNumberDayOfWeek(new Date(2021, 5, 20));
      expect(result).toEqual(0);
    });
  });

  describe('Tests getLastMonday', () => {
    it('should return Date(2021, 5, 21)', () => {
      const today = new Date(2021, 5, 21);
      const result = getLastMonday(today);
      expect(result).toEqual(today);
    });
    it('should return Date(2021, 5, 14)', () => {
      const fromDate = new Date(2021, 5, 20);
      const result = getLastMonday(fromDate);
      expect(result).toEqual(new Date(2021, 5, 14));
    });
  });

  describe('Tests on getLastMonthsDate', () => {
    it('should return last 11 months without current month', () => {
      const res = getLastMonthsDate(11);
      expect(res).toContainObject({
        stringDate: 'janeiro 2022',
      });
    });
    it('should return last 11 months with current month', () => {
      const fakeToday = new Date(2022, 2, 1);
      global.Date = class extends Date {
        constructor(date) {
          if (date) {
            return super(date);
          }

          return fakeToday;
        }
      };

      const res = getLastMonthsDate(11, true);
      expect(res).toContainObject({
        stringDate: 'março 2022',
      });
    });
  });
});
