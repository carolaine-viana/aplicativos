import expect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import { MOCK_RESPONSE_GET_MANAGERS, MOCK_RESPONSE_GET_REPS } from './termOfUse.mock';
import * as privacyPolicyUtils from '../privacyPolicyUtils';

describe('Tests privacyPolicyUtils', () => {
  it('should call transformTermUseGetResponse with sales reps data response', () => {
    const res = privacyPolicyUtils.transformTermUseGetResponseReps(MOCK_RESPONSE_GET_REPS.data);
    expect(res).toHaveProperty('termsOfUseLastUpdate');
    expect(res).toHaveProperty('termsOfUseAcceptanceDate');
    expect(res).toHaveProperty('termsOfUseLastAcceptanceDate');
  });
  it('should call transformTermUseGetResponse with sales managers data response', () => {
    const res = privacyPolicyUtils.transformTermUseGetResponseManagers(
      MOCK_RESPONSE_GET_MANAGERS.data
    );
    expect(res).toHaveProperty('termsOfUseLastUpdate');
    expect(res).toHaveProperty('termsOfUseAcceptanceDate');
    expect(res).toHaveProperty('termsOfUseLastAcceptanceDate');
  });
  describe('Tests on isNewTermOfUse', () => {
    const UPDATED_TERM_USE_DATE = '2022-02-01 17:33:00';
    it('should return TRUE when acceptedTermUseDate is BEFORE updatedTermUseDate ', () => {
      const ACCEPTED_TERM_USE_DATE = '2022-01-30 17:33:00';
      const res = privacyPolicyUtils.isNewTermOfUse(UPDATED_TERM_USE_DATE, ACCEPTED_TERM_USE_DATE);
      expect(res).toBe(true);
    });
    it('should return FALSE when acceptedTermUseDate is AFTER updatedTermUseDate ', () => {
      const ACCEPTED_TERM_USE_DATE = '2022-02-03 17:33:00';
      const res = privacyPolicyUtils.isNewTermOfUse(UPDATED_TERM_USE_DATE, ACCEPTED_TERM_USE_DATE);
      expect(res).toBe(false);
    });
  });
});
