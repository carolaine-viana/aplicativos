import React, { useState, useRef, useEffect } from 'react';
import { Animated } from 'react-native';

import { Container, ProgressBarProps, ContainerProgress, Progress } from './ProgressBarSC';

const fulfillmentStatus = {
  low: 'red600',
  high: 'yellow400',
  complete: 'green400',
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  steps = 0,
  step = 0,
  height = 16,
  fulfillment,
  color,
}) => {
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 500,
      useNativeDriver: false,
      delay: 300,
    }).start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const stepMax = step > 100 ? 100 : step;
    reactive.setValue(-width + (width * stepMax) / steps);
  }, [step, width, reactive, steps]);

  return (
    <Container>
      <ContainerProgress height={height}>
        <Progress
          color={fulfillmentStatus[fulfillment?.toLowerCase()] || color}
          height={height}
          step={step}
          onLayout={(e) => {
            const newWidth = e.nativeEvent.layout.width;
            setWidth(newWidth);
          }}
          style={{
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        />
      </ContainerProgress>
    </Container>
  );
};

export default ProgressBar;
