import React, { useState } from 'react'; 
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { format } from 'date-fns';

import ArrowSvg from '../../assets/arrow.svg';

import {      
   Container,
   Header,
   Title,
   RentalPeriod,
   DateInfo,
   DateTitle,
   DateValue,
   Content,
   Footer
} from './styles'; 
import { Alert, StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarkedDateProps} from '../../components/Calendar';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { getPlataformDate } from '../../utils/getPlataformDate';
import { CarDTO } from '../../dtos/CarDTO';
import { RootStackParamList } from '../../@types/navigation';
import { StackScreenProps } from '@react-navigation/stack';


type Props = StackScreenProps<RootStackParamList, 'Scheduling'>;

interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;
}

interface Params {
    car: CarDTO;
 }

export function Scheduling({}: Props){ 
    const [lastSelectedDate, setlastSelectedDate] = useState<DayProps>({} as DayProps); //ultima data selecionada
    const [markedDates, setmarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const theme = useTheme();
    const navigation = useNavigation<Props>();
    
    const route = useRoute();
    const {car} = route.params as Params;


    function handleConfirmRental(){
        if(!rentalPeriod.startFormatted || !rentalPeriod.endFormatted){
            Alert.alert('selecione o intervalo para alugar.')
        }else{
            navigation.navigate('SchedulingDetails', {
                car,
                dates: Object.keys(markedDates)
            });
        }
    }

    function handleBack(){
        navigation.goBack();
    }

    function handleChangeDate(date: DayProps){
        //na primeira vez que o usuario clicar na data, tanto a final quanto a inicial vai ser a mesma data
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate; //nao tem uma data final selecionada ele coloca a mesma do inicio
        let end = date;

    //se ele seleciona 20 e dps 16, o 16 vai ser o primeiro e depois o 20. menor para o maior.
        if(start.timestamp > end.timestamp){
            start = end;
            end = start;
        }

        setlastSelectedDate(end); //passar sempre a ultima data selecionada
        //criar uma funcao para gerar o intervalo 
        const interval = generateInterval(start, end);
        setmarkedDates(interval);

        const firstDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1]; //vector por isso desconta o -1
        
        setRentalPeriod({
           startFormatted: format(getPlataformDate(new Date(firstDate)), 'dd/MM/yyyy'),
           endFormatted: format(getPlataformDate(new Date(endDate)), 'dd/MM/yyyy'),
        })
    }

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
                Escolha uma {'\n'}
                data de início e {'\n'}
                fim do aluguel
              </Title>

              <RentalPeriod>
                  <DateInfo>
                      <DateTitle>DE</DateTitle>
                      <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
                  </DateInfo>
                  <ArrowSvg/>

                  <DateInfo>
                      <DateTitle>DE</DateTitle>
                      <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
                  </DateInfo>
              </RentalPeriod>

           </Header>

           <Content>
               <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
               />
            </Content>
            
               <Footer>
                   <Button
                        title="confirmar"
                        onPress={handleConfirmRental}
                   />
               </Footer>


         </Container>
       )
} 
