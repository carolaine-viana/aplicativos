import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ModalPopUp } from '@shared/components';
import { RoutesNames, TRole } from 'shared/types';
import { usePromise, useRoleInfo } from 'shared/hooks';
import ModalDefaultContent from './ModalDefaultContent';
import { tutorials } from '../tutorialUtils';
import TutorialManager from '../services/TutorialManager';

interface TutorialProps {}

const Manager = new TutorialManager();

const Tutorial: React.FC<TutorialProps> = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const { roleInfo } = useRoleInfo();
  const loadActiveTutorial = useCallback(() => Manager.getActiveTutorial(), []);

  const { data: activeTutorial } = usePromise(loadActiveTutorial);

  useEffect(() => {
    if (activeTutorial) {
      setModalVisible(true);
    }
  }, [activeTutorial]);

  const tutorial = tutorials[activeTutorial as keyof typeof tutorials];

  const handleClickSeeDetails = () => {
    setModalVisible(false);
    navigation.navigate({
      name: RoutesNames.TUTORIALDETAIL,
      params: { activeTutorial },
    });
  };

  if (!tutorial || !tutorial.roles.includes(roleInfo?.role as TRole)) {
    return null;
  }

  return (
    <ModalPopUp onCloseModal={() => setModalVisible(false)} visible={modalVisible}>
      <ModalDefaultContent
        featureTitle={tutorial.featureName}
        iconName={tutorial.iconName}
        onClickToSee={handleClickSeeDetails}
      />
    </ModalPopUp>
  );
};

export default Tutorial;
