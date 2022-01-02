import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 70%;
    padding: 0 24px;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + 115}px;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(40)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.background_primary};
    line-height: ${RFValue(25)}px;
    margin-top: 16px;
`;

export const Form = styled.View`
    width: 100%;
    align-items: center;
`;

export const Footer = styled.View`
    align-items: center;
    margin-top: ${RFValue(50)}px;
`;

export const ContainerTextInferior = styled.View`
    width: 100%;
    height: 50px;
`

export const Text = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.white};
    line-height: ${RFValue(25)}px;
    margin-top: 16px;
`