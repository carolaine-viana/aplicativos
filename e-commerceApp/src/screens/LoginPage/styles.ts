import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';


export const Container = styled.View`
    flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
    width: 100%;
    height: 60%;
`;


export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        alignItems: 'center',
    },
    showsVerticalScrollIndicator: false
})`

`;

export const ContainerDescription = styled.View`
    align-items: center;
    justify-content: center;
    height: ${RFPercentage(20)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_700};
    font-size: ${RFValue(23)}px;
    line-height: ${RFValue(23)}px;
    text-transform: uppercase;
    
    `;
export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text_subtitle};
    font-size: ${RFValue(16)}px;
    padding: 0 38px 0px;
    line-height: ${RFValue(23)}px;
 `;


export const Footer = styled.View`
    width: 100%;
    align-items: center;
    padding: ${RFValue(10)}px;
`;

export const ImageContainer = styled.View`
    width: 100%;
    height:  ${RFPercentage(60)};
    align-items: center;
    justify-content: center;
`;




