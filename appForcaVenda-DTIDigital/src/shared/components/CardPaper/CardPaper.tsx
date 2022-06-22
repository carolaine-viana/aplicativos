import React from 'react';
import { IBackground } from 'shared/types/IThemeInterface';
import { Container, CardHeader, CardBody, CardFooter } from './CardPaperSC';

interface CardPaperProps {
  renderHeader?: () => React.ReactNode;
  renderBody?: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
  bg?: keyof IBackground;
  alignItems?: string;
}

const CardPaper: React.FC<CardPaperProps> = (props) => {
  const { renderHeader, renderBody, renderFooter } = props;
  return (
    <Container bg={props.bg} alignItems={props.alignItems}>
      <CardHeader>{renderHeader?.()}</CardHeader>
      <CardBody>{renderBody?.()}</CardBody>
      <CardFooter>{renderFooter?.()}</CardFooter>
    </Container>
  );
};

export default CardPaper;
