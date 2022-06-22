import '../../../shared/utils/mock-react-native-third-lib';
import DeviceFeatures from '../../../shared/base/BaseDeviceFeatures';
import {
  transformClickemonResponseCreate,
  mapperVisits,
  mountGpsUrl,
} from '../customerRoutesUtils';

jest.mock('../../../shared/base/BaseDeviceFeatures');

describe('Tests customerRoutesUtils', () => {
  const clickemonListMock = {
    customers: [
      {
        id: '000',
        cnpj: '123456',
        company_name: 'Company name',
        latitude: -194567,
        longitude: -23456789,
        trade_name: 'Trade name',
      },
    ],
  };
  describe('Tests transformClickemonResponseCreate()', () => {
    it('should return keys em camel case sem underline', () => {
      const result = transformClickemonResponseCreate(clickemonListMock);
      expect(result).toHaveLength(1);
      expect(result[0]).toHaveProperty('id', '000');
      expect(result[0]).toHaveProperty('companyName', 'Company name');
      expect(result[0]).toHaveProperty('tradeName', 'Trade name');
    });
    it('should return empty array', () => {
      const result = transformClickemonResponseCreate({ customers: [] });
      expect(result).toHaveLength(0);
    });
    it('should return undefined', () => {
      const result = transformClickemonResponseCreate();
      expect(result).toBeUndefined();
    });
  });

  describe('Tests mapperVisits()', () => {
    const visitsMock = {
      id: '000',
      customer_id: '123',
      schedule: '12',
      latitude: '0',
      longitude: '0',
    };

    it('should return keys in camel case instead of snake case', () => {
      const result = mapperVisits(visitsMock);
      expect(result).toHaveProperty('customerId', visitsMock.customer_id);
    });
    it('should return undefined', () => {
      const result = mapperVisits();
      expect(result).toBeUndefined();
    });
  });

  describe('mountGpsUrl', () => {
    const cordinates = {
      latitude: -18.979026,
      longitude: -18.979026,
    };
    const companyName = 'MyCompanyName';
    it('should url with maps if device is IOS', () => {
      DeviceFeatures.isIOS = true;
      const result = mountGpsUrl(cordinates, companyName);

      expect(result).toMatch(/(maps)/i);
      expect(result).not.toMatch(/(geo)/i);
      expect(result).toMatch(/(-18.979026)/i);
      expect(result).toMatch(/(MyCompanyName)/i);
    });
    it('should url with geo if device is Android', () => {
      DeviceFeatures.isAndroid = true;
      const result = mountGpsUrl(cordinates, companyName);

      expect(result).toMatch(/(geo)/i);
      expect(result).not.toMatch(/(maps)/i);
      expect(result).toMatch(/(-18.979026)/i);
      expect(result).toMatch(/(MyCompanyName)/i);
    });
  });
});
