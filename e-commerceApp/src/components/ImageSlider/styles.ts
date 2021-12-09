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
    padding: 50px;
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
    height: ${RFPercentage(50)};
    justify-content: center;
    align-items: center;
`;

export const CarImage = styled.Image`
    width: 500px;
    height: 500px;
    justify-content: center;
    align-items: center;
`;