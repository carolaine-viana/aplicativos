import { Auth } from 'aws-amplify';
import React, { useState } from 'react' 
import {View, Text, Alert} from 'react-native' 
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { PasswordInput } from '../../../components/PasswordInput';
import { Container, Header, Title, SubTitle, Form, Footer } from './styles'

export function Register({navigation}){ 
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setnickname] = useState('');

  async function signUp() {
    try {
      await Auth.signUp({ username, password, attributes: { nickname } });
      Alert.alert('✅ Sign-up Confirmed');

    } catch (error) {
      console.warn('❌ Error signing up...', error);
    }
  }
 

     return(
       <>
        <Container>
           <Header>
             <Title>We are almost there.</Title>
           </Header>

           <SubTitle>
             SignIn to have a create experience.
           </SubTitle>

          <Form>
            <Input
              iconName="user"
              placeholder="NickName"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setnickname}
              value={nickname}
            />

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
              // keyboardType="visible-password"
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
                  title="Sign up"
                  onPress={signUp}
                />

                <Button
                  title="Confirm code"
                  color="white"
                  onPress={() => navigation.navigate('ConfirmSignUp')}
                />
            </Form>
          </Footer>
         </>
       )
} 
