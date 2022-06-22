import APIBFF from '../../../shared/base/api/APIBFF';
import StatementRepository from '../services/StatementRepository';

jest.mock('../../../shared/base/api/APIBFF', () => {
  return class APIBFFMock {
    constructor() {}
    get = jest.fn();
  };
});

describe('Tests StatementRepository', () => {
  let repository;
  const RCA_MOCK_ID = '123456';

  beforeAll(() => {
    repository = new StatementRepository();
    apiMock = new APIBFF();
    repository.apiBff.instance = apiMock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Tests fetchEarningsSummary', () => {
    it('should call API to get summary earnings ', async () => {
      await repository.fetchEarningsSummary(RCA_MOCK_ID, '202109');
      expect(repository.apiBff.instance.get).toHaveBeenCalled();
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(RCA_MOCK_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('earnings-summary');
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('202109');
    });
  });
  describe('Tests fetchEarningsStatement', () => {
    it('should call API to get statement earnings ', async () => {
      await repository.fetchEarningsStatement(RCA_MOCK_ID, '202109');
      expect(repository.apiBff.instance.get).toHaveBeenCalled();
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(RCA_MOCK_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('earnings-statement');
    });
  });
});
