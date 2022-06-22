import React from 'react';
import { TOption } from 'shared/types';
import { OptionItem, Label } from './DefaultSelectOptionSC';

interface OptionItemProps {
  onSelect: (o: TOption) => void;
  option: TOption;
  active?: boolean;
}

const DefaultSelectOption: React.FC<OptionItemProps> = ({ option, onSelect, active }) => (
  <OptionItem onPress={() => onSelect(option)} active={active}>
    <Label variant="body" color="secondary">
      {option.label}
    </Label>
  </OptionItem>
);

export default DefaultSelectOption;
