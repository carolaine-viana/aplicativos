import expect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import { MOCK_RESPONSE_GET_MANAGERS, MOCK_RESPONSE_GET_REPS } from './termOfUse.mock';
import * as privacyPolicyUtils from '../privacyPolicyUtils';
import PrivacyPolicyRepositoryMock from '../services/PrivacyPolicyRepository';
import PrivacyPolicyManager from '../services/PrivacyPolicyManager';
import * as asyncStorageMock from '@shared/utils/asyncStorage';

jest.mock('@shared/utils/asyncStorage', () => {
  return {
    getUserLogin: jest.fn(),
    getAcceptedTermUseDate: jest.fn(),
    setDateAcceptedTermUse: jest.fn(),
    getUpdatedTermUseDate: jest.fn(),
    setDateUpdatedTermUse: jest.fn(),
  };
});

jest.mock('../services/PrivacyPolicyRepository', () => {
  return class PrivacyPolicyRepositoryMock {
    fetchSalesManagersAcceptedPrivacyPolicy = jest.fn();
    fetchSalesRepsAcceptedPrivacyPolicy = jest.fn();
    sendSalesManagersAcceptedPrivacyPolicy = jest.fn();
    sendSalesRepsAcceptedPrivacyPolicy = jest.fn();
  };
});

jest.mock('../privacyPolicyUtils', () => {
  return {
    transformTermUseGetResponseManagers: jest.fn(),
    transformTermUseGetResponseReps: jest.fn(),
    isNewTermOfUse: jest.fn(),
  };
});

const MOCK_GV_ID = '6489';
const MOCK_GV_ROLE = 'GV';
const MOCK_RCA_ID = '1234';
const MOCK_RCA_ROLE = 'RCA';
const MOCK_GT_ID = '0000';
const MOCK_GT_ROLE = 'GT';
const MOCK_DATE_UPDATED_TERM_USE = '2022-02-01 00:00:00';
const MOCK_DATE_ACCEPTED_TERM_USE = '2022-02-01 01:00:00';

describe('Tests PrivacyPolicyManager', () => {
  let manager;

  beforeAll(() => {
    manager = new PrivacyPolicyManager();
    manager.repo = new PrivacyPolicyRepositoryMock();
  });

  describe('Tests on syncDateAcceptedPrivacyPolicy()', () => {
    it('should fetch sales managers acceptance term of use when user is manager(GV)', async () => {
      manager.repo.fetchSalesManagersAcceptedPrivacyPolicy.mockResolvedValueOnce(
        MOCK_RESPONSE_GET_MANAGERS
      );

      await manager.syncDateAcceptedPrivacyPolicy(MOCK_GV_ROLE, MOCK_GV_ID);

      expect(manager.repo.fetchSalesManagersAcceptedPrivacyPolicy).toHaveBeenCalledWith(MOCK_GV_ID);
      expect(privacyPolicyUtils.transformTermUseGetResponseManagers).toHaveBeenCalledWith(
        MOCK_RESPONSE_GET_MANAGERS.data
      );
    });

    it('should fetch sales reps acceptance term of use when user is rep(RCA)', async () => {
      manager.repo.fetchSalesRepsAcceptedPrivacyPolicy.mockResolvedValueOnce(
        MOCK_RESPONSE_GET_REPS
      );

      await manager.syncDateAcceptedPrivacyPolicy(MOCK_RCA_ROLE, MOCK_RCA_ID);

      expect(manager.repo.fetchSalesRepsAcceptedPrivacyPolicy).toHaveBeenCalledWith(MOCK_RCA_ID);
      expect(privacyPolicyUtils.transformTermUseGetResponseReps).toHaveBeenCalledWith(
        MOCK_RESPONSE_GET_REPS.data
      );
    });

    it('should fetch sales reps acceptance term of use when user is rep(GT)', async () => {
      manager.repo.fetchSalesRepsAcceptedPrivacyPolicy.mockResolvedValueOnce(
        MOCK_RESPONSE_GET_REPS
      );

      await manager.syncDateAcceptedPrivacyPolicy(MOCK_GT_ROLE, MOCK_GT_ID);

      expect(manager.repo.fetchSalesRepsAcceptedPrivacyPolicy).toHaveBeenCalledWith(MOCK_GT_ID);
      expect(privacyPolicyUtils.transformTermUseGetResponseReps).toHaveBeenCalledWith(
        MOCK_RESPONSE_GET_REPS.data
      );
    });
  });

  describe('Test on shouldLoadPrivacyPolicy', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('should return FALSE if its not a new TERM OF USE', async () => {
      asyncStorageMock.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);

      asyncStorageMock.getUpdatedTermUseDate.mockResolvedValue(MOCK_DATE_UPDATED_TERM_USE);
      asyncStorageMock.getAcceptedTermUseDate.mockResolvedValueOnce(MOCK_DATE_ACCEPTED_TERM_USE);

      privacyPolicyUtils.isNewTermOfUse.mockReturnValueOnce(false);

      const spySyncDateAcceptedPrivacyPolicy = jest.spyOn(manager, 'syncDateAcceptedPrivacyPolicy');

      const res = await manager.shouldLoadPrivacyPolicy(MOCK_RCA_ROLE);

      expect(spySyncDateAcceptedPrivacyPolicy).toHaveBeenCalledWith(MOCK_RCA_ROLE, MOCK_RCA_ID);
      expect(asyncStorageMock.getUpdatedTermUseDate).toHaveBeenCalledTimes(1);
      expect(asyncStorageMock.getAcceptedTermUseDate).toHaveBeenCalled();
      expect(privacyPolicyUtils.isNewTermOfUse).toHaveBeenCalled();
      expect(res).toBe(false);
    });

    it('should return FALSE in case of an exception', async () => {
      asyncStorageMock.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);

      asyncStorageMock.getUpdatedTermUseDate.mockResolvedValueOnce(MOCK_DATE_UPDATED_TERM_USE);
      asyncStorageMock.getAcceptedTermUseDate.mockResolvedValueOnce(MOCK_DATE_ACCEPTED_TERM_USE);

      const spySyncDateAcceptedPrivacyPolicy = jest.spyOn(manager, 'syncDateAcceptedPrivacyPolicy');

      spySyncDateAcceptedPrivacyPolicy.mockImplementationOnce(() => {
        throw new Error('Some error');
      });

      const res = await manager.shouldLoadPrivacyPolicy(MOCK_RCA_ROLE);

      expect(spySyncDateAcceptedPrivacyPolicy).toHaveBeenCalledWith(MOCK_RCA_ROLE, MOCK_RCA_ID);
      expect(asyncStorageMock.getUpdatedTermUseDate).not.toHaveBeenCalled();
      expect(asyncStorageMock.getAcceptedTermUseDate).not.toHaveBeenCalled();
      expect(privacyPolicyUtils.isNewTermOfUse).not.toHaveBeenCalled();
      expect(res).toBe(false);
    });

    it("should return TRUE if it's a new TERM OF USE", async () => {
      asyncStorageMock.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);

      asyncStorageMock.getUpdatedTermUseDate.mockResolvedValue(MOCK_DATE_UPDATED_TERM_USE);
      asyncStorageMock.getAcceptedTermUseDate.mockResolvedValueOnce(MOCK_DATE_ACCEPTED_TERM_USE);

      privacyPolicyUtils.isNewTermOfUse.mockReturnValueOnce(true);

      const spySyncDateAcceptedPrivacyPolicy = jest.spyOn(manager, 'syncDateAcceptedPrivacyPolicy');

      spySyncDateAcceptedPrivacyPolicy.mockImplementationOnce(() => {});

      const res = await manager.shouldLoadPrivacyPolicy(MOCK_RCA_ROLE);

      expect(spySyncDateAcceptedPrivacyPolicy).toHaveBeenCalledWith(MOCK_RCA_ROLE, MOCK_RCA_ID);
      expect(asyncStorageMock.getUpdatedTermUseDate).toHaveBeenCalled();
      expect(asyncStorageMock.getAcceptedTermUseDate).toHaveBeenCalled();
      expect(privacyPolicyUtils.isNewTermOfUse).toHaveBeenCalled();
      expect(res).toBe(true);
    });
  });

  describe('Tests on acceptTermOfUse', () => {
    it('should send sales manager acceptance', async () => {
      asyncStorageMock.getUserLogin.mockResolvedValueOnce(MOCK_GV_ID);
      const spyShouldLoadPrivacyPolicy = jest.spyOn(manager, 'shouldLoadPrivacyPolicy');

      spyShouldLoadPrivacyPolicy.mockResolvedValueOnce(true);

      const res = await manager.acceptTermOfUse(MOCK_GV_ROLE);

      expect(manager.repo.sendSalesManagersAcceptedPrivacyPolicy).toHaveBeenCalledWith(MOCK_GV_ID);
      expect(spyShouldLoadPrivacyPolicy).toHaveBeenCalledWith(MOCK_GV_ROLE);
      expect(res).toHaveProperty('accepted', false);
      expect(res).not.toHaveProperty('error', false);
    });

    it('should send sales reps acceptance', async () => {
      asyncStorageMock.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);
      const spyShouldLoadPrivacyPolicy = jest.spyOn(manager, 'shouldLoadPrivacyPolicy');

      spyShouldLoadPrivacyPolicy.mockResolvedValueOnce(false);

      const res = await manager.acceptTermOfUse(MOCK_RCA_ROLE);

      expect(manager.repo.sendSalesRepsAcceptedPrivacyPolicy).toHaveBeenCalledWith(MOCK_RCA_ID);
      expect(spyShouldLoadPrivacyPolicy).toHaveBeenCalledWith(MOCK_RCA_ROLE);
      expect(res).toHaveProperty('accepted', true);
      expect(res).not.toHaveProperty('error', false);
    });

    it('should return error when exception', async () => {
      asyncStorageMock.getUserLogin.mockResolvedValueOnce(MOCK_RCA_ID);
      const spyShouldLoadPrivacyPolicy = jest.spyOn(manager, 'shouldLoadPrivacyPolicy');

      spyShouldLoadPrivacyPolicy.mockImplementationOnce(() => {
        throw new Error('...');
      });

      const res = await manager.acceptTermOfUse(MOCK_RCA_ROLE);

      expect(manager.repo.sendSalesRepsAcceptedPrivacyPolicy).toHaveBeenCalledWith(MOCK_RCA_ID);
      expect(spyShouldLoadPrivacyPolicy).toHaveBeenCalledWith(MOCK_RCA_ROLE);
      expect(res).toHaveProperty('accepted', false);
      expect(res).toHaveProperty('error', true);
    });
  });
});
