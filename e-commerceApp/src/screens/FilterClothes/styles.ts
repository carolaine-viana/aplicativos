import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FlatList, Pressable } from 'react-native';


export const Container = styled.View` 
    flex: 1;
    padding: ${RFValue(20)}px;
`;

export const ContainerInput = styled.View`
    width: 100%;
    height: ${RFValue(40)}px;;
    padding: ${RFValue(10)}px;;
`;

export const Input = styled.TextInput`
    bottom-width: 1px;
`;


export const ContainerButton = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 0px 10px 20px 10px;
`;

export const ButtonFilter = styled(RectButton)`
    width: ${RFValue(46)}px;
    height: ${RFValue(46)}px;
`;

export const HeaderInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: ${RFValue(10)}px;;
`;

export const ClothesList = styled(FlatList).attrs({
    contentContainerStyle: {
    },
    showsVerticalScrollIndicator: false
})` 
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

export const ImageCard = styled.Image`
    width: ${RFValue(126)};
    height: ${RFValue(110)};

`;

export const ContainerInfo = styled.View`
    
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

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.background_primary};
`;

export const ContainerSvg = styled.View`
   justify-content: flex-end;
`;





