import styled, { css } from 'styled-components/native';

import { FlexCenter, Typography } from '@shared/components';

interface ITextInputProps {
  marginTop?: number;
  testID?: string;
  error?: boolean;
}

const Content = styled(FlexCenter)`
  height: 50%;
`;

const FormContainer = styled.View`
  align-items: flex-start;
  margin-bottom: 32px;
`;

const FormWrapper = styled.View`
  width: 250px;
`;

const ErrorMessage = styled(Typography)`
  margin-bottom: 24px;
  text-decoration: underline;
`;

const WrapperInput = styled.View<ITextInputProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.white};
  line-height: 13px;
  padding: 0 12px;
  border-radius: 4px;
  margin-bottom: ${({ marginTop }) => marginTop || 8}px;

  ${({ error }) =>
    error &&
    css`
      border-width: 1px;
      border-color: #f00;
    `}
`;

const Input = styled.TextInput<ITextInputProps>`
  flex: 1;
  font-family: 'Rubik-Regular';
  font-size: 11px;
  color: ${({ theme }) => theme.palette.black};
`;

const SectionPresentation = styled.View`
  margin-bottom: 16px;
  align-items: center;
`;

const Logo = styled.View`
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.View`
  margin-top: 24px;
`;

const VersionText = styled(Typography)`
  margin-bottom: 64px;
`;

export {
  Content,
  SectionPresentation,
  ErrorMessage,
  WrapperInput,
  Input,
  FormContainer,
  FormWrapper,
  Logo,
  ButtonWrapper,
  VersionText,
};
