import React, { useContext } from 'react'
import {
  Container,
  ImageContainer,
  Content,
  ContainerTopInfo,
  Title,
  Price,
  Text,
  SubText,
  Footer,
  WrappedButton,
  WrappedInfo,
} from './styles'
import { ButtonDetail } from '../../components/ButtonDetail'
import { useRoute } from '@react-navigation/core'
import { ImageSlider } from '../../components/ImageSlider'
import { Header } from '../../components/Header'
import { BackButton } from '../../components/BackButton';
import { useNavigation } from '@react-navigation/core'


export function DetailProduct() {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  return (
    <Container>
      <Header/>

      <BackButton onPress={() => navigation.goBack()}/>

      <ImageContainer>
        <ImageSlider
          imagesUrl={item.photos}
      />
      </ImageContainer>

      <ContainerTopInfo>
        <Title>{item.name}</Title>
        <Price>${item.price}</Price>
      </ContainerTopInfo>

      <Content>
          <Text>DESCRIPTION</Text>
          <SubText>
            Straight cut shirt jacket in sturdy, washed denim. Features a
            pointed collar and buttons down the front. Dropped shoulders and
            long sleeves with button cuffs. Detachable tie belt at the waist and
            a rounded hem.
          </SubText>
      </Content>

      <Footer>
          <ButtonDetail
            title="wishlist"
            color="white"
            type="HeartButton"
          />

          <ButtonDetail
            title="Add to bag"
            onPress={() => navigation.navigate('BuyNow', {item})}
          />
      </Footer>

    </Container>
  )
}
