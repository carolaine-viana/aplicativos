import React from 'react';
import {      
    Container,
    ImageBackground,
    Content,
    ContainerDescription,
    Title,
    Description,
    Footer,
    
} from './styles';
import img1 from '../../assets/img1.png';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/core';

export function LoginPage(){ 
    const navigation = useNavigation(); 

     return(
        <Container>
            <ImageBackground
                source={img1}
                >
            </ImageBackground>

                <Content>
                    <ContainerDescription>
                        <Title>for the minimalists</Title>
                        <Description>Matching Simplicity and comfort for your daily basic needs</Description>
                    </ContainerDescription>
                </Content>

                    <Footer>
                        <Button
                            title="Register"
                            onPress={() => navigation.navigate('Feed')}
                        />

                        <Button
                            title="Login in"
                            color="white"
                            onPress={() => navigation.navigate('Feed')}
                        />

                    </Footer>

         </Container>
       )
} 
