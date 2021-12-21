import React from 'react' 
import {View, Text, Button} from 'react-native' 
import { TextInput } from 'react-native-gesture-handler'

export function Profile(){ 
     return(
        <View>
           <Text testID='text-title'>Perfil</Text>
           <TextInput
                testID='input-name'
                placeholder="Nome"
                autoCorrect={false}
                value='Rodrigo'
           />
           <TextInput
                testID='input-surname'
                placeholder="Sobrenome"
                value='Goncalves'
           />
           <Button title="salvar" onPress={() => {}}/>
         </View>
       )
} 
