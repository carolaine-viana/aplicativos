import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import {View} from 'react-native';
import {Alert} from 'react-native' 
import * as Yup from 'yup';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { PasswordInput } from '../../../components/PasswordInput';
import { Container, Header, Title, SubTitle, Form, Footer} from './styles';
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';

export function Register(){ 
  const navigation = useNavigation()
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function handleSignUp(){
    try{
      //validacao  do yup
      const schema = Yup.object().shape({
        email: Yup.string().email('Email invalido!').required('email obrigatorio'),
        password: Yup.string().required('senha obrigatoria')
      })

      const data = {email, password}
      await schema.validate(data)

      auth().createUserWithEmailAndPassword(email, password)
      .then(() =>  Alert.alert('Criado com sucesso! ✅ '))
    }catch(error: any){
      if(error instanceof Yup.ValidationError){
        return Alert.alert('opa ❌ ', error.message)
      }
      if(error.code){
        return Alert.alert(error.code)
      }
    }
  }
 
     return(
       <>
        <Container>
           <Header>
             <Title>We are almost there.</Title>
           </Header>

           <SubTitle>
             Register to have a better experience.
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
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPassword}
              value={password}
            />
            </Form>

            </Container>

          <Footer>
            <Form>
                <Button
                  title="Register"
                  onPress={handleSignUp}
                />

            </Form>
          </Footer>

          
         </>
       )
} 
