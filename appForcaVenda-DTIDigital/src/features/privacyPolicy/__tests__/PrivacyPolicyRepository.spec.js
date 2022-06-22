import expect from 'expect';
import '../../../shared/utils/jestCustomMatchers';
import '../../../shared/utils/mock-react-native-third-lib';
import PrivacyPolicyRepository from '../services/PrivacyPolicyRepository';
import APIBFFMock from '@shared/base/api/APIBFF';

jest.mock('@shared/base/api/APIBFF', () => {
  return class APIBFFMock {};
});

describe('Tests on PrivacyPolicyRepository', () => {
  const RCA_MOCK_ID = '1234';
  const MANAGER_MOCK_ID = '666';

  let repository;
  let bffMock;
  beforeAll(() => {
    bffMock = new APIBFFMock();
    repository = new PrivacyPolicyRepository();
    repository.apiBff.instance = bffMock;
    repository.apiBff.instance.get = jest.fn();
    repository.apiBff.instance.post = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call GET request for sales reps with RCA ID', () => {
    repository.fetchSalesRepsAcceptedPrivacyPolicy(RCA_MOCK_ID);
    expect(repository.apiBff.instance.get).toBeCalled();
    expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(`/sales-reps/${RCA_MOCK_ID}`);
  });

  it('should call POST request for sales reps with RCA ID', () => {
    repository.sendSalesRepsAcceptedPrivacyPolicy(RCA_MOCK_ID);
    expect(repository.apiBff.instance.post).toBeCalled();
    expect(repository.apiBff.instance.post.mock.calls[0][0]).toMatch(
      `/sales-reps/${RCA_MOCK_ID}/accept-terms-of-use`
    );
  });

  it('should call GET request for sales managers with MANAGER ID', () => {
    repository.fetchSalesManagersAcceptedPrivacyPolicy(MANAGER_MOCK_ID);
    expect(repository.apiBff.instance.get).toBeCalled();
    expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
      `/sales-managers/${MANAGER_MOCK_ID}`
    );
  });
  it('should call POST request for sales managers with MANAGER ID', () => {
    repository.sendSalesManagersAcceptedPrivacyPolicy(MANAGER_MOCK_ID);
    expect(repository.apiBff.instance.post).toBeCalled();
    expect(repository.apiBff.instance.post.mock.calls[0][0]).toMatch(
      `/sales-managers/${MANAGER_MOCK_ID}/accept-terms-of-use`
    );
  });
});
