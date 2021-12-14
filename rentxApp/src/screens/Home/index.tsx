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
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
   CarDetails: {
    car
  }
 };

type Props = StackNavigationProp<RootStackParamList, 'CarDetails'>;

export function Home(){
   const [cars, setCars] = useState<CarDTO[]>([]);
   const [loading, setLoading] = useState(true)
   const navigation = useNavigation<Props>();


   function handleCarDetails(car: CarDTO){
      navigation.navigate('CarDetails', {car})
   }

   
   useEffect(() => {
      let isMounted = true;

      async function fetchCars(){
         try{
            const response = await api.get('/cars')
            if(isMounted){
               setCars(response.data)
            }
         }catch (error) {
            console.log(error)
         }finally{
            if(isMounted){
               setLoading(false)
            }
         }
      }
      fetchCars()
      return () => {
         isMounted = false;
      }
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


