import React, {useEffect, useState} from 'react';
import {      
   Container,
   Header,
   Title,
   SubTitle,
   Content,
   Appointments,
   AppointmentsTitle,
   AppointmentsQuantity,
   CarWrapper,
   CarFooter,
   CarFooterTitle,
   CarFooterDate,
   CarFooterPeriod,
} from './styles';
import api from '../../services/api';
import { useNavigation, useIsFocused} from '@react-navigation/core';
import { useTheme } from 'styled-components';
import { StatusBar, FlatList } from 'react-native';
import { Car } from '../../components/Car';
import {AntDesign} from '@expo/vector-icons';
import { LoadingAnimation } from '../../components/LoadingAnimation';
import { BackButton } from '../../components/BackButton';
import {Car as ModelCar} from '../../database/model/Car';
import {format, parseISO} from 'date-fns';

type RootStackParamList = {
   goBack(): void;
 };


interface DataProps {
   id: string;
   car: ModelCar;
   start_date: string;
   end_date: string;
}

export function MyCars(){ 
   const [cars, setCars] = useState<DataProps[]>([])
   const [loading, setLoading] = useState(true);
   const navigation = useNavigation<RootStackParamList>();
   const theme = useTheme();
   const screenIsFocus = useIsFocused();


   function handleBack(){
      navigation.goBack();
   }

   useEffect(() => {
      async function fetchCars(){
         try{
            const response = await api.get('/rentals');
            const dataFormatted = response.data.map((data: DataProps) => {
               return{
                  id: data.id,
                  car: data.car,
                  start_date: format(parseISO(data.start_date), 'dd/MM/yyyyy'),
                  end_date: format(parseISO(data.end_date), 'dd/MM/yyyyy'),
               }
            })
            setCars(dataFormatted)
         }catch(error){
            console.log(error)
         }finally{
            setLoading(false)
         }
      }
      fetchCars();
   }, [screenIsFocus])

     return(
        <Container>
           <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
          <Header>
              <BackButton
                onPress={handleBack}
                color={theme.colors.shape}
            />

              <Title>
                Seus agendamentos, {'\n'}
                estão aqui.
              </Title>

              <SubTitle>
                 Conforto, segurança e praticidade.
              </SubTitle>

           </Header>
           {loading ? <LoadingAnimation/> : 
           <Content>
              <Appointments>
               <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
               <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
              </Appointments>

            <FlatList
               data={cars}
               keyExtractor={item => item.id}
               showsVerticalScrollIndicator={false}
               renderItem={({item}) => (
                  <CarWrapper>
                     <Car data={item.car}/>
                     <CarFooter>
                        <CarFooterTitle>Periodo</CarFooterTitle>
                        <CarFooterPeriod>
                           <CarFooterDate>{item.start_date}</CarFooterDate>
                           <AntDesign
                              name="arrowright"
                              size={20}
                              color={theme.colors.title}
                              style={{marginHorizontal: 10}}
                           />
                           <CarFooterDate>{item.end_date}</CarFooterDate>
                        </CarFooterPeriod>
                     </CarFooter>
                  </CarWrapper>
               )

               }
            />

            </Content>
            }
         </Container>
       )
} 
