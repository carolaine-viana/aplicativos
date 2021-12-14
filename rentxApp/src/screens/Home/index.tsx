import React, {useEffect, useState} from 'react';
import { StatusBar} from 'react-native';
import {      
   ContainerHome,
   Header,
   HeaderContent,
   TotalCars,
   CarList,
} from './styles';
import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import {CarDTO} from '../../dtos/CarDTO';
import { LoadingAnimation } from '../../components/LoadingAnimation';


export function Home(){
   const [cars, setCars] = useState<CarDTO[]>([]);
   const [loading, setLoading] = useState(true)
   const navigation = useNavigation();


   function handleCarDetails(car: CarDTO){
      navigation.navigate('CarDetails', {car})
   }

   
   useEffect(() => {
      async function fetchCars(){
         try{
            const response = await api.get('/cars')
            setCars(response.data) 
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

                  {
                     !loading &&
                     <TotalCars>
                        Total de {cars.length}
                     </TotalCars>
                  }


              </HeaderContent>
              
              </Header>
            {loading ? <LoadingAnimation/> :  
               <CarList
                  data={cars}
                  keyExtractor={item => String(item.id)}
                  renderItem={({item}) => <Car data={item} onPress={() => handleCarDetails(item)}/>}
               />
            }


         </ContainerHome>
       )
} 


