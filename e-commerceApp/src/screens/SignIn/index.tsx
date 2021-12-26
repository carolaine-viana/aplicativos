import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import {Alert} from 'react-native';
import * as Yup from 'yup';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Container, Header, Title, SubTitle, Form, Footer } from './styles'

export function SignIn({navigation}){ 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function confirmSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Email é invalido').required('Email é obrigatorio'),
        password: Yup.string().required('Senha é obrigatoria!')
      })

      const data = {email, password}
      await schema.validate(data)

      await Auth.signIn(email, password);
      Alert.alert('✅ Sucess');
      navigation.navigate('Feed');

    } catch (error: any) {
      if(error instanceof Yup.ValidationError){
        return Alert.alert('opa', error.message)
      }
      console.warn('❌ Verification code does not match.',
        error.code
      )
    }
  }

     return(
       <>
        <Container>
           <Header>
             <Title>Login</Title>
           </Header>

           <SubTitle>
             For your security.
           </SubTitle>

          <Form>
            <Input
              testID='input-email'
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              testID='input-senha'
              iconName="lock"
              placeholder="CODE"
              // keyboardType="visible-password"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPassword}
              value={password}
            />
            </Form>

              <Footer>
                  <Button
                    testID='loginclick'
                    title="Login"
                    color="white"
                    onPress={confirmSignIn}
                  />
              </Footer>

            </Container>

         </>
       )
} 
