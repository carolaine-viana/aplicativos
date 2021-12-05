import styled from 'styled-components/native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {FlatList, Pressable} from 'react-native';


export const Container = styled.View` 
    flex: 1;
`;

export const CategoryContainer = styled.View`
    width: 100%;
    margin-top: ${RFValue(24)}px;
    padding-left: 24px;
`;

export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_700};
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.colors.text_title};
    text-transform: uppercase;
    padding: 10px;
`;


export const ContainerSelect = styled.View`
    flex-direction: row;
    padding: 0px 0px 20px 0px;
`;

export const ContainerWichCategory = styled.View` 
    width: 83px;
    height: 83px;
    background-color: blue;
    border-radius: 50;
    margin-left: 10px;
`;

export const Accessories = styled.View`
    width: 100%;
    border-width: 1px;
`;

export const Wrapped = styled(Pressable)`
    
`;


export const Content = styled.ScrollView`
    width: 100%;
`;

export const ImagePost = styled.ImageBackground`
    padding-left: ${RFPercentage(5)};
    margin-bottom: 20px;
`;

export const TitleImage = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(35)}px;
    color: ${({ theme }) => theme.colors.white};
    align-items: center;
    justify-content: flex-end;
`;

export const TitleImageContainer = styled.View`
        flex: 1;
        justify-content: flex-end;
`;

export const CategoriesList = styled(FlatList).attrs({
    contentContainerStyle: {
    },
    showsVerticalScrollIndicator: false
})` 
`;

export const Image = styled.Image`

`;


