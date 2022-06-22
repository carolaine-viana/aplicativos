/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

interface RadioButtonProps {
  selected?: boolean;
}

export const BorderRadioButton = styled.View<RadioButtonProps>`
  border-width: 2px;
  border-color: ${({ selected, theme }) =>
    (selected ? theme.palette.blue600 : theme.palette.gray300)};
  border-radius: 50px;
  padding: 4px;
  margin-right: 18px;
`;

export const RadioButtonButton = styled.View<RadioButtonProps>`
  width: 16px;
  height: 16px;
  background-color: ${({ selected, theme }) =>
    (selected ? theme.palette.blue600 : 'transparent')};
  border-radius: 8px;
`;
