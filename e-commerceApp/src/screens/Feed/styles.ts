import styled from 'styled-components/native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View` 
    flex: 1;
`;

export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_700};
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.colors.text_title};
    text-transform: uppercase;
    padding: 10px;
 `;

export const CategoryContainer = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: ${RFValue(10)}px;
    margin-left: 5px;
`;

export const Content = styled.ScrollView`
    width: 100%;
`;

export const ImagePost = styled.ImageBackground`
    padding-left: ${RFPercentage(5)};
    margin-bottom: 20px;
`;


export const TitleImageContainer = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const TitleImage = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(35)}px;
    color: ${({ theme }) => theme.colors.white};
    align-items: center;
    justify-content: flex-end;
`;



