import styled from 'styled-components/native';

export const ContainerCards = styled.View`
  flex-direction: row;
  margin-top: 56px;
  padding: 0 32px;
  justify-content: space-between;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.palette.white};
`;

export const WebViewContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.palette.white};
  padding: 16px 0;
`;
