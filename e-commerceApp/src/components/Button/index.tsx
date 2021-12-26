import React from 'react';
import {      
   Container,
   Title,
} from './styles';

import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { Feather } from '@expo/vector-icons';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
    color?: string;
    onPress: () => void;
    iconName?: React.ComponentProps<typeof Feather>['name'];
}


export function Button({title, color, iconName, testID, onPress, ...rest}: ButtonProps){ 
     return(
        <Container color={color} onPress={onPress} testID={testID} {...rest}>
            <Title color={color}>{title}</Title>
         </Container>
       )
} 
