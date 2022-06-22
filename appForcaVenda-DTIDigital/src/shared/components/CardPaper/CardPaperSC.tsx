import { IBackground } from 'shared/types/IThemeInterface';
import styled from 'styled-components/native';

const Container = styled.View<{ bg?: keyof IBackground; alignItems?: string }>`
  width: 100%;
  height: auto;
  border-radius: 27px;
  background-color: ${(props) => props.theme.palette.background[props.bg ?? 'default']};
  align-items: ${(props) => props.alignItems || 'center'};
`;

const CardHeader = styled.View``;
const CardBody = styled.View``;
const CardFooter = styled.View``;

export { Container, CardHeader, CardBody, CardFooter };
