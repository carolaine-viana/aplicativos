import React, { useState, useRef } from 'react';
import { StyleSheet, Animated, Pressable } from 'react-native';
import { Transition, Transitioning, TransitioningView } from 'react-native-reanimated';

import DefaultIcon from '../DefaultIcon/DefaultIcon';

import {
  CardContainer,
  Content,
  BorderContainer,
  IconContainer,
  ChevronIcon,
} from './CardColapseSC';

const transition = (
  <Transition.Together>
    <Transition.In type="scale" />
    <Transition.Change durationMs={400} />
    <Transition.Out type="scale" />
  </Transition.Together>
);

interface CardColapseProps {
  iconInfo?: boolean;
  loadOpened?: boolean;
  renderTitle?: () => React.ReactNode;
  renderContent?: () => React.ReactNode;
  onPressInfo?: () => void;
}

const CardColapse: React.FC<CardColapseProps> = (props) => {
  const { iconInfo, renderTitle, renderContent, loadOpened, onPressInfo } = props;

  const [isOpen, setIsOpen] = useState(!!loadOpened);

  const ref = useRef<TransitioningView>(null);
  const scale = useRef(new Animated.Value(1)).current;

  const animate = () => {
    ref?.current?.animateNextTransition();

    if (!isOpen) {
      setIsOpen((o) => !o);
      setTimeout(() => {
        Animated.timing(scale, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }, 500);
    } else {
      Animated.timing(scale, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start(() => {
        setIsOpen((o) => !o);
      });
    }
  };

  const iconName = isOpen ? 'chevron-up' : 'chevron-down';

  const transitionStyle = {
    opacity: scale,
  };

  return (
    <Transitioning.View transition={transition} ref={ref} style={styles.container}>
      <BorderContainer>
        <CardContainer activeOpacity={1}>
          {iconInfo && (
            <IconContainer onPress={onPressInfo}>
              <DefaultIcon name="info" size={18} color="default" />
            </IconContainer>
          )}
          <Pressable
            onPress={() => {
              animate();
            }}
          >
            {renderTitle?.()}
          </Pressable>

          <Content style={transitionStyle} isOpen={isOpen}>
            {renderContent?.() || props.children}
          </Content>
          <Pressable
            onPress={() => {
              animate();
            }}
          >
            <ChevronIcon name={iconName} size={18} color="primary" />
          </Pressable>
        </CardContainer>
      </BorderContainer>
    </Transitioning.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default CardColapse;
