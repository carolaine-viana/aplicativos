import { RFValue } from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';


export const Container = styled.View`
    flex-direction: row;
`;

export const IconContainer = styled.View`
    height: 56px;
    width: 55px;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    margin-left: 2px;
    /* background-color: ${({ theme }) => theme.colors.line}; */
    background-color: #262626;
`;

export const InputText = styled.TextInput`
    flex: 1;
    /* background-color: ${({ theme }) => theme.colors.background_secondary}; */
    /* color: ${({ theme }) => theme.colors.background_primary}; */
    color: #676767;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    padding: 0 23px;
    margin-left: 5px;
    background-color: #262626;

`;

