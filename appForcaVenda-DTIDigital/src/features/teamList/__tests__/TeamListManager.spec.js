import expect from 'expect';
import * as asyncStorage from '../../../shared/utils/asyncStorage';
import * as teamUtils from '../teamUtils';
import TeamListRepositoryMock from '../services/TeamListRepository';
import { MOCK_RESPONSE } from './mocks.mock';
import TeamListManager from '../services/TeamListManager';

jest.mock('../services/TeamListRepository', () => {
  return class TeamListRepositoryMock {
    constructor() {}
    fetchRCA = jest.fn();
  };
});

jest.mock('../../../shared/utils/asyncStorage', () => {
  return {
    getUserLogin: jest.fn(),
  };
});

jest.mock('../teamUtils', () => {
  return {
    transformRCAListResponse: jest.fn(),
  };
});

const MOCK_USER_ID = '1234';

describe('tests TEAMLISTMANAGER', () => {
  let manager;
  beforeAll(() => {
    manager = new TeamListManager();
    manager.repo = new TeamListRepositoryMock();
    manager.handleError = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call repo fetchRCA and transform data', async () => {
    asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_USER_ID);
    manager.repo.fetchRCA.mockResolvedValueOnce(MOCK_RESPONSE);
    await manager.getRCA()
    expect(teamUtils.transformRCAListResponse).toHaveBeenLastCalledWith(MOCK_RESPONSE.data);
  })
  it('should call manager.handleError if repository throws an error', async () => {
    const MOCKERRORFROMREPO = new Error('error from repo');
    asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_USER_ID);
    manager.repo.fetchRCA.mockImplementationOnce(() => {
      throw MOCKERRORFROMREPO;
    })
    await manager.getRCA()
    expect(manager.handleError).toHaveBeenCalledWith(MOCKERRORFROMREPO)
  })
})