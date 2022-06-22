import styled from 'styled-components/native';

export const Container = styled.View`
  // some css style
  padding: 0 24px
  width: 100%;
  align-items: center;
  `;
export const Content = styled.View<{ shouldCenter: boolean }>`
  // some css style
  width: 50%;
  flex-direction: row;
  /* background-color: red; */
  justify-content: ${(props) => (props.shouldCenter ? 'center' : 'space-between')};
`;

export const ContainerControl = styled.View`
  /* background-color: violet; */
  height: 64px;
  justify-content: space-between;
  align-items: center;
`;

export const Control = styled.View`
  // some css style
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.palette.blue600};
  align-items: center;
  justify-content: center;
`;
