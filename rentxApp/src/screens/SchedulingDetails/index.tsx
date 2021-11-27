import React from 'react';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {Feather} from '@expo/vector-icons';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {      
   Container,
   Header,
   CarImagens,
   Content,
   Details,
   Description,
   Brand,
   Name,
   Rent,
   Period,
   Price,
   Acessories,
   Footer,
   RentalPeriod,
   CalendarIcon,
   DateInfo,
   DateTitle,
   DateValue,
   RentalPrice,
   RentalpriceLabel,
   RentalPriceDetails,
   RentalPriceQuota,
   RentalPriceTotal,
} from './styles';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';


export function SchedulingDetails(){ 
   const theme = useTheme();
   const navigation = useNavigation(); 

    function handleConfirmRental(){
        navigation.navigate('SchedulingComplete')
    }

     return(
        <Container>
           <Header>
              <BackButton onPress={() => null}/>
           </Header>

         <CarImagens>
            <ImageSlider
                  imagesUrl={['https://pngimg.com/uploads/audi/audi_PNG99491.png']}
            />
         </CarImagens>

         <Content>
            <Details>
               <Description>
                  <Brand>Lamborghini</Brand>
                  <Name>Hurracan</Name>
               </Description>

            <Rent>
               <Period>Ao dia</Period>
               <Price>R$ 580</Price>
            </Rent>
            </Details>

            <Acessories>
               <Acessory name="380Km/h" icon={SpeedSvg} />
               <Acessory name="3.2s" icon={AccelerationSvg} />
               <Acessory name="800 HP" icon={ForceSvg} />
               <Acessory name="Gasolina" icon={GasolineSvg} />
               <Acessory name="Auto" icon={ExchangeSvg} />
               <Acessory name="2 pessoas" icon={PeopleSvg} />
            </Acessories>

         <RentalPeriod>
            <CalendarIcon>
               <Feather
                  name="calendar"
                  size={RFValue(24)}
                  color={theme.colors.shape}
               />
            </CalendarIcon>
            <DateInfo>
               <DateTitle>DE</DateTitle>
               <DateValue>18/06/2021</DateValue>

            </DateInfo>

            <Feather
                  name="chevron-right"
                  size={RFValue(10)}
                  color={theme.colors.text}
               />

         </RentalPeriod>

      <RentalPrice>
         <RentalpriceLabel>TOTAL</RentalpriceLabel>
         <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x 3 diarias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
         </RentalPriceDetails>
      </RentalPrice>

         </Content>

         <Footer>
            <Button
               title="Alugar agora"
               color={theme.colors.sucess}
               onPress={handleConfirmRental}
            />
         </Footer>

         </Container>
       )
} 
