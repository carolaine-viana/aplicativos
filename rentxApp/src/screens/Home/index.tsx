import React, {useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
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
import {useNetInfo} from '@react-native-community/netinfo';
import {synchronize} from '@nozbe/watermelondb/sync';
import {database} from '../../database';
import {Car as ModelCar} from '../../database/model/Car';

type RootStackParamList = {
   CarDetails: {
    car
  }
 };

type Props = StackNavigationProp<RootStackParamList, 'CarDetails'>;

export function Home(){
   const [cars, setCars] = useState<ModelCar[]>([]);
   const [loading, setLoading] = useState(true)
   const navigation = useNavigation<Props>();
   const netInfo = useNetInfo();

   function handleCarDetails(car: CarDTO){
      navigation.navigate('CarDetails', {car})
   }

   async function offlineSynchronize(){
      await synchronize({
        database,
        pullChanges: async ({ lastPulledAt }) => {
          const response = await api
          .get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);
          
          const { changes, latestVersion } = response.data;
          return { changes, timestamp: latestVersion }
        },
        pushChanges: async ({ changes }) => {
          const user = changes.users;
          await api.post('/users/sync', user);
        },
      });
    }
 

   useEffect(() => {
      let isMounted = true;
      
      async function fetchCars() {
        try {
          const carCollection = database.get<ModelCar>('cars');
          const cars = await carCollection.query().fetch();
          
  
          if(isMounted){
            setCars(cars);
          }
        } catch (error) {
          console.log(error);        
        }finally{
          if(isMounted){
            setLoading(false);
          }
        }
      }
  
      fetchCars();
      return () => {
        isMounted = false;
      };
    },[]);
  
    useEffect(() => {
      if(netInfo.isConnected === true){
        offlineSynchronize();
      }
    },[netInfo.isConnected])
  


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


