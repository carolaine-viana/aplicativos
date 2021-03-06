import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import { Container } from './styles';
import { ButtonIcon } from '../ButtonIcon';
import { Input } from '../Input';
import {Alert} from 'react-native';

export function FormBox() {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(0)

  async function handleProductAdd(){
      //por padrao o documento vai ser cadastrado como falso
      //id personalizado = depois do collection coloca .doc('mycustomid').set no lugar do add
      firestore()
      .collection('products')
      .add({
        description,
        quantity,
        done: false,
        createAt: firestore.FieldValue.serverTimestamp() //data de qnd o doc foi criado
      })
      .then(() => {
        Alert.alert('Produto adicionado com sucesso')
      }).catch((error) => console.error(error))
  }
  return (
    <Container>
      <Input
        placeholder="Nome do produto"
        size="medium"
        onChangeText={setDescription}
      />

      <Input
        placeholder="0"
        keyboardType="numeric"
        size="small"
        style={{ marginHorizontal: 8 }}
        onChangeText={value => setQuantity(Number(value))}
      />

      <ButtonIcon
        size='large'
        icon="add-shopping-cart"
        onPress={handleProductAdd}
      />
    </Container>
  );
}
