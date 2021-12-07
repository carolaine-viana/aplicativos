import React, {useEffect, useState} from 'react';
import { StatusBar, StyleSheet, BackHandler} from 'react-native';
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
import {Ionicons} from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Animated, {
   useSharedValue,
   useAnimatedStyle,
   useAnimatedGestureHandler,
   withSpring
} from 'react-native-reanimated';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';
import { LoadingAnimation } from '../../components/LoadingAnimation';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);


export function Home(){
   const [cars, setCars] = useState<CarDTO[]>([]);
   const [loading, setLoading] = useState(true)
   const navigation = useNavigation();
   const theme = useTheme();
   const positionY = useSharedValue(0);
   const positionX = useSharedValue(0);

   const myCarsButtonStyle = useAnimatedStyle(() => {
      return {
         transform: [
            {translateX: positionX.value},
            {translateY: positionY.value}, 
         ]
      }
   })

   const onGestureEvent = useAnimatedGestureHandler({
      onStart(_, ctx: any){ //quando comeca a arrastar
         ctx.positionX = positionX.value; //pega a posicao do arrasta do user
         ctx.positionY = positionY.value; //pega a posicao do arrasta do user
      },
      onActive(event, ctx: any){ //enqnt ta arrastando
         positionX.value = ctx.positionX + event.translationX; //pega a posicao e passa pra ca
         positionY.value = ctx.positionY + event.translationY;
      },
      onEnd(){ //terminou e soltou
         positionX.value = withSpring(0);
         positionY.value = withSpring(0);
      }
   })

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

   useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', () => {
         return true
      }) //observa quando clicar no botao de voltar pelo botao de voltar do android nao faz nada
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


         <PanGestureHandler onGestureEvent={onGestureEvent}>
            
            <Animated.View
               style={[
                  myCarsButtonStyle,
                  {
                     position: 'absolute',
                     bottom: 13,
                     right: 22
                  }
               ]}
            >
               <ButtonAnimated
                  onPress={handleOpenMyCars}
                  style={[styles.button, {backgroundColor: theme.colors.main}]}
               >
                  <Ionicons
                     name="ios-car-sport"
                     size={32}
                     color={theme.colors.shape}
                  />
               </ButtonAnimated>
            </Animated.View>
            </PanGestureHandler>


         </ContainerHome>
       )
} 

const styles = StyleSheet.create({
   button: {
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center'
   }
})
