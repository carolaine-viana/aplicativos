import React from 'react';
import {    
    Scroll,  
   Container,
   Title,
} from './styles';


interface Props {
    title: string;
    color?: string;
    onPress: () => void;
}


export function ButtonFilter({title, color, onPress, ...rest}: Props){ 
     return(
        <Scroll>
            <Container {...rest} color={color} onPress={onPress}>
            <Title color={color}>{title}</Title>
         </Container>
        </Scroll> 
       )
} 
