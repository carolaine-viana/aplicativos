import React from 'react';

import { Typography } from 'shared/components';
import { isValidValue } from 'shared/utils';

import { RowContent } from './PerformanceSC';

interface IndicatorLabelValueProps {
  label: string;
  labelVariant?: string;
  value?: any;
  valueVariant?: any;
}

const IndicatorLabelValue: React.FC<IndicatorLabelValueProps> = ({
  label,
  value,
  labelVariant = 'overlineMedium',
  valueVariant = 'overlineSmall',
}) => {
  if (isValidValue(value)) {
    return (
      <RowContent>
        <Typography variant={labelVariant} color="gray300">
          {label}
        </Typography>
        <Typography variant={valueVariant} color="primary" bold>
          {value}
        </Typography>
      </RowContent>
    );
  }
  return null;
};

export default IndicatorLabelValue;
