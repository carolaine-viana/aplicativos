import APIBFF from '../../../shared/base/api/APIBFF';
import PerformanceRepository from '../services/PerformanceRepository';
import Modelbase from '../../../shared/models/ModelBase';

jest.mock('../../../shared/models/ModelBase', () => {
  return class ModelBaseMock {
    constructor() {}
  };
});

jest.mock('../../../shared/base/api/APIBFF', () => {
  return class APIBFFMock {
    constructor() {}
    get = jest.fn();
  };
});

describe('Tests PerformanceRepository', () => {
  let repository;
  const RCA_MOCK_ID = '123456';
  const MOCK_MANAGER_ID = '1234';

  beforeAll(() => {
    repository = new PerformanceRepository();
    apiMock = new APIBFF();
    repository.apiBff.instance = apiMock;
    repository.customersIndicatorsModel = new Modelbase();
    repository.salesIndicatorsModel = new Modelbase();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  describe('Tests getIndicatorsMonth', () => {
    it('should call API to get performance indicators for month ', async () => {
      await repository.getIndicatorsMonth(RCA_MOCK_ID, 'monthParam');
      expect(repository.apiBff.instance.get).toHaveBeenCalled();
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(RCA_MOCK_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('performance-indicators');
    });
  });
  describe('Tests getIndicatorsWeek', () => {
    it('should call API to get performance indicators for month ', async () => {
      await repository.getIndicatorsWeek(RCA_MOCK_ID, 'weekParam');
      expect(repository.apiBff.instance.get).toHaveBeenCalled();
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(RCA_MOCK_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('performance-indicators');
    });
  });

  describe('Tests getGTTeamIndicators & getGVTeamIndicators', () => {
    it('should call api to get GT team indicators', async () => {
      await repository.getGTTeamIndicators(MOCK_MANAGER_ID, 'monthParam');
      expect(repository.apiBff.instance.get).toHaveBeenCalled();
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('territory-managers');
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(MOCK_MANAGER_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('monthParam');
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        'team-performance-indicators'
      );
    });
    it('should call api to get GV team indicators', async () => {
      await repository.getGVTeamIndicators(MOCK_MANAGER_ID, 'monthParam');
      expect(repository.apiBff.instance.get).toHaveBeenCalled();
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('sales-managers');
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(MOCK_MANAGER_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('monthParam');
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        'team-performance-indicators'
      );
    });
  });
});
