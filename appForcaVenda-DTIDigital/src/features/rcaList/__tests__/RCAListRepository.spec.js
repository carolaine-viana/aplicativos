import RCAListRepository from '../services/RCAListRepository';
import * as asyncStorage from '../../../shared/utils/asyncStorage';
import APIBFF from '../../../shared/base/api/APIBFF';

jest.mock('../../../shared/base/api/APIBFF', () => {
  return class APIBFFMock {
    constructor() {}
    get = jest.fn();
  };
});

jest.mock('../../../shared/utils/asyncStorage', () => {
  return { getUserLogin: jest.fn() };
});

describe('Tests RCAListManager', () => {
  const USER_LOGIN_MOCK = '24384';
  let repository;
  let apiMock;

  beforeAll(() => {
    repository = new RCAListRepository();
    asyncStorage.getUserLogin.mockReturnValue(USER_LOGIN_MOCK);
    apiMock = new APIBFF();
    repository.apiBff.instance = apiMock;
  });
  it('should call repo to get GT Rcas ', async () => {
    await repository.getRcasGt();
    expect(asyncStorage.getUserLogin).toHaveBeenCalled();
    expect(repository.apiBff.instance.get).toHaveBeenCalled();
    const getFirstParam = repository.apiBff.instance.get.mock.calls[0][0];
    expect(getFirstParam).toMatch(`/territory-managers/${USER_LOGIN_MOCK}/sales-reps`);
  });
});
