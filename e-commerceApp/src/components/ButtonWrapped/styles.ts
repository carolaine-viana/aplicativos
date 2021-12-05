import styled from 'styled-components/native'
import {FlatList, Pressable} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(Pressable)`

`;

export const Image = styled.Image`
        width: ${RFValue(83)}px;
        height: ${RFValue(83)}px;
`;

export const Text = styled.Text`
    font-size: 30px;
`;

