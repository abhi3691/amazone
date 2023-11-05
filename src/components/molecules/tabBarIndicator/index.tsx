import {View, Text} from 'react-native';
import React, {FC} from 'react';
import Animated, {
  ReduceMotion,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import ScreenRatio from '../../constants/ScreenRatio';
import styles from './styles';

interface props {
  activeIndex: SharedValue<number>;
}

const TabBarIndicator: FC<props> = ({activeIndex}) => {
  const animStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming((ScreenRatio.width / 5) * activeIndex.value, {
            duration: 10,
          }),
        },
      ],
    };
  });

  return <Animated.View style={[styles.tabBarIndicatorStyle, animStyles]} />;
};

export default TabBarIndicator;
