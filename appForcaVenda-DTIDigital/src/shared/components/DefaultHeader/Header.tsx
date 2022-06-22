import React, { ReactNode } from 'react';
import { Container, RightContainer, LeftContainer, Title, HeaderSCProps } from './HeaderSC';

export interface HeaderProps extends HeaderSCProps {
  title?: string;
  left?: ReactNode;
  right?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  left,
  right,
  backgroundColor = 'default',
  hideElevation,
}) => (
  <Container backgroundColor={backgroundColor} hideElevation={hideElevation}>
    <LeftContainer>{left}</LeftContainer>
    <Title variant="header" color="gray400" size={18} bold>
      {title}
    </Title>
    <RightContainer>{right}</RightContainer>
  </Container>
);

export default Header;
