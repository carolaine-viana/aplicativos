import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.palette.white};
`;

export const ContainerList = styled.View`
  padding: 0 24px;
  margin-bottom: 24px;
`;

export const TitleContainer = styled.View`
  width: 100%;
  align-items: center;
  padding: 36px 0 30px 0;
`;

export const Content = styled(Container)`
  flex: 3;
`;
