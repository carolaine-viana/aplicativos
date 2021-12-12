import React, { useState, useRef } from 'react' 
import { FlatList, ViewToken} from 'react-native';
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

interface ChanceImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({imagesUrl}: Props) {
    const [imageIndex, setImageindex] = useState(0);

    const indexChanged = useRef((info: ChanceImageProps) =>{
        const index = info.viewableItems[0].index!; 
        setImageindex(index)
    })

     return(
        <Container>
        <ImageIndexes>
            {
                imagesUrl.map((_, index) => (
                    <ImageIndex
                        key={String(index)}
                        active={index === imageIndex}
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
                    onViewableItemsChanged={indexChanged.current}
                />
                

     </Container>
       )
} 