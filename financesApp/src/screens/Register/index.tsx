import React, { useState, useEffect } from "react";

//components
import { Button } from "../../components/Form/Button";
import { CategoryelectButton } from "../../components/Form/CategoryelectButton";
import { InputForm } from "../../components/Form/InputForm";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelect } from "../CategorySelect";

//bibliotecas
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

//navigation
import { useNavigation } from "@react-navigation/native";

//styles
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um valor numerico")
    .positive("O valor nao pode ser negativo!")
    .required("O valor é obrigatorio"),
});

export function Register() {
  const [transactionType, settransactionType] = useState("");
  const [categoryModalOpen, setcategoryModalOpen] = useState(false);
  const navigation = useNavigation();

  const [category, setcategory] = useState({
    key: "category",
    name: "categoria",
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleTransactionsTypesSelect(type: "positive" | "negative") {
    settransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setcategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setcategoryModalOpen(false);
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) return Alert.alert("selecione o tipo da transacao");

    if (category.key === "category")
      return Alert.alert("selecione a categoria");

    const newTransaction = {
      id: String(uuid.v4()), //salvar o id como string. v4 = devolve um rash
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const dataKey = "@gofinance:transactions";
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dateFormatted = [...currentData, newTransaction];

      //aqui cadastra
      await AsyncStorage.setItem(dataKey, JSON.stringify(dateFormatted));

      //limpa os campos e reseta o obj pro estado inicial
      reset(); //reset do yup
      settransactionType("");
      setcategory({
        key: "category",
        name: "categoria",
      });

      Alert.alert("Enviado com sucesso!");

      navigation.navigate("Listagem");
    } catch (error) {
      console.log(error);
      Alert.alert("nao foi possivel salvar");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

            <TransactionsTypes>
              <TransactionTypeButton
                type="up"
                title="Income"
                onPress={() => handleTransactionsTypesSelect("positive")}
                isActive={transactionType === "positive"}
              />

              <TransactionTypeButton
                type="down"
                title="Outcome"
                onPress={() => handleTransactionsTypesSelect("negative")}
                isActive={transactionType === "negative"}
              />
            </TransactionsTypes>
            <CategoryelectButton
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />
          </Fields>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setcategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
