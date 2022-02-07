import React from "react";
import { Image, Pressable } from "react-native";
import {
  Container,
  CategoryContainer,
  SubTitle,
  Content,
  ImagePost,
  TitleImageContainer,
  TitleImage,
} from "./styles";

import { Header } from "../../components/Header";
import category from "../../services/server.json";

import img4 from "../../assets/img4.png";
import img8 from "../../assets/img8.png";
import top from "../../assets/tops.png";
import jackets from "../../assets/jackets.png";
import pants from "../../assets/pants.png";
import newC from "../../assets/new.png";


import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export function Feed() {
  const navigation = useNavigation();
  const getCategory = category.ecommerce.filter((p) => p.category.type);

  const uniqueObj = getCategory.filter((value, index, self) =>  
    index === self.findIndex((x) => x.category.type === value.category.type)
  );

  function getAccessoriesIcon(type: string) {
    switch (type) {
      case "Jackets":
        return jackets;
      case "Tops":
        return top;
      case "Pants":
        return pants;
      default:
        return newC;
    }
  }

  return (
    <Container>
      <Header />
      <SubTitle>Categories</SubTitle>
      <CategoryContainer>
        {uniqueObj.map((p) => (
          <ScrollView>
            <Pressable onPress={() => navigation.navigate('FilterClothes')}>
              <Image
                source={getAccessoriesIcon(p.category.type)}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                  marginLeft: 10,
                }}
              />
            </Pressable>
          </ScrollView>
        ))}
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
              Outwear {"\n"} By Cristian {"\n"} Scarlato
            </TitleImage>
          </TitleImageContainer>
        </ImagePost>

        <ImagePost
          source={img8}
          style={{ height: 400, width: 400 }}
          resizeMode="contain"
        ></ImagePost>
      </Content>
    </Container>
  );
}
