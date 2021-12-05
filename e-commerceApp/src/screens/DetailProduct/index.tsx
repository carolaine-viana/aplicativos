import React from 'react'
import {
  ImageContainer,
  ImageBackground,
  Content,
  ContainerTopInfo,
  Title,
  Price,
  Text,
  SubText,
  Footer,
  WrappedButton,
  WrappedInfo,
  Image,
} from './styles'
import { ButtonDetail } from '../../components/ButtonDetail'
import { useNavigation, useRoute } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native'

export function DetailProduct() {
  const route = useRoute()
  const { item } = route.params
  const navigation = useNavigation()

  return (
    <>
      <ImageContainer>
        <Image source={{ uri: item.figure }} resizeMode="contain" />
      </ImageContainer>

      <ContainerTopInfo>
        <Title>{item.name}</Title>
        <Price>${item.price}</Price>
      </ContainerTopInfo>

      <Content>
        <WrappedInfo>
          <Text>DESCRIPTION</Text>
          <SubText>
            Straight cut shirt jacket in sturdy, washed denim. Features a
            pointed collar and buttons down the front. Dropped shoulders and
            long sleeves with button cuffs. Detachable tie belt at the waist and
            a rounded hem.
          </SubText>
        </WrappedInfo>
      </Content>

      <Footer>
        <WrappedButton>
          <ButtonDetail title="wishlist" color="white" type="HeartButton" />

          <ButtonDetail
            title="Add to bag"
            onPress={() => navigation.navigate('BuyNow')}
          />
        </WrappedButton>
      </Footer>
    </>
  )
}
