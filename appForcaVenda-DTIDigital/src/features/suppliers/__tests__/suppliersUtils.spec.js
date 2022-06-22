import '../../../shared/utils/mock-react-native-third-lib';
import expect from 'expect';
import {
  getTimeCourseTabs,
  getTitle,
  filterBattleMapDada,
  filterCustomersServedData,
  transformSuppliersIndicators,
} from '../suppliersUtils';
import '../../../shared/utils/jestCustomMatchers';
import { mockResponseSuccessSuppliersIndicators } from './mocks/responseSuppliersIndicators.mock';

const mockDataBattleMapTransformed = [
  {
    id: 'XXX',
    name: 'Supplier One',
    level: 'Level One',
  },
  {
    id: 'YYY',
    name: 'Supplier Two',
    level: 'Level Two',
  },
];

const mockDataCustomersSuppliersTransformed = [
  {
    id: 0,
    tradeName: 'NOME FANTASIA NÃO ENCONTRADO',
    companyName: 'FUTURA D BEBIDAS E ALIMENTOS EIRELI',
    cnpj: '00.000.000/0000-00 0000000',
    businessUnit: 'VAREJO ALIMENTAR',

    focusSuppliers: [
      {
        id: 0,
        name: 'LYSOFORM',
        type: 'Type?',
        level: 'Level?',
      },
      {
        id: 1,
        name: 'NIVEA',
        type: 'Type?',
        level: 'Level?',
      },
    ],
  },
];

// TODO: TESTES UNITARIOS

describe.skip('Tests suppliersUtils', () => {
  describe('Tests getTimeCourseTabs', () => {
    it('should return object with month(Mês) and week(Semana)', () => {
      const res = getTimeCourseTabs();
      expect(res).toHaveProperty('month');
      expect(res).toHaveProperty('week');
      expect(res.month).toHaveProperty('title', 'Mês');
      expect(res.week).toHaveProperty('title', 'Semana');
    });
  });
  describe('Name of the group getTitle', () => {
    it('should return title: "Mapa de batalha"', () => {
      const res = getTitle('battleMap');
      expect(res).toBe('Mapa de batalha');
    });
    it('should return title: "Clientes Atendidos"', () => {
      const res = getTitle('customersServed');
      expect(res).toBe('Clientes Atendidos');
    });
    it('should return empty string', () => {
      const res = getTitle();
      expect(res).toBe('');
    });
  });

  describe('Tests filterBattleMapDada', () => {
    it('should return 2 suppliers ', () => {
      const res = filterBattleMapDada(mockDataBattleMapTransformed, 'Supplier');
      expect(res).toHaveLength(2);
      expect(res).toContainObject({ level: 'Level One' });
    });
    it('should return 1 supplier with name equals "Supplier Two"  ', () => {
      const res = filterBattleMapDada(mockDataBattleMapTransformed, 'Supplier Two');
      expect(res).toHaveLength(1);
      expect(res).toContainObject({ name: 'Supplier Two' });
    });
    it('should return 1 supplier id "XXX"', () => {
      const res = filterBattleMapDada(mockDataBattleMapTransformed, 'XXX');
      expect(res).toHaveLength(1);
      expect(res).toContainObject({ id: 'XXX' });
    });
  });

  describe('Tests filterCustomersServedData', () => {
    it('should return customer with trade name: "NOME FANTASIA NÃO ENCONTRADO" ', () => {
      const res = filterCustomersServedData(
        mockDataCustomersSuppliersTransformed,
        'NOME FANTASIA NÃO ENCONTRADO'
      );
      expect(res).toHaveLength(1);
      expect(res).toContainObject({ tradeName: 'NOME FANTASIA NÃO ENCONTRADO' });
    });
    it('should return customer with supplier LYSOFORM ', () => {
      const res = filterCustomersServedData(mockDataCustomersSuppliersTransformed, 'LYSOFORM');
      expect(res).toHaveLength(1);
      expect(res[0].focusSuppliers).toContainObject({ name: 'LYSOFORM' });
    });
  });

  describe('Tests transformSuppliersIndicators', () => {
    it('should transform snake_case keys into camelCase keys', () => {
      const res = transformSuppliersIndicators(mockResponseSuccessSuppliersIndicators);
      expect(res).toHaveProperty('focusSuppliersTotalCustomersResult');
      expect(res).toHaveProperty('wildcardSuppliersTotalCustomersResult');
      expect(res).toHaveProperty('wildcardSuppliersCustomersResult');
      expect(res.wildcardSuppliersCustomersResult).toHaveLength(1);
      expect(res.wildcardSuppliersCustomersResult).toContainObject({
        wildcardSuppliersQuantity: 1,
        customersQuantity: 15,
      });
    });
  });
});
