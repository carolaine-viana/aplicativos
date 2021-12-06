import styled from 'styled-components/native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Scroll = styled.ScrollView`
`;

export const Container = styled(RectButton)`
    height: ${RFValue(46)}px;
    margin-top: 25px;
    background-color: ${({ color, theme }) => color ? color : theme.colors.background_primary};
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: #A1A1A1;
    margin-left: 5px;
`;

export const Title = styled.Text<Text>` 
    font-size: ${RFValue(12)}px;
    text-transform: uppercase;
    padding: 20px 0px 15px 0px;
    color: ${({ color, theme }) => color ? 'black' : 'white'};
    align-items: center;
    padding: 10px;
`;
