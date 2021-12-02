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
import {CarDTO} from '../../dtos/CarDTO';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../@types/navigation';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import { StatusBar, FlatList } from 'react-native';
import { Car } from '../../components/Car';
import {AntDesign} from '@expo/vector-icons';
import { Load } from '../../components/Load';

type Props = StackScreenProps<RootStackParamList, 'MyCars'>;

interface CarProps {
   id: string;
   user_id: string;
   car: CarDTO;
   startDate: string;
   endDate: string;
}

export function MyCars({}: Props){ 
   const [cars, setCars] = useState<CarProps[]>([])
   const [loading, setLoading] = useState(true);
   const navigation = useNavigation<Props>();
   const theme = useTheme();


   function handleBack(){
      navigation.goBack();
  }

   useEffect(() => {
      async function fetchCars(){
         try{
            const response = await api.get('/schedules_byuser?user_id=1');
            setCars(response.data)
         }catch(error){
            console.log(error)
         }finally{
            setLoading(false)
         }
      }
      fetchCars();
   }, [])

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

              <SubTitle>
                 Conforto, segurança e praticidade.
              </SubTitle>

           </Header>
           {loading ? <Load/> : 
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
                           <CarFooterDate>{item.startDate}</CarFooterDate>
                           <AntDesign
                              name="arrowright"
                              size={20}
                              color={theme.colors.title}
                              style={{marginHorizontal: 10}}
                           />
                           <CarFooterDate>{item.endDate}</CarFooterDate>
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
