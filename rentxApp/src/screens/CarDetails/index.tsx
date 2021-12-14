import React from 'react';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import Animated, {
   useSharedValue,
   useAnimatedScrollHandler,
   useAnimatedStyle,
   interpolate,
   Extrapolate
} from 'react-native-reanimated';

import {getAccessoriesIcon} from '../../utils/getAccessoriesIcon';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';
import {StyleSheet} from 'react-native';

import {      
   Container,
   Header,
   CarImagens,
   Details,
   Description,
   Brand,
   Name,
   Rent,
   Period,
   Price,
   About,
   Accessories,
   Footer
} from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../@types/navigation';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

type Props = StackScreenProps<RootStackParamList, 'CarDetails'>;


interface Params {
   car: CarDTO;
}

export function CarDetails({}: Props){ 
   const navigation = useNavigation<Props>();
   const route = useRoute();
   const {car} = route.params as Params;
   const ScrollY = useSharedValue(0);
   const theme = useTheme();

   //ver se o usuario ta usando scroll em y
   const scrollHandle = useAnimatedScrollHandler(event => {
      ScrollY.value = event.contentOffset.y; //salva a posicao do scroll pra saber onde ele ta no scroll
      //console.log(event.contentOffset.y)
   })

   const headerStyleAnimation = useAnimatedStyle(() => {
      return{
         height: interpolate(
            ScrollY.value,
            [0, 200], //200 de altura o heade
            [200, 70], //qnd o valor atingir 200 diminui a altura do cabelhaco ate 70. o interpolete nao diminui de uma vez.
            Extrapolate.CLAMP
         )
      }
   });

   //vai deixando o car invisivel
   const sliderCarsStyleAnimation = useAnimatedStyle(() => {
      return{
         opacity: interpolate(
            ScrollY.value,
            [0, 150],
            [1, 0],
            Extrapolate.CLAMP
         )
      }
   })

   function handleConfirmRental(){
      navigation.navigate('Scheduling', {car})
   }

   function handleBack(){
      navigation.goBack();
   }

     return(
        <Container>
           <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
           
           <Animated.View
             style={[headerStyleAnimation,
               styles.header,
               {backgroundColor: theme.colors.background_secondary}
            ]}
           >

                  <Animated.View style={sliderCarsStyleAnimation}>
                     
                  <Header>
                     <BackButton onPress={handleBack} />
                  </Header>

                    <CarImagens>
                        <ImageSlider
                           imagesUrl={car.photos}
                        />
                       </CarImagens> 
                  </Animated.View>

           </Animated.View>

         <Animated.ScrollView
            contentContainerStyle={{
               paddingHorizontal: 24,
               paddingTop: getStatusBarHeight() + 160,
            }}
            showsVerticalScrollIndicator={false}
            onScroll={scrollHandle}
            scrollEventThrottle={16} //60 frames por segundo.
         >
            <Details>
               <Description>
                  <Brand>{car.brand}</Brand>
                  <Name>{car.name}</Name>
               </Description>

            <Rent>
               <Period>{car.period}</Period>
               <Price>R${car.price}</Price>
            </Rent>
            </Details>

            <Accessories>
               {
                  car.accessories.map(accesory => (
                     <Acessory
                        key={accesory.type}
                        name={accesory.name}
                        icon={getAccessoriesIcon(accesory.type)}
                     />

                  ))

               }

            </Accessories>
         
         <About>
            {car.about}
            {car.about}
            {car.about}
            {car.about}
            {car.about}
            {car.about}
            {car.about}
         </About>

         </Animated.ScrollView>

         <Footer>
            <Button
               title="Escolher periodo do aluguel"
               onPress={handleConfirmRental}
            />
         </Footer>

         </Container>
       )

      } 

      const styles = StyleSheet.create({
         header: {
            position: 'absolute',
            overflow: 'hidden',
            zIndex: 1,
         },
      })
