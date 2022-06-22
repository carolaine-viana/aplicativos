import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

interface AnimatedViewScaleProps {
  showContent: boolean;
  duration?: number;
  onFinishOpen?: () => void;
  onFinishClose?: () => void;
}

const AnimatedViewScale: React.FC<AnimatedViewScaleProps> = (props) => {
  const { showContent, onFinishOpen, onFinishClose, children } = props;
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (showContent) {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        onFinishOpen?.();
      });
    } else {
      Animated.timing(scale, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        onFinishClose?.();
      });
    }
  }, [showContent, scale, onFinishClose, onFinishOpen]);

  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              scale,
            },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default AnimatedViewScale;
