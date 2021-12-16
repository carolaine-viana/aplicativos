import { useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import React, { useState } from 'react' 
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Container, Header, Title, SubTitle, Form, Footer } from './styles'

export function ConfirmSignUp({navigation}){ 
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');

  async function confirmSignUp() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Email invalido').required('Email obrigatorio'),
        authCode: Yup.number().required('Codigo obrigatorio'),
      })

      const data = {email, authCode}
      await schema.validate(data)

      await Auth.confirmSignUp(email, authCode);
      Alert.alert('✅ Code confirmed');
      navigation.navigate('SignIn');

    } catch (error: any) {
      if(error instanceof Yup.ValidationError){
        return Alert.alert('opa', error.message)
      }

      console.warn(
        '❌ Verification code does not match. Please enter a valid verification code.',
        error.code
      );

    }
  }

  async function resendConfirmationCode(username: string){
    try{
      await Auth.resendSignUp(username)
      Alert.alert('Reenviado')
    }catch{
      Alert.alert('nao deu')
    }
  }

     return(
       <>
        <Container>
           <Header>
             <Title>Confirm {'\n'}your sign up.</Title>
           </Header>

           <SubTitle>
             For your security.
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
              placeholder="CODE"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setAuthCode}
              value={authCode}
            />
            </Form>
            </Container>

          <Footer>
            <Button
              title="Confirm credentials"
              color="white"
              onPress={confirmSignUp}
            />

            <SubTitle onPress={resendConfirmationCode}>Resend my code.</SubTitle>
            
          </Footer>

         </>
       )
} 
