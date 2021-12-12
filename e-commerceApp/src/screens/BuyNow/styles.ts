import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground` 
    flex: 1;
`;

export const ImageBackground = styled.View`
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
`;

export const ImageCard = styled.Image`
    width: ${RFValue(300)};
    height: ${RFValue(300)};
`;


export const ContainerDescription = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 10px 0px 10px;
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
    margin: 30px 0;
`;

export const ModalView = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.View`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    padding: 20px;
    top: 50%;
    width: ${RFValue(300)}px;
    height: ${RFPercentage(60)};
    /* background-color: red; */
`;

export const CloseContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
`;

export const ContainerCard = styled.View`
    width: 100%;
    align-items: center;
    text-transform: capitalize;
`;

export const ProductContainer = styled.View`
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const ProductImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50;
`;

export const WrappedView = styled.View`
    flex-direction: row;
`;

export const ContainerButton = styled.View`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-radius: 100px;
    flex-direction: row;
    margin-left: 10px;
    background-color: black;
`;

export const TextModal = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(15)}px;
    padding-left: 10px;
`;

export const ContainerTotal = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.line};;
`;

export const TitleModal = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(20)}px;
    padding: 20px;
`;



