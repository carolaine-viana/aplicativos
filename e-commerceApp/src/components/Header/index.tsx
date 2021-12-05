import React from 'react';
import {      
  HeaderContainer,
    Title
} from './styles';
import GroupIcon from "../../assets/svgs/group.svg";
import BagIcon from "../../assets/svgs/bag.svg";
import { RFValue } from 'react-native-responsive-fontsize';

export function Header(){ 
     return(
        <HeaderContainer>
          <GroupIcon width={RFValue(20)} height={RFValue(10)} />
          <Title>Basics</Title>

          <BagIcon width={RFValue(24)} height={RFValue(24)} />
      </HeaderContainer>
       )
} 
