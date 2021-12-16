import React, { useEffect, useState } from 'react'
import { View, Text, Alert, Image, Button, Pressable} from 'react-native'
import {
  Container,
  CategoryContainer,
  SubTitle,
  Content,
  ImagePost,
  TitleImageContainer,
  TitleImage,
} from './styles'

import { Header } from '../../components/Header'


import img4 from '../../assets/img4.png'
import img8 from '../../assets/img8.png'

import Jackets from '../../assets/svgs/jackets.svg'
import News from '../../assets/svgs/news.svg'
import Tops from '../../assets/svgs/tops.svg'
import Pants from '../../assets/svgs/pants.svg'

export function Feed({useNavigation}) {
 
  return (
    <Container>
      <Header />
        <SubTitle>Categories</SubTitle>
        <CategoryContainer>
              <Pressable onPress={() => navigation.navigate('FilterClothes')}>
                  <Jackets/>
              </Pressable>

              <Pressable onPress={() => navigation.navigate('FilterClothes')}>
                  <News/>
              </Pressable>

              <Pressable onPress={() => navigation.navigate('FilterClothes')}>
                  <Tops/>
              </Pressable>

              <Pressable onPress={() => navigation.navigate('FilterClothes')}>
                  <Pants/>
              </Pressable>
        </CategoryContainer>

      <Content>
        <SubTitle>Trending collections</SubTitle>
          <ImagePost
            source={img4}
            style={{ height: 400, width: 400 }}
            resizeMode="contain"
          >
          <TitleImageContainer>
            <TitleImage>
              Outwear {'\n'} By Cristian {'\n'} Scarlato
            </TitleImage>
          </TitleImageContainer>
        </ImagePost>

        <ImagePost
          source={img8}
          style={{ height: 400, width: 400 }}
          resizeMode="contain"
        >
        </ImagePost>
      </Content>
    </Container>
  )
}
