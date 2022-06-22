import React from 'react';
import { View } from 'react-native';
import { FlexStart, Typography, ProgressBarIndicator } from 'shared/components';
import { IIncentivePerformanceIndicator } from 'shared/types';
import { IncentiveListItem, IncentiveListItemData } from './IncentivesPerformanceSC';
import { formatValue, getProgressColor } from '../incentivesUtils';

interface IncentiveIndicatorProps {
  indicator: IIncentivePerformanceIndicator;
}

const IncentiveIndicator: React.FC<IncentiveIndicatorProps> = ({ indicator }) => {
  const isGapPositive = indicator?.indicatorGap > 0;

  return (
    <IncentiveListItem>
      <FlexStart>
        <Typography
          variant="overlineMedium"
          color="primary"
          uppercase
          bold
          fallbackText="-"
          size={12}
        >
          {indicator?.indicatorName}
        </Typography>
      </FlexStart>
      <IncentiveListItemData>
        <View>
          <Typography variant="overlineMedium" color="gray600" uppercase>
            Objetivo
          </Typography>
          <Typography variant="overlineMedium" color="gray600" uppercase bold fallbackText="-">
            {formatValue(indicator?.indicatorForecast, indicator?.indicatorType)}
          </Typography>
        </View>
        <View>
          <Typography variant="overlineMedium" color="gray600" uppercase>
            Classific.
          </Typography>
          <Typography variant="overlineMedium" color="gray600" uppercase bold fallbackText="-">
            {indicator?.classification}
          </Typography>
        </View>
        <View>
          <Typography variant="overlineMedium" color="gray600" uppercase>
            Realizado
          </Typography>
          <Typography variant="overlineMedium" color="gray600" uppercase bold fallbackText="-">
            {formatValue(indicator?.indicatorResult, indicator?.indicatorType)}
          </Typography>
        </View>
        <View>
          <Typography variant="overlineMedium" color="gray600" uppercase>
            {`${isGapPositive ? 'Superávit' : 'Gap'}   `}
          </Typography>
          <Typography
            variant="overlineMedium"
            color={isGapPositive ? 'green400' : 'red600'}
            uppercase
            bold
            fallbackText="-"
          >
            {formatValue(indicator?.indicatorGap, indicator?.indicatorType)}
          </Typography>
        </View>
      </IncentiveListItemData>
      <ProgressBarIndicator
        progressbarProps={{
          step: indicator?.indicatorPercentage,
          steps: 100,
          color: getProgressColor(indicator?.indicatorFulfillment),
          fulfillment: indicator?.indicatorFulfillment,
        }}
        label=""
      />
    </IncentiveListItem>
  );
};

export default IncentiveIndicator;
