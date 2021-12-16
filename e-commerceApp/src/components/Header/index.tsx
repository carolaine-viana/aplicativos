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
import { Auth } from 'aws-amplify';


interface Props {
  onPress?: () => void;
}

export function Header({}: Props){ 
  
  async function signOut() {
      try {
          await Auth.signOut();
      } catch (error) {
          console.log('error signing out: ', error);
      }
  }
  
  return(
        <HeaderContainer>
          <GroupIcon
            width={RFValue(20)}
            height={RFValue(10)}
          />
          
          <Title>Basics</Title>

        <ButtonLogout
          onPress={signOut}
        >
          <Feather
            name="power"
            size={20}
          />
        </ButtonLogout>
      </HeaderContainer>
       )
} 
