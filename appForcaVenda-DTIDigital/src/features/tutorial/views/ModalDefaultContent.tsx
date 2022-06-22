import React from 'react';
import { Typography } from 'shared/components';
import DefaultIcon from '../../../shared/components/DefaultIcon/DefaultIcon';
import { IconContainter, ModalContent, ModalContentButton, FeatureName } from './TutorialSC';

interface ModalDefaultContentProps {
  iconName: string;
  featureTitle: string;
  onClickToSee: () => void;
}

const ModalDefaultContent: React.FC<ModalDefaultContentProps> = ({
  iconName,
  featureTitle,
  onClickToSee,
}) => (
  <ModalContent>
    <IconContainter bg="light">
      <DefaultIcon name={iconName} size={20} color="primary" />
    </IconContainter>
    <FeatureName variant="title" bold align="center" color="primary">
      {featureTitle}
    </FeatureName>
    <Typography variant="body" align="center" color="gray400">
      Nova funcionalidade disponível!
    </Typography>
    <ModalContentButton
      color="primary"
      title="Conferir"
      width="132px"
      height="48px"
      onPress={onClickToSee}
      typographyProps={{ variant: 'bodyMedium' }}
    />
  </ModalContent>
);

export default ModalDefaultContent;
