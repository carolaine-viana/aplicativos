import React, { useState } from 'react'
import { Header } from '../../components/Header';
import {Alert} from 'react-native';
import {
  ImageBackground,
  ContainerDescription,
  Title,
  Price,
  Footer,
  ImageCard,
  ModalView,
  ModalContainer,
  CloseContainer,
  ContainerCard,
  ProductContainer,
  ProductImage,
  WrappedView,
  ContainerButton,
  TitleModal,
  ContainerTotal,
  TextModal,
} from './styles'
import { Button as ButtonConfirm } from '../../components/Button'
import {Modal, View, Pressable, Button} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';


export function BuyNow({route, navigation}) {
  const { item } = route.params;
  const [quantidade, setQuantidade] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  function handleMax(){
    const max = quantidade + 1;
    setQuantidade(max)
  }
  
  function handleMin(){
    const min = quantidade - 1;
    if(min > 0){
      setQuantidade(min)
    }else{
      return 0;
    }

  }

  const calc = Number(item.price * quantidade).toFixed(2);

 
  return (
    <>
      <Header />

      <BackButton onPress={() => navigation.goBack()}/>

      <ImageBackground>
        <ImageCard source={item.photos} />
      </ImageBackground>

      <ContainerDescription>
        <Title>Crew Neck T-shirt</Title>
        <Price>$79.90</Price>
      </ContainerDescription>

      <ModalView >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
        <View style={{alignItems: 'center'}}>

        <ModalContainer>

          <CloseContainer>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <EvilIcons
                name="close-o"
                size={30}
              />
            </Pressable>
          </CloseContainer>

          <ContainerCard>
            <Title>Cart</Title>

            <ProductContainer>
              <WrappedView>
                <ProductImage
                  source={{uri: item.figure}}
                />

                  <TextModal>Preço: R$ {item.price}{'\n'}Quantidade: {quantidade}</TextModal>
                
                <ContainerButton>
                    <Button title="+" onPress={handleMax} color="white"/>
                    <Button title="-" onPress={handleMin} color="white"/>
                </ContainerButton>
               
              </WrappedView>

                  
              <ContainerTotal>
                <TitleModal>Total:</TitleModal>
                <TitleModal>R$ {calc}</TitleModal>
              </ContainerTotal>

            </ProductContainer>

          </ContainerCard>

              <Footer>
                <ButtonConfirm
                  title="confirmar"
                  onPress={() => Alert.alert('Pedido feito! ✅ ')}
                />
              </Footer>

        </ModalContainer>
        </View>

      </Modal>
     
    </ModalView>


      <Footer>
        {
        modalVisible ? null: 
        (
          <ButtonConfirm
            testId="click-test"
            title="Buy now"
            onPress={() => setModalVisible(true)}
          /> 
        )
      }
      </Footer>
    </>
  )
}
