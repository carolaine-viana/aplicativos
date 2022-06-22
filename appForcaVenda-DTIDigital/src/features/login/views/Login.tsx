import React, { useState, useRef } from 'react';
import { Image, Keyboard, Pressable, TextInputProps, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableButton, FlexCenter, Spinner, DefaultIcon, Typography } from '@shared/components';
import { useTheme } from 'styled-components';

import LogoMartins from '@assets/images/LogoMartins.png';
import {
  ErrorMessage,
  WrapperInput,
  Input,
  FormContainer,
  FormWrapper,
  Logo,
  SectionPresentation,
  Content,
  ButtonWrapper,
  VersionText,
} from './LoginStyledComponents';
import { LoginManager } from '../service/LoginManager';

import { version } from '../../../../package.json';

interface LoginProps {
  onLogin: () => Promise<void>;
}

const Login: React.FC<LoginProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const passwordRef = useRef<TextInputProps>();

  const [login, setLogin] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);

  const navigation = useNavigation();

  const canLogin = login.length > 0 && pass.length > 0;

  const navigateToApp = async () => {
    setLoading(true);
    const manager = new LoginManager();
    const loggedIn = await manager.loginUser(login, pass);
    if (loggedIn) {
      setLoading(true);
      await props.onLogin();
      navigation.navigate('Drawer');
    } else {
      setLoading(false);
      setError(true);
      setLogin('');
      setPass('');
    }
  };

  function changeTextLogin(text: string) {
    setLogin(text);
    setError(false);
  }

  function changeTextPassword(text: string) {
    setPass(text);
    setError(false);
  }

  const feedbackMessage = 'Olá!\nFaça seu login.';

  if (loading) {
    return (
      <FlexCenter bg="dark">
        <Spinner size="large" color="light" />
        <Typography variant="body" color="light">
          Carregando...
        </Typography>
      </FlexCenter>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Content bg="dark">
        <SectionPresentation>
          <Logo>
            <Image source={LogoMartins} />
          </Logo>
          <VersionText variant="leadBody" color="light" align="center">
            {`Versão ${version}`}
          </VersionText>
          <Typography variant="leadBody" color="light" align="center">
            {feedbackMessage}
          </Typography>
        </SectionPresentation>

        <FormContainer>
          <FormWrapper>
            <ErrorMessage bold color="light" variant="overlineMedium" align="center">
              {error && 'Login ou senha incorretos'}
            </ErrorMessage>
            <WrapperInput error={error}>
              <Input
                testID="inputLogin"
                placeholder="Login"
                placeholderTextColor={theme.palette.blue200}
                value={login}
                onChangeText={(text: string) => changeTextLogin(text)}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
            </WrapperInput>
            <WrapperInput error={error}>
              <Input
                ref={passwordRef}
                testID="inputPass"
                placeholder="Senha"
                placeholderTextColor={theme.palette.blue200}
                secureTextEntry={!showPassword}
                value={pass}
                onChangeText={(text: string) => changeTextPassword(text)}
                returnKeyType="send"
                onSubmitEditing={() => navigateToApp()}
              />
              <Pressable onPress={() => setShowPassword((show) => !show)}>
                <DefaultIcon name={showPassword ? 'eye-off' : 'eye'} size={20} color="link" />
              </Pressable>
            </WrapperInput>
          </FormWrapper>
          <FormWrapper>
            <ButtonWrapper>
              <TouchableButton
                testID="buttonLogin"
                title="Entrar"
                color="secondary"
                disabled={!canLogin}
                onPress={() => navigateToApp()}
              />
            </ButtonWrapper>
          </FormWrapper>
        </FormContainer>
      </Content>
    </TouchableWithoutFeedback>
  );
};

export default Login;
