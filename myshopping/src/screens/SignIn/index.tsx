import React, {useState} from 'react';

import { Container, Account, Title, Subtitle } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native';

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

   function handleCreateUserAccount(){
    auth().createUserWithEmailAndPassword(email, password)
    .then(() => Alert.alert('usuario criado com sucesso!'))
    .catch(error => {
      console.log(error.code)
      if(error.code === 'auth/email-already-in-use'){
        return Alert.alert('Email já em uso. escolha outro para cadastro!')
      }
      if(error.code === 'auth/invalid-email'){
        return Alert.alert('email invalido!')
      }
      if(error.code  === 'autth/weeak-password'){
        return Alert.alert('senha fraca. deve ter ao menos 6 digitos')
      }
    })
  }

   function handleSignInWithEmailAndPassword(){
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(({user}) => console.log(user))
    .catch(error => {
      console.log(error.code)
      if(error.code === 'auth/user-not-found' || 'auth/wrong-password'){
        Alert.alert('usuario nao encontrado. email ou senha invalida!')
      }

    })
  }

  function handleForgotPassword(){
    auth().sendPasswordResetEmail(email)
    .then(() => Alert.alert('email de recuperacao enviado!'))
  }

  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista de compra te ajudar nas compras</Subtitle>

      <Input
        placeholder="e-mail"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Input
        placeholder="senha"
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Entrar" onPress={handleSignInWithEmailAndPassword} />

      <Account>
        <ButtonText title="Recuperar senha" onPress={handleForgotPassword} />
        <ButtonText title="Criar minha conta" onPress={handleCreateUserAccount} />
      </Account>
    </Container>
  );
}