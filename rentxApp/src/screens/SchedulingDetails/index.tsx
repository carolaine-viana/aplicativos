import React, { useEffect, useState } from 'react';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {Feather} from '@expo/vector-icons';

import { getAccessoriesIcon } from '../../utils/getAccessoriesIcon';

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
   Accessories,
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
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/core';
import { CarDTO } from '../../dtos/CarDTO';
import { format } from 'date-fns';
import { getPlataformDate } from '../../utils/getPlataformDate';
import api from '../../services/api';
import { Alert } from 'react-native';

interface Params {
   car: CarDTO;
   dates: string[];
}

//interface pra conveter do americano pro BR a data
interface RentalPeriod{
   start: string;
   end: string;
}

export function SchedulingDetails(){ 
   const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
   const theme = useTheme();
   const navigation = useNavigation(); 
   const route = useRoute();
   const {car, dates} = route.params as Params;

   const rentTotal = Number(dates.length * car.rent.price)

    async function handleConfirmRental(){
       const response = await api.get(`/schedules_bycars/${car.id}`); //pegar os agendamentos de um carro epecifico
      
       const unavailable_dates = [
         ...response.data.unavailable_dates,
         ...dates,
       ];

      api.put(`/schedules_bycars/${car.id}`, {
          id: car.id,
          unavailable_dates
       })
       .then(() => navigation.navigate('SchedulingComplete'))  
       .catch(() => Alert.alert('nao foi possivel confirmar o agendamento'))

      }

    function handleBack(){
      navigation.goBack();
   }

   useEffect(() => {
      setRentalPeriod({
         start: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
         end: format(getPlataformDate(new Date(dates[dates.length -1])), 'dd/MM/yyyy'),
      })
   }, [])

   console.log(rentalPeriod)


     return(
        <Container>
           <Header>
              <BackButton onPress={handleBack}/>
           </Header>

         <CarImagens>
            <ImageSlider
                  imagesUrl={car.photos}
            />
         </CarImagens>

         <Content>
            <Details>
               <Description>
                  <Brand>{car.brand}</Brand>
                  <Name>{car.name}</Name>
               </Description>

            <Rent>
               <Period>{car.rent.period}</Period>
               <Price>R$ {car.rent.price}</Price>
            </Rent>
            </Details>

          
            <Accessories>
               {
                  car.accessories.map(accessory => (
                     <Acessory
                        key={accessory.type}
                        name={accessory.name}
                        icon={getAccessoriesIcon(accessory.type)}
                     />

                  ))
               }
            </Accessories>

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
               <DateValue>{rentalPeriod.start}</DateValue>

            </DateInfo>

            <Feather
                  name="chevron-right"
                  size={RFValue(10)}
                  color={theme.colors.text}
               />

            <DateInfo>
               <DateTitle>ATÉ</DateTitle>
               <DateValue>{rentalPeriod.end}</DateValue>
            </DateInfo> 

         </RentalPeriod>

      <RentalPrice>
         <RentalpriceLabel>TOTAL</RentalpriceLabel>
         <RentalPriceDetails>
            <RentalPriceQuota>R$ {car.rent.price} x {dates.length} diarias</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
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
