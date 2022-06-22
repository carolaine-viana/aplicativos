import expect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import * as tutorialUtils from '../tutorialUtils';

describe('Tests on tutorialUtils', () => {
  describe('Tests tutorialUtils.isTimeToSeeNewTutorial()', () => {
    const MOCK_LAST_TIME_SEEN_TUTORIAL = '2021-12-20T11:00:07.972Z';
    it('should return true', async () => {
      const MOCK_DATE_23_HOURS_LATER = '2021-12-21T10:00:07.972Z';
      const res = tutorialUtils.isTimeToSeeNewTutorial(
        MOCK_LAST_TIME_SEEN_TUTORIAL,
        MOCK_DATE_23_HOURS_LATER
      );
      expect(res).toBe(true);
    });
    it('should return false', async () => {
      const MOCK_DATE_4_HOURS_LATER = '2021-12-20T15:00:07.972Z';
      const res = tutorialUtils.isTimeToSeeNewTutorial(
        MOCK_LAST_TIME_SEEN_TUTORIAL,
        MOCK_DATE_4_HOURS_LATER
      );
      expect(res).toBe(false);
    });
  });

  describe('Tests on tutorialUtils.getNextTutorial', () => {
    it('should return next tutorial "TUTO_POSITIVACOES" ', () => {
      const MOCK_COMPLETED_TUTORIALS = '';
      const res = tutorialUtils.getNextTutorial(MOCK_COMPLETED_TUTORIALS);
      expect(res).toEqual('TUTO_POSITIVACOES');
    });
    it('should return next tutorial "TUTO_EXTRATO" ', () => {
      const MOCK_COMPLETED_TUTORIALS = ';TUTO_POSITIVACOES';
      const res = tutorialUtils.getNextTutorial(MOCK_COMPLETED_TUTORIALS);
      expect(res).toEqual('TUTO_EXTRATO');
    });
    it('should rempty string ', () => {
      const MOCK_COMPLETED_TUTORIALS = 'TUTO_POSITIVACOES;TUTO_EXTRATO';
      const res = tutorialUtils.getNextTutorial(MOCK_COMPLETED_TUTORIALS);
      expect(res).toMatch('');
    });
  });

  describe('Tests on tutorialUtils.shouldLoadNextTutorial()', () => {
    it('should return true if there is no completed tutorials yet ', () => {
      const MOCK_LASTTIMEUSERSAWTUTORIAL = '2021-12-20T11:00:07.972Z';
      const MOCK_COMPLETEDTUTORIALS = '';
      const res = tutorialUtils.shouldLoadNextTutorial(
        MOCK_COMPLETEDTUTORIALS,
        MOCK_LASTTIMEUSERSAWTUTORIAL
      );
      expect(res).toBe(true);
    });
    it('should return true if it is time to see a new tutorial', () => {
      const MOCK_LASTTIMEUSERSAWTUTORIAL = '2021-12-20T11:00:07.972Z';
      const MOCK_COMPLETEDTUTORIALS = 'TUTO_POSITIVACOES';
      const res = tutorialUtils.shouldLoadNextTutorial(
        MOCK_COMPLETEDTUTORIALS,
        MOCK_LASTTIMEUSERSAWTUTORIAL
      );
      expect(res).toBe(true);
    });
    it('should return false if it is NOT time to see a new tutorial', () => {
      const currentTime = new Date();

      const MOCK_LASTTIMEUSERSAWTUTORIAL = currentTime.toISOString();
      const MOCK_COMPLETEDTUTORIALS = 'TUTO_POSITIVACOES';
      const res = tutorialUtils.shouldLoadNextTutorial(
        MOCK_COMPLETEDTUTORIALS,
        MOCK_LASTTIMEUSERSAWTUTORIAL
      );
      expect(res).toBe(false);
    });
  });
});
