import React from 'react';
import {      
  HeaderContainer,
    Title,
    ButtonLogout,
} from './styles';
import GroupIcon from "../../assets/svgs/group.svg";
import BagIcon from "../../assets/svgs/bag.svg";
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth'

interface Props {
  onPress?: () => void;
}

export function Header({}: Props){ 
  
  async function handleLogout() {
    await auth().signOut();
    return console.warn('Conta deslogada! ✅ ')
  }
  
  return(
        <HeaderContainer>
          <GroupIcon
            width={RFValue(20)}
            height={RFValue(10)}
          />
          
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
