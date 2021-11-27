import React from 'react';
import { StatusBar } from 'react-native';
import {      
   ContainerHome,
   Header,
   HeaderContent,
   TotalCars,
   CarList
} from './styles';
import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/core';

export function Home(){
   const navigation = useNavigation(); 
   const CarDateOne = {
      brand: 'Audi',
      name: 'RS 5 Coupe',
      rent: {
          period: 'Ao dia',
          price: 120,
      },
      thumbnail: 'https://pngimg.com/uploads/audi/audi_PNG99491.png'
   }

   function handleCarDetails(){
      navigation.navigate('CarDetails')
   }

     return(
        <ContainerHome>
           <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
           />

           <Header>

              <HeaderContent>
                  <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                  />
                  <TotalCars>
                     Total de 12 carros
                  </TotalCars>
              </HeaderContent>
              
              </Header>

            <CarList
               data={[1, 2, 3, 4, 5, 6, 7]}
               keyExtractor={item => String(item)}
               renderItem={({item}) => <Car data={CarDateOne} onPress={handleCarDetails}/>}
            />
         </ContainerHome>
       )
} 
