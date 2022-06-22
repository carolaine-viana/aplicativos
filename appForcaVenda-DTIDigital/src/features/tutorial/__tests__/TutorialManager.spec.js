import expect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import * as asyncStorage from '../../../shared/utils/asyncStorage';
import TutorialManager from '../services/TutorialManager';
import * as tutorialUtils from '../tutorialUtils';

jest.mock('../../../shared/utils/asyncStorage', () => ({
  setCompletedTutorials: jest.fn(),
  setLastTimeUserSawTutorial: jest.fn(),
  getCompletedTutorials: jest.fn(),
  getLastTimeUserSawTutorial: jest.fn(),
}));

jest.mock('../tutorialUtils', () => ({
  shouldLoadNextTutorial: jest.fn(),
  getNextTutorial: jest.fn(),
}));

describe('Tests TutorialManager', () => {
  let manager;
  beforeAll(() => {
    manager = new TutorialManager();
  });
  describe('Tests on saveCompletedTutorial', () => {
    it(`should call asyncStorage.setCompletedTutorials() and
     asyncStorage.setLastTimeUserSawTutorial()`, async () => {
      const completedTutorial = 'TUTO_POSITIVACOES';
      await manager.saveCompletedTutorial(completedTutorial);
      expect(asyncStorage.setCompletedTutorials).toBeCalledWith(completedTutorial);
      expect(asyncStorage.setLastTimeUserSawTutorial).toBeCalled();
    });
  });

  describe('Tests on getActiveTutorial', () => {
    const MOCK_NEXT_TUTORIAL = 'TUTO_EXTRATO';
    const MOCK_COMPLETED_TUTORIALS = 'TUTO_POSITIVACOES';
    const MOCK_LASTTIMEUSERSAWTUTORIAL = '2021-12-20T11:00:07.972Z';
    it('should return "TUTO_EXTRATO" ', async () => {
      asyncStorage.getCompletedTutorials.mockResolvedValueOnce(MOCK_COMPLETED_TUTORIALS);
      asyncStorage.getLastTimeUserSawTutorial.mockResolvedValueOnce(MOCK_LASTTIMEUSERSAWTUTORIAL);
      tutorialUtils.shouldLoadNextTutorial.mockReturnValueOnce(true);
      tutorialUtils.getNextTutorial.mockReturnValueOnce(MOCK_NEXT_TUTORIAL);

      const res = await manager.getActiveTutorial();
      expect(asyncStorage.getCompletedTutorials).toHaveBeenCalled();
      expect(asyncStorage.getLastTimeUserSawTutorial).toHaveBeenCalled();
      expect(tutorialUtils.shouldLoadNextTutorial).toHaveBeenCalledWith(
        MOCK_COMPLETED_TUTORIALS,
        MOCK_LASTTIMEUSERSAWTUTORIAL
      );
      expect(tutorialUtils.getNextTutorial).toHaveBeenCalledWith(MOCK_COMPLETED_TUTORIALS);
      expect(res).toEqual(MOCK_NEXT_TUTORIAL);
    });
  });
});
