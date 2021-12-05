import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground` 
    flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
    width: 100%;
    height: 80%;
`;


export const ContainerDescription = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    showsVerticalScrollIndicator: false
})`

`;


export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(22)}px;
    color: ${({ theme }) => theme.colors.background_primary};
`;


export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(22)}px;
    color: ${({ theme }) => theme.colors.background_primary};
`;

export const Footer = styled.View`
    width: 100%;
    align-items: center;
    margin: 10px 0;
`;


