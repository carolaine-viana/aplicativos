import React, { useState } from 'react';
import {StatusBar, useWindowDimensions} from 'react-native';
import LogoSvg from '../../assets/logo_background_gray.svg';
import { ConfirmButton } from '../../components/ConfirmButton';

import {      
   Container,
   Content,
   Title,
   Message,
   Footer,
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/core';


import { ConfirmAnimation } from '../ConfirmAnimation';


interface Params{
    title: string;
    message: string;
    nextScreenRoute: any;
}

export function Confirmation(){ 
    const {width} = useWindowDimensions();
    const navigation = useNavigation(); 
    const route = useRoute();
    const {title, message, nextScreenRoute} = route.params as Params;

    function handleConfirm(){
        navigation.navigate(nextScreenRoute);
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
