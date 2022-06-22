import '@shared/utils/jestCustomMatchers';
import '@shared/utils/mock-react-native-third-lib';
import { customers } from './customers.mock';
import { searchingCustomers } from '../customersFiltersUtils';

describe('Tests customersFiltersUtils', () => {
  describe('Tests on searchingCustomers', () => {
    it('should filter customers by id', () => {
      const filterCustomers = searchingCustomers('4', customers);
      expect(filterCustomers).toContainObject({
        id: '4',
      });
    });

    it('should filter customers by tradeName', () => {
      const filterCustomers = searchingCustomers('Bruna', customers);
      expect(filterCustomers).toContainObject({
        tradeName: 'Bruna',
      });
    });

    it('should filter customers by cnpj', () => {
      const filterCustomers = searchingCustomers('12398', customers);
      expect(filterCustomers).toContainObject({
        cnpj: '12398',
      });
    });

    it('should filter customers by visitingAddress', () => {
      const filterCustomers = searchingCustomers('Alameda dos anjos', customers);
      expect(filterCustomers).toContainObject({
        visitingAddress: 'Alameda dos anjos',
      });
    });

    it('should filter customers by tradeName', () => {
      const filterCustomers = searchingCustomers('Ariane', customers);
      expect(filterCustomers).not.toContainObject({
        tradeName: 'Bruna',
      });
    });

    it('should filter customers by credit status "Reabilitado"', () => {
      const filterCustomers = searchingCustomers('Reabilitado', customers);
      expect(filterCustomers).toContainObject({
        creditStatus: 'Reabilitado',
      });
    });

    it('should filter customers by credit status "Cortado"', () => {
      const filterCustomers = searchingCustomers('Cortado', customers);
      expect(filterCustomers).toContainObject({
        creditStatus: 'Cortado',
      });
    });
  });
});
