import React from 'react';
import {      
   Container,
   Title,
} from './styles';


interface Props {
    title: string;
    color?: string;
    onPress: () => void;
    iconName?: React.ComponentProps<typeof Feather>['name'];
}

import { Feather } from '@expo/vector-icons';


export function Button({title, color, iconName, onPress, ...rest}: Props){ 
     return(
      <>
        <Container {...rest} color={color} onPress={onPress}>
            <Title color={color}>{title}</Title>
         </Container>
         </>
       )
} 
