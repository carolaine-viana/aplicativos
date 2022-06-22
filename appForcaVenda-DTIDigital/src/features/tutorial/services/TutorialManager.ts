/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '@shared/base/api/BaseManager';
import { TTutorialsDescription } from 'shared/types';
import * as asyncStorage from 'shared/utils/asyncStorage';
import { getNextTutorial, shouldLoadNextTutorial } from '../tutorialUtils';

export default class ManagerName extends BaseManager {
  async saveCompletedTutorial(completedTutorial: TTutorialsDescription) {
    await asyncStorage.setCompletedTutorials(completedTutorial);
    asyncStorage.setLastTimeUserSawTutorial();
  }

  async getActiveTutorial(): Promise<TTutorialsDescription | string> {
    const completedTutorials = await asyncStorage.getCompletedTutorials();
    const lastTimeUserSawTutorial = (await asyncStorage.getLastTimeUserSawTutorial()) as string;
    const loadNextTutorial = shouldLoadNextTutorial(completedTutorials, lastTimeUserSawTutorial);
    if (loadNextTutorial) {
      return getNextTutorial(completedTutorials);
    }
    return '';
  }
}
