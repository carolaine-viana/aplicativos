import expect from 'expect';
import APIBFFMOCK from '../../../shared/base/api/APIBFF';
import SuppliersRepository from '../services/SuppliersRepository';

jest.mock('../../../shared/base/api/APIBFF', () => {
  return class MockAPIBFF {
    get = jest.fn();
  };
});

describe('Tests SuppliersRepository', () => {
  let repository;

  const MOCK_USER_ID = '44184';
  const MOCK_CATEGORY_WILDCARD = 'coringa';
  const MOCK_CATEGORY_FOCUS = 'foco';
  const MOCK_TIME_COURSE_MONTH = '202109';
  const MOCK_TIME_COURSE_WEEK = '20210913';

  beforeAll(() => {
    const mockApiBff = new APIBFFMOCK();
    repository = new SuppliersRepository();
    repository.apiBff.instance = mockApiBff;
  });

  describe('Tests fetchSuppliersBattleMap', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should call battle map end-point with user id, category:foco timeCourse:month', async () => {
      await repository.fetchSuppliersBattleMap(
        MOCK_USER_ID,
        MOCK_CATEGORY_FOCUS,
        MOCK_TIME_COURSE_MONTH
      );

      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('focus-suppliers');
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(MOCK_CATEGORY_FOCUS);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(MOCK_TIME_COURSE_MONTH);
    });
    it('should call battle map end-point with user id, category:coringa timeCourse:week', async () => {
      await repository.fetchSuppliersBattleMap(
        MOCK_USER_ID,
        MOCK_CATEGORY_WILDCARD,
        MOCK_TIME_COURSE_WEEK
      );

      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('focus-suppliers');
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(MOCK_CATEGORY_WILDCARD);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(MOCK_TIME_COURSE_WEEK);
    });
  });
  describe('Tests fetchCustomersServed', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should call battle map end-point with user id, category:foco timeCourse:month', async () => {
      await repository.fetchCustomersServed(
        MOCK_USER_ID,
        MOCK_CATEGORY_FOCUS,
        MOCK_TIME_COURSE_MONTH
      );

      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('customers-results');
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(MOCK_CATEGORY_FOCUS);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(MOCK_TIME_COURSE_MONTH);
    });
    it('should call battle map end-point with user id, category:coringa timeCourse:week', async () => {
      await repository.fetchCustomersServed(
        MOCK_USER_ID,
        MOCK_CATEGORY_WILDCARD,
        MOCK_TIME_COURSE_WEEK
      );

      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('customers-results');
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(MOCK_CATEGORY_WILDCARD);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(MOCK_TIME_COURSE_WEEK);
    });
  });
});
