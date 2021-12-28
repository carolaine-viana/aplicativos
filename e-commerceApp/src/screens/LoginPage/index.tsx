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
import {ImageSlider} from '../../components/ImageSlider';
import { useNavigation } from '@react-navigation/native';

type ImageProp = {
  photos: {
    id: number;
    photo: string;
  }[]
}

export function LoginPage(){ 
    const navigation = useNavigation()

     return(
        <Container>
              <ImageBackground
                source={img1}
                >
            </ImageBackground>

            {/* <ImageSlider imagesUrl={imageURL.photos} /> */}

                <Content>
                    <ContainerDescription>
                        <Title>for the minimalists</Title>
                        <Description>Matching Simplicity and comfort for your daily basic needs</Description>
                    </ContainerDescription>
                </Content>

                    <Footer>
                        <Button
                            title="Register"
                            onPress={() => navigation.navigate('Register')}
                        />

                        <Button
                            testID="button-add"
                            title="Login in"
                            color="white"
                            onPress={() => navigation.navigate('SignIn')}
                        />

                    </Footer>

         </Container>
       )
} 