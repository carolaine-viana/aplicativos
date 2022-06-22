import '../../../shared/utils/mock-react-native-third-lib';
import APIBFF from '../../../shared/base/api/APIBFF';
import BestResultRepository from '../services/BestResultRepository';

jest.mock('../../../shared/base/api/APIBFF', () => {
  return class MockAPIBFF {
    get = jest.fn();
  };
});

describe('Testes BestResultRepository', () => {
  let repository;
  beforeAll(() => {
    mockApiBff = new APIBFF();
    repository = new BestResultRepository();
    repository.apiBff.instance = mockApiBff;
  });

  it.skip('should cal API with correct URL and params', async () => {
    const mockUserLogin = '44184';
    await repository.fetchBestResult(mockUserLogin);
    expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
      'performance-indicators-best-result'
    );
    expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(mockUserLogin);
  });
});
