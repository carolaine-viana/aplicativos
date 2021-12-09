import React from 'react';
import {      
  HeaderContainer,
    Title
} from './styles';
import GroupIcon from "../../assets/svgs/group.svg";
import BagIcon from "../../assets/svgs/bag.svg";
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Props {
  onPress?: () => void;
}

export function Header(){ 

     return(
        <HeaderContainer>
          <GroupIcon
            width={RFValue(20)}
            height={RFValue(10)}
          />
          
          <Title>Basics</Title>

          <BagIcon
            width={RFValue(24)}
            height={RFValue(24)}
          />
      </HeaderContainer>
       )
} 
