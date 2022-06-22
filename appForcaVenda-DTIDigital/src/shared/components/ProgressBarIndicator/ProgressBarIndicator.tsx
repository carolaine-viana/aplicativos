import React from 'react';
import { View } from 'react-native';
import { getIndicatorColor, getPercentageValue } from 'shared/utils';
import { ContainerProgress, ContainerStep } from './ProgressBarIndicatorSC';
import Typography from '../Typography/Typography';
import ProgressBar from '../ProgressBar/ProgressBar';
import { ProgressBarProps } from '../ProgressBar/ProgressBarSC';

interface ProgressBarIndicatorProps {
  label?: string;
  progressbarProps: ProgressBarProps;
  renderLabel?: () => void;
}

const fulfillmentStatus = {
  low: 'red600',
  high: 'yellow400',
  complete: 'green400',
};

const ProgressBarIndicator: React.FC<ProgressBarIndicatorProps> = ({
  renderLabel,
  progressbarProps,
  label,
}) => {
  const { textColor } = getIndicatorColor(progressbarProps.step);
  return (
    <View>
      {renderLabel ? (
        renderLabel()
      ) : (
        <Typography variant="body" color="secondary">
          {label}
        </Typography>
      )}
      <ContainerProgress>
        <ProgressBar {...progressbarProps} />
      </ContainerProgress>
      <ContainerStep>
        <Typography
          variant="overline"
          color={
            progressbarProps?.fulfillment?.[fulfillmentStatus] ||
            progressbarProps?.color ||
            textColor
          }
        >
          {`${getPercentageValue(progressbarProps?.step)}%`}
        </Typography>
      </ContainerStep>
    </View>
  );
};

export default ProgressBarIndicator;
