import React from 'react'; 
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

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
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/core';

export function Scheduling(){ 
    const theme = useTheme();
    const navigation = useNavigation(); 


    function handleConfirmRental(){
        navigation.navigate('SchedulingDetails')
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
                onPress={() => null}
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
                      <DateValue selected={false}>18/06/2021</DateValue>
                  </DateInfo>
                  <ArrowSvg/>

                  <DateInfo>
                      <DateTitle>DE</DateTitle>
                      <DateValue selected={false}>18/06/2021</DateValue>
                  </DateInfo>
              </RentalPeriod>

           </Header>

           <Content>
               <Calendar/>
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
