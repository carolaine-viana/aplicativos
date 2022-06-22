import expect from 'expect';
import APIBFFMock from '@shared/base/api/APIBFF';
import TeamListRepository from '../services/TeamListRepository';
import '../../../shared/utils/mock-react-native-third-lib';


jest.mock('@shared/base/api/APIBFF', () => {
  return class APIBFFMock {
    get = jest.fn();
  };
});

jest.mock('../../../shared/base/api/APIBFF', () => {
  return class MockAPIBFF {
    constructor() {}
    get = jest.fn();
  };
});

const MOCK_MANAGER_ID = '1234';

describe('Tests TeamListRepository', () => {
  let repository;
  beforeAll(() => {
    repository = new TeamListRepository();
    repository.apiBff.instance = new APIBFFMock();
  });
  it('should call TeamListManager API passing userId as a param', async () => {
    await repository.fetchGvGT(MOCK_MANAGER_ID);
    expect(repository.apiBff.instance.get).toHaveBeenCalled();
    expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
      `territory-managers/${MOCK_USER_ID}/sales-reps`
    );
  });
})
