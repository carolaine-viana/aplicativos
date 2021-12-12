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

export const WrappedButton = styled.View<ButtonProps>`
    flex: 1;
    padding: 0px 10px 10px 10px;
`

export const Container = styled(RectButton)<ButtonProps>` 
    width: 100%;
    height: ${RFValue(50)}px;;
    margin-top: 25px;
    background-color: ${({ color, theme }) => color ? color : theme.colors.background_primary};
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: #A1A1A1;
    justify-content: center;
`;

export const Title = styled.Text<Text>` 
    font-size: ${RFValue(13)}px;
    text-transform: uppercase;
    padding: 20px 0px 15px 0px;
    color: ${({ color, theme }) => color ? 'black' : 'white'};
`;

export const ButtonWrapped = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerIcon = styled.View`
    justify-content: center;
    align-items: center;
`;


