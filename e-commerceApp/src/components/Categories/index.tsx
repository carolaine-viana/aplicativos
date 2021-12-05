import React from 'react';
import { SvgProps } from 'react-native-svg';

import {      
   Container,
   Name
} from './styles';

interface Props {
    icon: React.FC<SvgProps>;
}

export function Categories({icon: Icon}: Props){ 
     return(
           <Icon
                width={100}
                height={100}
           />
       )
} 
