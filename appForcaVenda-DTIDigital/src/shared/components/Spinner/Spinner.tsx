import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { IPalette } from 'shared/types/IThemeInterface';
import theme from '../../constants/theme';
import { FeedbackText } from './SpinnerSC';

export interface SpinnerProps extends ActivityIndicatorProps {
  color?: 'primary' | 'secondary' | 'light';
  text?: string;
  textColor?: keyof IPalette;
}

const Spinner: React.FC<SpinnerProps> = (props) => {
  const { color = 'primary', text, textColor } = props;

  return (
    <>
      <ActivityIndicator {...props} color={theme.palette.spinner[color]} />
      {text && (
        <FeedbackText variant="body" color={textColor || 'default'}>
          {text}
        </FeedbackText>
      )}
    </>
  );
};

export default Spinner;
