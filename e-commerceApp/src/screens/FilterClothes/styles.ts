import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FlatList, Pressable } from 'react-native';


export const Container = styled.View` 
    flex: 1;
`;

export const ContainerSeach = styled.View`
    padding: ${RFValue(20)}px;
`;

export const Input = styled.TextInput`
    border-bottom-width: 1px;

`;

export const SelectCategoriesContainer = styled.View`
    padding: 20px 0px 20px 0px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Button = styled(Pressable)`
    height: ${RFValue(46)}px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.colors.text_subtitle};
    align-items: center;
`
export const Content = styled.ScrollView`
    padding-left: ${RFValue(5)}px;
`;

export const WrappedButton = styled(RectButton)`

`;

export const CardContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: ${RFValue(300)}px;
    flex-wrap: wrap;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
    margin-top: 20px;
`;

export const ContainerInfo = styled.View`
`;

export const ImageCard = styled.Image`
    width: ${RFValue(126)};
    height: ${RFValue(110)};

`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_title};
`;


export const Brand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.colors.light_grey};
`;


export const ContainerSvg = styled.View`
   justify-content: flex-end;
`;


export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.background_primary};
`;

export const ClothesList = styled(FlatList).attrs({
    contentContainerStyle: {
    },
    showsVerticalScrollIndicator: false
})` 
`;

