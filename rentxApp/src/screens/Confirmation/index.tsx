import React, { useState } from 'react';
import {StatusBar, useWindowDimensions, Image} from 'react-native';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import payment from '../../assets/payment.json';

import { ConfirmButton } from '../../components/ConfirmButton';

import {      
   Container,
   Content,
   Title,
   Message,
   Footer,
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/core';

import LottieView from 'lottie-react-native';

import Animated from 'react-native-reanimated';
import { ConfirmAnimation } from '../ConfirmAnimation';

interface Params {
    title: string;
    message: string;
    nextScreenRoute: string;
}


export function Confirmation(){ 
    const {width} = useWindowDimensions();
    const navigation = useNavigation(); 
    const route = useRoute();
    const {title, message, nextScreenRoute} = route.params as Params;
    const [load, setLoad] = useState(true);

    function handleConfirm(){
        navigation.navigate(nextScreenRoute)
    }

     return(
        <Container>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <LogoSvg
                width={width}
            />

            <Content>

                <ConfirmAnimation/>

                <Title>{title}</Title>

                <Message>
                    {message}
                </Message>



            </Content>

            <Footer>
                <ConfirmButton 
                    title="OK"
                    onPress={handleConfirm}
                />
            </Footer>
           
         </Container>
       )
} 
