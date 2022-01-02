import React, { useState } from 'react';
import {Alert, Linking} from 'react-native';
import * as Yup from 'yup';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { PasswordInput } from '../../../components/PasswordInput';
import { Container, Header, Title, SubTitle, Form, Footer, ContainerTextInferior, Text } from './styles'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


export function SignIn(){ 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()

  async function handleSignIn(){

    try{
      const schema = Yup.object().shape({
        email: Yup.string().email('Email é invalido').required('Email é obrigatorio'),
        password: Yup.string().required('Senha é obrigatoria')
      })
      const data = {email, password}
      await schema.validate(data)

      await auth().signInWithEmailAndPassword(email, password)
      .then(() => Alert.alert('Logado com sucesso ✅ !'))
      
    }catch(error: any){
      if(error instanceof Yup.ValidationError){
        return Alert.alert('opa', error.message)
      }
      console.log(error.code)
      if(error.code === 'auth/invalid-email'){
        Alert.alert('Email ou senha invalido!❌')
      }
    }

   
  }


     return(
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
                    onPress={handleSignIn}
                  />
              </Footer>

              <ContainerTextInferior>
               <Text
                onPress={() => navigation.navigate('ForgotPassword')}
                >
               esqueceu a senha?</Text>
              </ContainerTextInferior>

            </Container>
       )
} 
