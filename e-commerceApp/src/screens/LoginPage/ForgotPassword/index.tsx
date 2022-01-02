import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react' 
import { Alert } from 'react-native';
import * as Yup from 'yup';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { PasswordInput } from '../../../components/PasswordInput';
import { Container, Header, Title, SubTitle, Form, Footer } from './styles'
import auth from '@react-native-firebase/auth'

export function ForgotPassword(){ 
  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const navigation = useNavigation()

 async function handleForgotPassword(){
    try{
      const schema = Yup.object().shape({
        email: Yup.string().email('Email invalido!').required('Email obrigatorio')
      })
      const data = {email}
      await schema.validate(data)

     await auth().sendPasswordResetEmail(email).then(() => Alert.alert('email de recuperacao enviado!'))

    }

    catch(error: any){
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
             <Title>Reset {'\n'}your account.</Title>
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
            </Form>
            </Container>

          <Footer>
            <Button
              title="Resend my credentials"
              color="white"
              onPress={handleForgotPassword}
            />
            
          </Footer>

         </>
       )
} 
