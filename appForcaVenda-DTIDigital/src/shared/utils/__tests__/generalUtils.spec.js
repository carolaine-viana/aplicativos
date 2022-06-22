import '../../../shared/utils/jestCustomMatchers';
import '../../../shared/utils/mock-react-native-third-lib';
import theme from 'shared/constants/theme';
import DeviceFeatures from '../../base/BaseDeviceFeatures';

import {
  handlePlataforms,
  getKeyValue,
  getPartialObject,
  mountJoinQuery,
  mapCordinatesToMarker,
  getIndicatorColor,
  getNameLetters,
  mountMonthParam,
  mountWeekParam,
  objectMatchText,
  filterListByPreDefinedFilters,
  sortListByKey,
} from '../generalUtils';

jest.mock('../../base/BaseDeviceFeatures');
describe('Tests - generalUtils', () => {
  describe('Testing handlePlataforms()', () => {
    const handleExceptionMock = jest.fn();
    it('Should call handleAndroid function', () => {
      DeviceFeatures.isAndroid = true;
      const handleAndroidMock = jest.fn();

      handlePlataforms({
        handleException: handleExceptionMock,
        handleAndroid: handleAndroidMock,
      });
      expect(handleAndroidMock).toHaveBeenCalledTimes(1);
    });
    it('Should not call handleAndroid function', () => {
      DeviceFeatures.isAndroid = false;
      const handleAndroidMock = jest.fn();
      handlePlataforms({
        handleException: handleExceptionMock,
        handleAndroid: handleAndroidMock,
      });
      expect(handleAndroidMock).toHaveBeenCalledTimes(0);
    });
    it('Should call handleIOS function', () => {
      DeviceFeatures.isIOS = true;
      const handleIOSMock = jest.fn();
      handlePlataforms({
        handleException: handleExceptionMock,
        handleIOS: handleIOSMock,
      });
      expect(handleIOSMock).toHaveBeenCalledTimes(1);
    });
    it('Should not call handleIOS function', () => {
      DeviceFeatures.isIOS = false;
      const handleIOSMock = jest.fn();
      handlePlataforms({
        handleException: handleExceptionMock,
        handleIOS: handleIOSMock,
      });
      expect(handleIOSMock).toHaveBeenCalledTimes(0);
    });
    it('Should call handleException function', () => {
      DeviceFeatures.isIOS = true;
      const handleIOSMock = jest.fn(() => {
        throw new Error('Error');
      });
      handlePlataforms({
        handleException: handleExceptionMock,
        handleIOS: handleIOSMock,
      });
      expect(handleExceptionMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Tests getKeyValue()', () => {
    it('It shoud return a key only if exists in Object (interface)', () => {
      const result = getKeyValue('name')({ name: 'foo' });
      expect(result).toEqual('foo');
    });
    it('It shoud return undefined', () => {
      const result = getKeyValue('name')({ age: 'foo' });
      expect(result).toBeUndefined();
    });
  });

  describe('Tests getPartialObject()', () => {
    const person = { age: 20, name: 'foo' };
    it('should return only name', () => {
      const result = getPartialObject(person, ['name']);
      expect(result).toHaveProperty('name', 'foo');
      expect(result).not.toHaveProperty('age');
    });
    it('should not return name', () => {
      const result = getPartialObject(person, ['age']);
      expect(result).toHaveProperty('age', 20);
    });
    it('should return empity object', () => {
      const result = getPartialObject(person, []);
      expect(result).toEqual({});
    });
  });

  describe('Tests mountJoinQuery', () => {
    const params = {
      leftTable: { name: 'customers', key: 'id' },
      rightTable: { name: 'visits', key: 'customer_id' },
    };
    it('should return a join query for customers & visits ', () => {
      const mountedQuery = mountJoinQuery(params);
      const expectedQuery =
        'select * from customers inner join visits on customers.id = visits.customer_id;';
      expect(mountedQuery).toMatch(expectedQuery);
    });
    it('should  throw an error if pass no params ', () => {
      expect(() => {
        mountJoinQuery();
      }).toThrow();
    });
  });

  describe('Tests mapCordinatesToMarker', () => {
    const listWithCordinatesMock = [
      {
        latitude: -194588,
        longitude: -1845745,
        customerId: 665588,
      },
      {
        latitude: -194458,
        longitude: -4548945,
        customerId: 146584,
      },
    ];

    it('should return a list of markes and customer id as identifier', () => {
      const result = mapCordinatesToMarker(listWithCordinatesMock, 'customerId');
      expect(result).toHaveLength(2);
      expect(result[0]).toHaveProperty('identifier', listWithCordinatesMock[0].customerId);
      expect(result[0]).not.toHaveProperty('customerId');
    });
    it('should return undefined', () => {
      const result = mapCordinatesToMarker();
      expect(result).toBeUndefined();
    });
  });

  describe('Tests getIndicatorColor', () => {
    it(`should text color error and color red600`, () => {
      const value = 20;
      const res = getIndicatorColor(value);
      expect(res).toHaveProperty('textColor', 'error');
      expect(res).toHaveProperty('color', theme.palette.red600);
    });
    it('should text color alert and color yellow400', () => {
      const value = 92;
      const res = getIndicatorColor(value);
      expect(res).toHaveProperty('textColor', 'alert');
      expect(res).toHaveProperty('color', theme.palette.yellow400);
    });
    it('should text color success and color green400', () => {
      const value = 105;
      const res = getIndicatorColor(value);
      expect(res).toHaveProperty('textColor', 'success');
      expect(res).toHaveProperty('color', theme.palette.green400);
    });
  });

  describe('Tests getNameLetters', () => {
    it('should return RP', () => {
      const res = getNameLetters('Ramon Prata');
      expect(res).toEqual('RP');
    });

    it('should return R', () => {
      const res = getNameLetters('Ramon');
      expect(res).toEqual('R');
    });
  });

  describe('Tests mountWeekParam', () => {
    it('should return week URL param: week=2021-06-21', () => {
      const date = new Date(2021, 5, 21);
      const res = mountWeekParam(date);
      expect(res).toMatch('week=2021-06-21');
    });
  });

  describe('Tests mountMonthParam', () => {
    it('should return month URL param: month=202105', () => {
      const date = new Date(2021, 5, 21);
      const res = mountMonthParam(date);

      expect(res).toEqual('month=202106');
    });
    it('should return month URL param: month=202111', () => {
      const date = new Date(2021, 11, 21);
      const res = mountMonthParam(date);
      expect(res).toEqual('month=202112');
    });
  });

  describe('Tests on objectMatchText', () => {
    it('should return true with upper case search text', () => {
      const res = objectMatchText({ id: 134, name: 'Ramon', text: 'Téxtô com açentò' }, 'TEXTO');
      expect(res).toEqual(true);
    });
    it('should return true with no accented characters search text', () => {
      const res = objectMatchText({ id: 134, name: 'Ramon', text: 'Téxtô com açentò' }, 'acento');
      expect(res).toEqual(true);
    });
    it('should return true with accented characters and upper case search text', () => {
      const res = objectMatchText({ id: 134, name: 'Ramon', text: 'Téxtô com açentò' }, 'TEXTÔ');
      expect(res).toEqual(true);
    });
    it('should return true with number as search text', () => {
      const res = objectMatchText({ id: 134, name: 'Ramon', text: 'Téxtô com açentò' }, '13');
      expect(res).toEqual(true);
    });
  });

  describe('Test on filterListByPreDefinedFilters', () => {
    const mockList = [
      {
        tradeName: 'COMANY NAME ONE',
        newCustomer: false,
        status: 'NORMAL',
      },
      {
        tradeName: 'COMANY NAME TWO',
        newCustomer: false,
      },
      {
        tradeName: 'COMANY NAME THREE',
        newCustomer: true,
      },
    ];

    const predefinedFilters = [
      {
        value: 'COMANY NAME ONE',
        prop: 'tradeName',
        type: 'string',
      },
      {
        value: 'NORMAL',
        prop: 'status',
        type: 'string',
      },
    ];

    it('should return a items(1) that satisfies ALL filters (intersection)', () => {
      const searchStrategy = 'intersection';
      const res = filterListByPreDefinedFilters(predefinedFilters, mockList, searchStrategy);
      expect(res).toHaveLength(1);

      expect(res).toContainObject({
        newCustomer: false,
      });
      expect(res).toContainObject({
        tradeName: 'COMANY NAME ONE',
      });
    });

    it('should return a items(2) that satisfies SOME of the filters (UNION)', () => {
      const searchStrategy = 'union';

      const newFilters = [
        ...predefinedFilters,
        {
          value: 'COMANY NAME TWO',
          prop: 'newCustomer',
          type: 'boolean',
          shouldPass: true,
        },
      ];
      const res = filterListByPreDefinedFilters(newFilters, mockList, searchStrategy);
      expect(res).toHaveLength(2);
      expect(res).toContainObject({
        tradeName: 'COMANY NAME ONE',
      });
      expect(res).toContainObject({
        tradeName: 'COMANY NAME THREE',
      });
    });
  });

  describe('Tests on sortListByKey', () => {
    const listMock = [
      {
        name: 'Ari',
      },
      {
        name: 'Carol',
      },
      {
        name: 'Joao',
      },
      {
        name: 'Ramon',
      },
      {
        name: 'Tati',
      },
    ];
    it('should ascending sort listMock by name ', () => {
      const res = sortListByKey(listMock, 'name', 'az');
      const firstInTheList = res[0].name;
      const lastInTheList = res[listMock.length - 1].name;
      expect(firstInTheList).toBe('Ari');
      expect(lastInTheList).toBe('Tati');
    });
    it('should descending sort listMock by name ', () => {
      const res = sortListByKey(listMock, 'name', 'za');
      const firstInTheList = res[0].name;
      const lastInTheList = res[listMock.length - 1].name;
      expect(firstInTheList).toBe('Tati');
      expect(lastInTheList).toBe('Ari');
    });
  });
});
