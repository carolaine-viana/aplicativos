import React, { useEffect, useState } from "react";
import { View, Text, Alert, Image } from "react-native";
import {
  Container,
  CategoryContainer,
  SubTitle,
  ContainerSelect,
  Content,
  ImagePost,
  TitleImageContainer,
  TitleImage,
  Wrapped,
} from "./styles";


import { Header } from "../../components/Header";

import { useNavigation } from "@react-navigation/core";
import api from '../../services/api';
import { Categories } from "../../components/Categories";

import {img4} from '../../assets/img4.png';
import {img8} from '../../assets/img4.png'


import Jackets from '../../assets/svgs/jackets.svg';
import News from '../../assets/svgs/news.svg';
import Tops from '../../assets/svgs/tops.svg';
import Pants from '../../assets/svgs/pants.svg';


export function Feed() {
  const navigation = useNavigation(); 
  const [clothes, setClothes] = useState([]);
  
  const categoriesList = () => {
    const map = clothes.map(p => p.category[0].type)

    let resu = []

    
    for(let i =0; i<map.length; i++) {
      resu = (map[i])
      
      // console.log(resu)
      
      switch(resu){
        case 'Tops':
          return console.log('oiii')
          case 'Pants':
            console.log('aq')
          return console.log('2222')
      }

    }

  };

useEffect(() => {
    async function fetchClothes(){
      try{
        const response = await api.get('/ecommerce')
        setClothes(response.data)
      }catch(error){
        //console.log(error)
        Alert.alert('nao foi')
      }
    }
    fetchClothes()
}, [])


  return (
    <Container>
      <Header/>
      <CategoryContainer>
        <SubTitle>Categories</SubTitle>

        {/* {
                  clothes.map(accessory => (
                     <Acessory
                        key={accessory.type}
                        name={accessory.name}
                        icon={getAccessoriesIcon(accessory.type)}
                     />

                  ))
               } */}

        <ContainerSelect>

            <Wrapped onPress={() => navigation.navigate('FilterClothes')}>
                {categoriesList()}
            </Wrapped>

        </ContainerSelect>
      </CategoryContainer>

      <Content>
        <SubTitle>Trending collections</SubTitle>
            <ImagePost
                source={img4}
                style={{height: 400, width: 400}}
                resizeMode="contain"
            >   
            <TitleImageContainer>
                <TitleImage>Outwear {'\n'} By Cristian {'\n'} Scarlato</TitleImage>
            </TitleImageContainer>
        </ImagePost>

        <ImagePost
            source={img8}
            style={{height: 400, width: 400}}
            resizeMode="contain"
        >
        </ImagePost>

      </Content>

    </Container>
  );
}
