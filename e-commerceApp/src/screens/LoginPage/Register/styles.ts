import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: ${RFPercentage(80)}px;
    padding: 0 24px;
    background-color: #1D1D1D;
    /* background-color: ${({ theme }) => theme.colors.background_primary}; */
`;

export const Header = styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + 60}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(40)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.white};
    line-height: ${RFValue(25)}px;
    margin-top: 16px;
    margin-bottom: 16px;
`;

export const Footer = styled.View`
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Form = styled.View`
    width: 100%;
    align-items: center;
`;


