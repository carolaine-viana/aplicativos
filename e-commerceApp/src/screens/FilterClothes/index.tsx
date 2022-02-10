import React, { useEffect, useState, useContext } from "react";
import { Header } from "../../components/Header";
import {
  Container,
  ContainerInput,
  Input,
  CardContainer,
  ContainerInfo,
  ImageCard,
  Title,
  Brand,
  ContainerSvg,
  Price,
  ClothesList,
  WrappedButton,
  HeaderInfo,
  ContainerButton,
} from "./styles";
import HeartSvg from "../../assets/svgs/akar.heart.svg";
import api from "../../services/api";
import { Alert } from "react-native";
import { Load } from "../../components/Load";
import { ButtonFilter } from "../../components/ButtonFilter";
import { BackButton } from "../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { ClothesDTO } from "../../dtos/ClothesDTO";
import clothesObj from '../../services/server.json';

interface Params {
  clothes: ClothesDTO;
}

interface Data {
  id: string;
  name: string;
  brand: string;
  price: string;
  figure: string;
  category: category;
}

interface category {
  name: string;
  type: string;
}

export function FilterClothes() {
  const [clothes, setClothes] = useState<ClothesDTO[]>([] as ClothesDTO);
  const [loading, setLoading] = useState(true);
  const [searchText, setsearchText] = useState("");
  const [filteredClothes, setFilteredClothes] = useState<Data[]>([]);
  const navigation = useNavigation();


  useEffect(() => {
    async function fetchClothes() {
      try {
        const response = await api.get("/ecommerce");
        setClothes(response.data);
        setFilteredClothes(response.data);
      } catch (error: any) {
        Alert.alert("nao foi");
        console.warn(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchClothes();
  }, []);

  function handleFilterClothes(text = "") {
    setsearchText(text);

    if (!text) {
      setFilteredClothes(clothes);
      return;
    }

    const filtro = clothes.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredClothes(filtro);
  }

  function handleCategoryFilter(Title: string) {
    const filtro = clothes.filter((item) => item.category.type === Title);
    setFilteredClothes(filtro);
  }

  const handleFilterAll = () => setFilteredClothes(clothes);


  return (
    <Container>
      <Header />

      <BackButton onPress={() => navigation.goBack()} />

      <ContainerInput>
        <Input
          placeholder="SEARCH PRODUCTS"
          placeholderTextColor="black"
          value={searchText}
          onChangeText={handleFilterClothes}
        />
      </ContainerInput>

      <ContainerButton>
        <ButtonFilter
          title="All"
          color="white"
          onPress={() => handleFilterAll()}
        />

        <ButtonFilter
          title="Tops"
          color="white"
          onPress={() => handleCategoryFilter("Tops")}
        />

        <ButtonFilter
          title="Pants"
          color="white"
          onPress={() => handleCategoryFilter("Pants")}
        />

        <ButtonFilter
          title="Jackets"
          color="white"
          onPress={() => handleCategoryFilter("Jackets")}
        />
      </ContainerButton>

      <HeaderInfo>
        {!!searchText && <Title>search results for: {searchText}</Title>}

        <Title>Results {filteredClothes.length}</Title>
      </HeaderInfo>

      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={filteredClothes}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <WrappedButton
              onPress={() => navigation.navigate("DetailProduct", { item })}
            >
              <CardContainer>
                <ImageCard source={{ uri: item.figure }} resizeMode="cover" />

                <ContainerInfo>
                  <Title>{item.name}</Title>
                  <Brand>{item.brand}</Brand>
                  <Price>R${item.price}</Price>
                </ContainerInfo>

                {/* <ContainerSvg>
                    <HeartSvg />
                  </ContainerSvg> */}
              </CardContainer>
            </WrappedButton>
          )}
        />
      )}
    </Container>
  );
}
