import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alert } from 'react-native';
import AppSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { SignSocialButton } from '../../components/SignSocialButton';
import { useAuth } from '../../hooks/auth';

import {      
   Container,
   Header,
   TitleWrapper,
   Title,
   SignInTitle,
   Footer,
   FooterWrapper
} from './styles';

export function SignIn(){ 
    const {signInWithGoogle, signInWithApple} = useAuth();

    async function handleSignInWithGoogle(){
        try{
            await signInWithGoogle()
        }catch(error){
            console.log(error)
            Alert.alert('Nao foi possivel conectar a conta google.')
        }
    }

    async function handleSignInWithApple(){
        try{
            await signInWithApple()
        }catch(error){
            console.log(error)
            Alert.alert('Nao foi possivel conectar a conta Apple.')
        }
    }

     return(
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />
                    <Title>
                    Controle suas {'\n'}
                    finanças de forma {'\n'}
                    muito simples
                    </Title>
                </TitleWrapper>
                <SignInTitle>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </SignInTitle>
            </Header>
            <Footer>
                <FooterWrapper>
                    <SignSocialButton
                        title="Entrar com Google"
                        svg={GoogleSvg}
                        onPress={handleSignInWithGoogle}
                    />
                    <SignSocialButton
                        title="Entrar com Apple"
                        svg={AppSvg}
                        onPress={handleSignInWithApple}
                    />
                </FooterWrapper>
            </Footer>
         </Container>
       )
} 
