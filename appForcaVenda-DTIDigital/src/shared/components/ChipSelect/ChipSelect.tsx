/* eslint-disable no-nested-ternary */
import React from 'react';
import { IPalette } from 'shared/types/IThemeInterface';
import Typography from '../Typography/Typography';
import { Container, ContainerEmpty } from './ChipSelectSC';

export interface ChipSelectProps {
  text: string;
  selected?: boolean;
  onPress: () => void;
  activeColor?: keyof IPalette;
  disabled?: boolean | undefined;
}

const ChipSelect: React.FC<ChipSelectProps> = ({
  text,
  selected,
  onPress,
  activeColor,
  disabled,
}) => (
  <>
    {text === 'empty' ? (
      <ContainerEmpty testID={text} />
    ) : (
      <Container
        selected={selected}
        onPress={onPress}
        activeColor={activeColor}
        disabled={disabled}
      >
        <Typography
          variant="overline"
          color={disabled ? 'gray300' : selected ? 'white' : 'blue300'}
          bold={!disabled && selected}
        >
          {text}
        </Typography>
      </Container>
    )}
  </>
);

export default ChipSelect;
