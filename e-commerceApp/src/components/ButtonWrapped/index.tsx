import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {      
   Container,
   Image,
   Text,
} from './styles';

interface Props extends RectButtonProps {
    data: undefined;
}

export function ButtonWrapped({ data, ...rest }: Props){ 
     return(
        <Container {...rest}>
            <Image
                source={{uri: data.thumbnail}}
                resizeMode="cover"
            />

        <Text>{data.category.type}</Text>
         </Container>
       )
} 
