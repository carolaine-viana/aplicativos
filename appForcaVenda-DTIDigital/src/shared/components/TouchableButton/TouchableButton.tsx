import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

import Typography from '@shared/components/Typography/Typography';
import theme from 'shared/constants/theme';
import { TypographySCProps } from '../Typography/TypographySC';
import DefaultIcon, { DefaultIconProps } from '../DefaultIcon/DefaultIcon';

interface IButtonIcon extends DefaultIconProps {
  side: 'left' | 'right';
}
interface ITouchableButtonProps extends TouchableOpacityProps {
  color?: 'primary' | 'secondary' | 'light' | 'delete';
  disabled?: boolean;
  width?: string;
  title: string;
  titleVariant?: keyof typeof theme.typography;
  typographyProps?: TypographySCProps;
  iconProps?: IButtonIcon | null;
  height?: string;
}

const TouchableButtonSC = styled.TouchableOpacity<ITouchableButtonProps>`
  ${({ disabled, color = 'primary', width, height }) => ({
    'background-color': disabled ? theme.palette.gray200 : theme.palette.button[color],
    'align-items': 'center',
    'justify-content': 'center',
    'padding-top': '10px',
    'padding-bottom': '10px',
    'border-radius': '4px',
    'flex-direction': 'row',
    width,
    height,
  })}
`;

const TitleContainer = styled.View`
  margin: 0 16px;
`;

const TouchableButton = (props: ITouchableButtonProps) => {
  const { iconProps, titleVariant } = props;

  return (
    <TouchableButtonSC {...props}>
      {iconProps?.side === 'left' && <DefaultIcon {...iconProps} />}
      <TitleContainer>
        <Typography variant={titleVariant} color="light" {...props.typographyProps} align="center">
          {props.title}
        </Typography>
      </TitleContainer>
      {iconProps?.side === 'right' && <DefaultIcon {...iconProps} />}
    </TouchableButtonSC>
  );
};

TouchableButton.defaultProps = {
  color: 'primary',
  disabled: false,
  width: '100%',
  typographyProps: {},
  iconProps: null,
  height: 48,
  titleVariant: 'button',
};

export default TouchableButton;
