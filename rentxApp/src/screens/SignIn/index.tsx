import React, { useEffect, useState } from 'react'
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import { useTheme } from 'styled-components'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PasswordInput } from '../../components/PasswordInput'
import { Container, Header, Title, SubTitle, Form, Footer } from './styles'
import * as Yup from 'yup'
import {useNavigation } from '@react-navigation/native'
import { userAuth } from '../../hooks/auth';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  SignUpFirstStep: undefined;
  Home: undefined;
 };

 type Props = StackNavigationProp<RootStackParamList, 'SignUpFirstStep'>;

export function SignIn() {
  const theme = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation<Props>();
  const { signIn } = userAuth();

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatorio').email('Digite um email valido'),
        password: Yup.string().required('A senha é obrigatorio'),
      })

      await schema.validate({ email, password })
      navigation.navigate('Home');

      //Fazer login.
      signIn({ email, password })

    } catch (error) {
      if (error instanceof Yup.ValidationError) { //se for um erro do Yup
        Alert.alert('opa', error.message);
      } else {
        Alert.alert('erro na autenticacao', 'ocorreu um erro ao fazer login, verifique as credenciais.')
      }
    }
  }

  function handleNewAccount() {
    navigation.navigate('SignUpFirstStep');
  }


  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <Title>Estamos{'\n'}quase lá.</Title>
          </Header>

          <SubTitle>
            Faça seu login para começar{'\n'}
            uma experiência incrível.
          </SubTitle>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              // keyboardType="visible-password"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title="Login"
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />

            <Button
              title="Criar conta gratuida"
              color={theme.colors.background_secondary}
              light={true}
              onPress={handleNewAccount}
              enabled={true}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
