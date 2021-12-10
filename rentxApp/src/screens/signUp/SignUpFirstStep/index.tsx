import { useNavigation } from '@react-navigation/native'
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
} from './styles'; 
import * as Yup from 'yup';

export function SignUpFirstStep() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [driverLicense, setDriverLicense] = useState('');

  const navigation = useNavigation();


  function handleBack() {
    navigation.goBack()
  }

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required('CNH é obrigatorio'),
        email: Yup.string().email('Emnail invalido').required('Email e obrigatorio'),
        name: Yup.string().required('Nome é obrigatorio')
      });

      const data = {name, email, driverLicense};
      await schema.validate(data);

      navigation.navigate('SignUpSecondStep', {user: data});

    }catch(error){
      if(error){
        if(error instanceof Yup.ValidationError){
          return Alert.alert('opa', error.message)
        }
      }
    }
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
            <FormTitle>1. Dados</FormTitle>
            <Input
              iconName="user"
              placeholder="Nome"
              onChangeText={setName}
              value={name}
            />

            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType='email-address'
              onChangeText={setEmail}
              value={email}
            />

            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType='numeric'
              onChangeText={setDriverLicense}
              value={driverLicense}
            />
          </Form>

          <Button
            title="Próximo"
            onPress={handleNextStep}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
