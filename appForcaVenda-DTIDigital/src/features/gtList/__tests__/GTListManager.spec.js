import expect from 'expect';
import * as asyncStorage from '../../../shared/utils/asyncStorage';
import * as gtListUtils from '../gtListUtils';
import GTListRepositoryMock from '../services/GTListRepository';
import GTListManager from '../services/GTListManager';
import { MOCK_RESPONSE } from './mocks.mock';

jest.mock('../services/GTListRepository', () => {
  return class GTListRepositoryMock {
    constructor() {}
    fetchGTs = jest.fn();
  };
});

jest.mock('../../../shared/utils/asyncStorage', () => {
  return {
    getUserLogin: jest.fn(),
  };
});

jest.mock('../gtListUtils', () => {
  return {
    transformGtListResponse: jest.fn(),
  };
});

const MOCK_USER_ID = '1234';

describe('Tests GTListManager', () => {
  let manager;
  beforeAll(() => {
    manager = new GTListManager();
    manager.repo = new GTListRepositoryMock();
    manager.handleError = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call repo.fetchGTs passing userId and transform data', async () => {
    asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_USER_ID);
    manager.repo.fetchGTs.mockResolvedValueOnce(MOCK_RESPONSE);
    await manager.getGTs();
    expect(manager.repo.fetchGTs).toHaveBeenCalledWith(MOCK_USER_ID);
    expect(gtListUtils.transformGtListResponse).toHaveBeenCalledWith(MOCK_RESPONSE.data);
  });

  it('should call manager.handleError if repository throws an error', async () => {
    const MOCKERRORFROMREPO = new Error('error from repo');
    asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_USER_ID);
    manager.repo.fetchGTs.mockImplementationOnce(() => {
      throw MOCKERRORFROMREPO;
    });
    await manager.getGTs();
    expect(manager.repo.fetchGTs).toHaveBeenCalledWith(MOCK_USER_ID);
    expect(manager.handleError).toHaveBeenCalledWith(MOCKERRORFROMREPO);
  });

  it('should call manager.handleError if repository throws an error', async () => {
    manager.repo.fetchGTs.mockResolvedValueOnce(MOCK_RESPONSE);

    const MOCKERRORFROMTRANSFORM = new Error('error from transform');
    asyncStorage.getUserLogin.mockResolvedValueOnce(MOCK_USER_ID);

    gtListUtils.transformGtListResponse.mockImplementationOnce(() => {
      throw MOCKERRORFROMTRANSFORM;
    });

    await manager.getGTs();
    expect(manager.repo.fetchGTs).toHaveBeenCalledWith(MOCK_USER_ID);
    expect(gtListUtils.transformGtListResponse).toHaveBeenCalledWith(MOCK_RESPONSE.data);
    expect(manager.handleError).toHaveBeenCalledWith(MOCKERRORFROMTRANSFORM);
  });
});
