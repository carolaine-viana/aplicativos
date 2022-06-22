import styled from 'styled-components/native';
import { FlexCenter } from '@shared/components';
import { Pressable } from 'react-native';

export const Container = styled.View`
  background-color: white;
  flex: 1;
`;

export const FileContainer = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const ContainerTitle = styled.View`
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const ContainerCards = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.palette.white};
  margin-top: 46px;
`;

export const CardContent = styled(Pressable)`
  justify-content: center;
  align-items: center;
  height: 140px;
  width: 48%;
  border-radius: 16px;
  margin: 8px 0px;
  background-color: ${(props) => props.theme.palette.blue50};
`;

export const IconCardContainter = styled(FlexCenter)`
  max-height: 54px;
  width: 54px;
  border-radius: 16px;
  margin-bottom: 6px;
  background-color: ${(props) => props.theme.palette.white};
`;
