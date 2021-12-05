import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import {      
   Container,
   ContainerSeach,
   Input,
   SelectCategoriesContainer,
   Button,
   Text,
   Content,
   CardContainer,
   ContainerInfo,
   ImageCard,
   Title,
   Brand,
   ContainerSvg,
   Price,
   ClothesList,
   WrappedButton
} from './styles';
import HeartSvg from '../../assets/svgs/akar.heart.svg';
import api from '../../services/api';
import { Alert, View } from 'react-native';
import { Load } from '../../components/Load';
import { useNavigation } from '@react-navigation/core';

export function FilterClothes(){ 

  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  function handleConfirm(){
    navigation.navigate('DetailProduct', {
      clothes
    });
  }


useEffect(() => {
    async function fetchClothes(){
      try{
        const response = await api.get('/ecommerce')
        // console.log(response)
        setClothes(response.data)
      }catch(error){
        // console.log(error)
        Alert.alert('nao foi')
      }finally{
        setLoading(false)
     }
    }
    fetchClothes()
}, [])

     return(
        <Container>
           <Header/>

           <ContainerSeach>
               <Input
                placeholder="Search Products"
               />

                <Title>search results for “jackets”</Title>

                {loading ? <Load/> :  
               <ClothesList
                  data={clothes}
                  keyExtractor={item => String(item.id)}
                  renderItem={({item}) => 

                  <WrappedButton onPress={() => navigation.navigate('DetailProduct', {item}) } >
                      <CardContainer>
                          <ImageCard
                              source={{uri: item.figure}}
                              resizeMode="cover"
                            />
                          
                          <ContainerInfo>
                            <Title>{item.name}</Title>
                            <Brand>{item.brand}</Brand>
                            <Price>R${item.price}</Price>

                          </ContainerInfo>
                          
                          <ContainerSvg>
                            <HeartSvg
                            />
                          </ContainerSvg>
                      </CardContainer>
                  </WrappedButton>
                }
               />
              }
            
           </ContainerSeach>
         </Container>
       )
} 
