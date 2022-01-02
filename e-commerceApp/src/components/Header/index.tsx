import React from 'react';
import GroupIcon from "../../assets/svgs/group.svg";
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';
import {      
  HeaderContainer,
    Title,
    ButtonLogout,
} from './styles';

interface Props {
  onPress?: () => void;
}

export function Header({}: Props){ 
  const navigation = useNavigation()
  
  async function handleLogout() {
    await auth().signOut();
    return console.warn('Conta deslogada! ✅ ')
  }
  
  return(
        <HeaderContainer>
          
          <ButtonLogout
            onPress={() => navigation.openDrawer()}
          >
            <GroupIcon
              width={RFValue(20)}
              height={RFValue(10)}
            />

          </ButtonLogout>

          <Title>Basics</Title>

        <ButtonLogout
          onPress={handleLogout}
        >
          <Feather
            name="power"
            size={20}
          />
        </ButtonLogout>
      </HeaderContainer>
       )
} 
