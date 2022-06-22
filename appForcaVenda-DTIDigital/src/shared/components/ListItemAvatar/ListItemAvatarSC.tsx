import styled from 'styled-components/native';
import { FlexBox } from '../FlexBox/FlexBox';

const PaperWrapper = styled.View`
  margin-bottom: 16px;
  align-items: center;
`;

const CardContainer = styled.Pressable<{ height: number }>`
  height: ${(props) => props.height}px;
  width: 100%;
  padding: 16px;
`;

const ItemContainer = styled(FlexBox)`
  flex-direction: row;
`;

export const TextContainer = styled.View`
  width: 100%;
`;

export { PaperWrapper, CardContainer, ItemContainer };
