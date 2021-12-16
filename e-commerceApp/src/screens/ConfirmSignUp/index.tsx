import { Auth } from 'aws-amplify';
import React, { useState } from 'react' 
import {View, Text, Alert} from 'react-native' 
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Container, Header, Title, SubTitle, Form, Footer } from './styles'

export function ConfirmSignUp({navigation}){ 
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [authCode, setAuthCode] = useState('');

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, authCode);
      console.warn('✅ Code confirmed');
      navigation.navigate('Feed');
    } catch (error) {
      console.warn(
        '❌ Verification code does not match. Please enter a valid verification code.',
        error.code
      );
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
              onChangeText={setUsername}
              value={username}
            />

            <PasswordInput
              iconName="lock"
              placeholder="CODE"
              // keyboardType="visible-password"
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
          </Footer>

         </>
       )
} 
