import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { BackButton } from '../../../components/BackButton'
import { Bullet } from '../../../components/Bullet'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from './styles'
import { PasswordInput } from '../../../components/PasswordInput'
import { useTheme } from 'styled-components';
import api from '../../../services/api'

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const {user} = route.params as Params;
  // console.warn(user)

  function handleBack() {
    navigation.goBack()
  }

  async function handleRegister(){
    if(!password || !passwordConfirm){
      return Alert.alert('Informe a senha e a confirmação dela')
    }

    if(password != passwordConfirm){
      return Alert.alert('As senhas nao sao iguais.')
    }

    //se nao der erro enviar para API e cadastrar
    //depois chamar a tela de conf de cadastro.

    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.driverLicense,
      password
    }).then(() => {
        navigation.navigate('Confirmation', {
          nextScreenRoute: 'SignIn',
          title: 'Conta criada!',
          message: `Agora é so fazer login\ne aproveitar!`
        })
    }).catch((error) =>{
      // console.log(error)
      Alert.alert('opa', 'nao foi posivel cadastrar');
    })
    
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
            </Steps>
          </Header>

          <Title>Crie {'\n'} sua conta</Title>
          <SubTitle>Faça seu cadastro de {'\n'} forma rápida e fácil</SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Repetir senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />

          </Form>

          <Button
            title="Cadastrar"
            color={theme.colors.sucess}
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
