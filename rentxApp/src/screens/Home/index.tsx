import React, {useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
import {      
   ContainerHome,
   Header,
   HeaderContent,
   TotalCars,
   CarList,
   MyCarButtons
} from './styles';
import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import {CarDTO} from '../../dtos/CarDTO';
import { Load } from '../../components/Load';
import {Ionicons} from '@expo/vector-icons';
import { useTheme } from 'styled-components';


export function Home(){
   const [cars, setCars] = useState<CarDTO[]>([]);
   const [loading, setLoading] = useState(true)
   const navigation = useNavigation();
   const theme = useTheme();


   function handleCarDetails(car: CarDTO){
      navigation.navigate('CarDetails', {car})
   }

   function handleOpenMyCars(){
      navigation.navigate('MyCars')
   }

   useEffect(() => {
      async function fetchCars(){
         try{
            const response = await api.get('/cars')
            setCars(response.data) 
           // Alert.alert('feito com sucesso')
         }catch (error) {
            console.log(error);
         }finally{
            setLoading(false)
         }
      }
      fetchCars();
   }, [])

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
            {loading ? <Load/> :  
               <CarList
                  data={cars}
                  keyExtractor={item => String(item.id)}
                  renderItem={({item}) => <Car data={item} onPress={() => handleCarDetails(item)}/>}
               />
            }

            <MyCarButtons
               onPress={handleOpenMyCars}
            >
               <Ionicons
                  name="ios-car-sport"
                  size={32}
                  color={theme.colors.shape}
               />
            </MyCarButtons>

         </ContainerHome>
       )
} 
