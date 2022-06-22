import { ETutorialsDescription, Profiles } from 'shared/types';
import { getDiffHoursFromDate } from 'shared/utils';

const INTERVAL_BETWEEN_TUTORIALS_IN_HOURS = 20;

export const tutorials = {
  [ETutorialsDescription.TUTO_POSITIVACOES]: {
    featureName: 'Positivações',
    iconName: 'star',
    roles: [Profiles.RCA],
    details: {
      steps: [
        {
          stepMessage: 'Em Positivações você\nconfere seu melhor\nresultado e o seu período.',
          stepImagePath: require('../../assets/images/positivation.png'),
        },
      ],
    },
  },
  [ETutorialsDescription.TUTO_EXTRATO]: {
    featureName: 'Extrato',
    iconName: 'file-text',
    roles: [Profiles.RCA],
    details: {
      steps: [
        {
          stepMessage: 'Escolha o mês em que\ndeseja consultar o extrato.',
          stepImagePath: require('../../assets/images/tuto-extrato-one.png'),
        },
        {
          stepMessage: 'Consulte seu extrato!',
          stepImagePath: require('../../assets/images/tuto-extrato-two.png'),
        },
      ],
    },
  },
};

export const isTimeToSeeNewTutorial = (
  lastTimeUserSawTutorial: string,
  currentTimeISOString: string
) => {
  const lastime = new Date(lastTimeUserSawTutorial);
  const current = new Date(currentTimeISOString);
  const diffHours = getDiffHoursFromDate(current, lastime);

  return diffHours >= INTERVAL_BETWEEN_TUTORIALS_IN_HOURS;
};

export const getNextTutorial = (completedTutorials: string) => {
  const listCompletedTutorials = completedTutorials.split(';');
  const allTutorials = Object.keys(tutorials);
  const pendingTutorials = allTutorials.filter(
    (tutorial) => !listCompletedTutorials.includes(tutorial)
  );
  return pendingTutorials[0] || '';
};

export const shouldLoadNextTutorial = (
  completedTutorials: string,
  lastTimeUserSawTutorial: string
) => {
  if (completedTutorials.length === 0 || lastTimeUserSawTutorial) {
    return isTimeToSeeNewTutorial(lastTimeUserSawTutorial, new Date().toISOString());
  }
  return false;
};
