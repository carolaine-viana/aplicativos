import React from 'react';

import { getMonthYearDescription } from 'shared/utils';
import { IconColors } from '../DefaultIcon/DefaultIcon';
import TouchableButton from '../TouchableButton/TouchableButton';

interface CalendarButtonProps {
  onPress: () => void;
  monthYear: string | Date;
  title?: string;
  iconColor?: IconColors;
}

const CalendarButton: React.FC<CalendarButtonProps> = ({
  onPress,
  monthYear,
  title,
  iconColor = 'link',
}) => (
  <TouchableButton
    onPress={() => onPress()}
    title={title ?? getMonthYearDescription(monthYear)}
    titleVariant="bodyMedium"
    iconProps={{
      side: 'left',
      name: 'calendar',
      size: 24,
      color: iconColor,
    }}
  />
);

export default CalendarButton;
