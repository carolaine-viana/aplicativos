import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const HeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${getStatusBarHeight() + 18}px;
    padding: 0px 24px 0px 24px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_700};
    font-size: ${RFValue(16)}px;
    text-transform: uppercase;
`;