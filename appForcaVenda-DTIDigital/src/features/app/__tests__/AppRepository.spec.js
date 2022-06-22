import APIBFF from '../../../shared/base/api/APIBFF';
import AppRepository from '../services/AppRepository';

jest.mock('../../../shared/models/User/UserModel', () => {
  return class UserModelMock {
    constructor() {}
  };
});
jest.mock('../../../shared/base/api/APIBFF', () => {
  return class APIBFFMock {
    constructor() {}
    get = jest.fn();
  };
});

describe('Tests AppRepository', () => {
  const USER_LOGIN_MOCK = '24384';

  let apiMock;
  let repository;

  beforeAll(() => {
    repository = new AppRepository();

    apiMock = new APIBFF();
    repository.apiBff.instance = apiMock;
  });

  it('should call route API to get user role with user login. URI: /sales-reps/{userLogin}', async () => {
    await repository.fetchUserRole(USER_LOGIN_MOCK);
    expect(repository.apiBff.instance.get).toHaveBeenCalled();
    const getFirstParam = repository.apiBff.instance.get.mock.calls[0][0];
    expect(getFirstParam).toMatch(`sales-reps/${USER_LOGIN_MOCK}`);
  });
});
