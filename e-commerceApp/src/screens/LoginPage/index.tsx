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

type ImageProp = {
  photos: {
    id: string
    photo: string
  }[]
}

export function LoginPage({navigation}){ 

  // const imageURL: ImageProp = {
  //   photos: [
  //     {
  //       id: '1',
  //       photo: 'https://avatars.githubusercontent.com/u/65136543?v=4'
  //     },
  //     {
  //       id: '2',
  //       photo: 'https://avatars.githubusercontent.com/u/65136543?v=4'
  //     },
  //     {
  //       id: '3',
  //       photo: 'https://avatars.githubusercontent.com/u/65136543?v=4'
  //     }
  //   ]
  // }

     return(
        <Container>
              {/* { <ImageSlider imagesUrl={imageURL.photos} />} */}
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
                            onPress={() => navigation.navigate('Register')}
                        />

                        <Button
                            title="Login in"
                            color="white"
                            onPress={() => navigation.navigate('SignIn')}
                        />

                    </Footer>

         </Container>
       )
} 