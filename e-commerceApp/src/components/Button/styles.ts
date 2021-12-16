import styled from 'styled-components/native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends RectButtonProps{
    color: string;
    detail: boolean;
}

interface Text extends TextProps{
    color: string;
}

export const Container = styled(RectButton)<ButtonProps>` 
    height: 60px;
    width: 80%;
    margin-top: 25px;
    background-color: ${({ color, theme }) => color ? color : theme.colors.background_primary};
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: #A1A1A1;
`;

export const Title = styled.Text<Text>` 
    font-size: ${RFValue(13)}px;
    text-transform: uppercase;
    padding: 20px 0px 15px 0px;
    color: ${({ color }) => color ? 'black' : 'white'};
`;

