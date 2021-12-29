import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ImageIndexProps {
    active: boolean;
}

export const Container = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const ImageIndexes = styled.View`
    flex-direction: row;
    align-self: flex-end;
    padding-right: 24px;
    padding: 5px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
    width: 6px;
    height: 6px;
    background-color: ${({theme, active}) => 
    active ? theme.colors.background_primary : theme.colors.background_secondary};
    margin-left: 8px;
    border-radius: 3px;
`;

export const CardImageWrapper = styled.View`
    width: ${Dimensions.get('window').width}px;
    justify-content: center;
    align-items: center;
`;

export const CarImage = styled.Image`
    width: ${RFPercentage(50)};;
    height: ${RFPercentage(50)};
    /* justify-content: center;
    align-items: center; */
`;