import styled from 'styled-components/native';

interface FormContainerProps {}

const Container = styled.View`
  width: 328px;
  align-items: center;
`;

const FormContainer = styled.View<FormContainerProps>`
  width: 200px;
  height: 328px;
  justify-content: space-between;
`;

const FormControlsContainer = styled.View`
  width: 100%;
  margin: 24px 0;
`;

const FormControl = styled.View`
  width: 100%;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => props.theme.palette.gray200};
  padding-bottom: 12px;
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.View`
  margin-right: 16px;
`;

export { Container, FormContainer, FormControl, FormControlsContainer, IconContainer };
