import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import {View} from 'react-native';
import {Alert} from 'react-native' 
import * as Yup from 'yup';
import { Button } from '../../../components/Button';
import { ConfirmAnimation } from '../../../components/ConfirmAnimation';
import { Input } from '../../../components/Input';
import { PasswordInput } from '../../../components/PasswordInput';
import { ConfirmSignUp } from '../../ConfirmSignUp';
import { Container, Header, Title, SubTitle, Form, Footer} from './styles'

export function Register({navigation}){ 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function signUp() {
    try {
      const schema = Yup.object().shape({
        username: Yup.string().email('deve ser um email').required('Username obrigatorio'),
        email: Yup.string().email('Email invalido').required('Email obrigatorio'),
        password: Yup.string().required('Senha obrigatoria'),
      })

      const data = {username, email, password}
      await schema.validate(data)

      await Auth.signUp({ username, password, attributes: { email} });
      Alert.alert('✅ Sign-up Confirmed', 'Confirm your code');
    } catch (error) { 
      console.warn('❌ Error signing up...', error);
      if(error instanceof Yup.ValidationError){
        return Alert.alert('opa', error.message)
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
              iconName="user"
              placeholder="Username"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setUsername}
              value={username}
            />

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
                  onPress={signUp}
                />

                  <Button
                    title="Confirm my code"
                    color="white"
                    iconName="home"
                    onPress={() => navigation.navigate('ConfirmSignUp', username)}
                  />
            </Form>
          </Footer>

          
         </>
       )
} 
