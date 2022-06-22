import React from 'react';
import DefaultIcon from '@shared/components/DefaultIcon/DefaultIcon';
import Typography from '@shared/components/Typography/Typography';
import { ContainerSectionTitle, ContainerIcon } from './SectionTitleSC';

interface SectionTitleProps {
  title: string;
  icon: string;
  paddingTitle?: string;
  wrapper?: any;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { title, icon, wrapper: Container } = props;
  const renderIconTitle = () => (
    <>
      <ContainerIcon>
        <DefaultIcon name={icon} color="primary" size={18} />
      </ContainerIcon>
      <Typography variant="titleMedium" bold>
        {title}
      </Typography>
    </>
  );
  return Container ? (
    <Container>{renderIconTitle()}</Container>
  ) : (
    <ContainerSectionTitle>{renderIconTitle()}</ContainerSectionTitle>
  );
};

export default SectionTitle;
