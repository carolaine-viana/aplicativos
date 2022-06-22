import expect from 'expect';
import APIBFFMock from '@shared/base/api/APIBFF';
import GTListRepository from '../services/GTListRepository';

jest.mock('@shared/base/api/APIBFF', () => {
  return class APIBFFMock {
    get = jest.fn();
  };
});

const MOCK_MANAGER_ID = '1234';

describe('Tests GTListRepository', () => {
  let repository;
  beforeAll(() => {
    repository = new GTListRepository();
    repository.apiBff.instance = new APIBFFMock();
  });
  it('should call GtList API passing userId (GC) as a param', async () => {
    await repository.fetchGTs(MOCK_MANAGER_ID);
    expect(repository.apiBff.instance.get).toHaveBeenCalled();
    expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(MOCK_MANAGER_ID);
    expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch('territory-managers');
  });
});
