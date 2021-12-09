import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const ImageContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.ScrollView`
    padding: 20px 10px 20px 10px;
`;

export const WrappedInfo = styled.View`
    
`;

export const ContainerTopInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px 0px 10px;
`;


export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(25)}px;
    line-height: ${RFValue(23)}px;
    padding: ${RFValue(5)}px;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(23)}px;
`;


export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_800};
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(23)}px;
    font-weight: bold;
`;


export const SubText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(23)}px;
`;

export const Footer = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const WrappedButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

