import React from 'react' 
import { FlatList } from 'react-native';
import {    
    Container,  
    ImageIndexes,
    ImageIndex,
    CardImageWrapper,
    CarImage,
} from './styles';

interface Props {
    imagesUrl: string[];
}

export function ImageSlider({imagesUrl}: Props){ 
     return(
         <Container>
            <ImageIndexes>
                {
                    imagesUrl.map((_, index) => (
                        <ImageIndex
                            key={String(index)}
                            active={true}
                        />
                    ))
                }
            </ImageIndexes>


                    <FlatList
                        data={imagesUrl}
                        keyExtractor={key => key}
                        renderItem={({item}) => (
                            <CardImageWrapper>
                            <CarImage
                                source={{uri: item}}
                                resizeMode="contain"
                            />
                            </CardImageWrapper>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                    

         </Container>
       )
} 
