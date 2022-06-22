import React from 'react';
import { BorderRadioButton, RadioButtonButton } from './RadioButtonSC';

interface RadioButtonProps {
  selected?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ selected }) => (
  <BorderRadioButton selected={selected}>
    <RadioButtonButton selected={selected} />
  </BorderRadioButton>
);

export default RadioButton;
