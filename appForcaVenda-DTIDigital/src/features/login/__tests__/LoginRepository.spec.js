import expect from 'expect';
import APIBFF from '../../../shared/base/api/APIBFF';
import LoginRepository from '../service/LoginRepository';

jest.mock('../../../shared/base/api/APIBFF', () => {
  return class MockAPIBFF {
    post = jest.fn();
  };
});

describe('Name of the group', () => {
  const USER_LOGIN = '654321';
  const USER_PSW = '654321';

  let repository;
  let mockAPI;

  beforeAll(() => {
    repository = new LoginRepository();
    mockAPI = new APIBFF();
    repository.apiBff.instance = mockAPI;
  });

  it(`should call post to authenticate. ULR '/sales-reps/<userLogin>/authenticate' `, async () => {
    await repository.loginUser(USER_LOGIN, USER_PSW);
    expect(repository.apiBff.instance.post.mock.calls[0][0]).toMatch(`sales-reps/${USER_LOGIN}`);
    expect(repository.apiBff.instance.post.mock.calls[0][1]).toHaveProperty('password', USER_PSW);
  });
});
