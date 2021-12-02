import React from 'react';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {getAccessoriesIcon} from '../../utils/getAccessoriesIcon';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';

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
   About,
   Accessories,
   Footer
} from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../@types/navigation';

type Props = StackScreenProps<RootStackParamList, 'CarDetails'>;


interface Params {
   car: CarDTO;
}

export function CarDetails({}: Props){ 
   const navigation = useNavigation<Props>();
   const route = useRoute();
   const {car} = route.params as Params;

   function handleConfirmRental(){
      navigation.navigate('Scheduling', {car})
   }

   function handleBack(){
      navigation.goBack();
   }


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
                  car.accessories.map(accesory => (
                     <Acessory
                        key={accesory.type}
                        name={accesory.name}
                        icon={getAccessoriesIcon(accesory.type)}
                     />

                  ))

               }

            </Accessories>
         
         <About>
            {car.about}
         </About>

         </Content>

         <Footer>
            <Button
               title="Escolher periodo do aluguel"
               onPress={handleConfirmRental}
            />
         </Footer>

         </Container>
       )
} 
