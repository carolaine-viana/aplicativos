import { Animated, LayoutRectangle } from 'react-native';
import styled from 'styled-components/native';

export const SelectContainer = styled.View`
  padding: 24px 16px 2px 16px;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const SelectContent = styled.View`
  justify-content: space-between;
  padding: 26px 18px 26px 16px;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const DropDownContainer = styled(Animated.View)<{
  layout: LayoutRectangle;
  isOpen: boolean;
}>`
  position: absolute;
  top: ${({ layout }) => 104 + layout.y}px;
  width: ${({ layout }) => layout.width}px;
  elevation: ${({ isOpen }) => (isOpen ? 5 : 0)};
  z-index: ${({ isOpen }) => (isOpen ? 5 : 0)};

  align-items: center;
`;

export const DropDownContent = styled.View`
  position: absolute;
  width: 90%;
  /* border-radius: 16px; */
  elevation: 5;
  z-index: 3;
  background-color: ${({ theme }) => theme.palette.white};
`;
