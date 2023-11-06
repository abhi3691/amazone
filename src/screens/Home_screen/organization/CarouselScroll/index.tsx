import {View, Text} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import styles from './styles';
import CarouselSlider from 'react-native-reanimated-carousel';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import {CarouselData} from '../../../../components/data/CarouselData';
import SingleCarouselSlider from '../../molecules/SingleCarouselSlider';
import colors from '../../../../components/constants/colors';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const CarouselScroll = () => {
  const activSlide = useSharedValue(0);

  const onSnapToItem = useCallback((index: number) => {
    activSlide.value = index;
  }, []);

  const animStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(18 * activSlide.value)}],
    };
  }, []);

  return (
    <View style={styles.container}>
      <CarouselSlider
        width={ScreenRatio.width}
        data={CarouselData}
        renderItem={({item, index}) => (
          <SingleCarouselSlider item={item} index={index} />
        )}
        pagingEnabled
        autoPlay
        onSnapToItem={onSnapToItem}
      />
      <View style={styles.containerStyle}>
        <View style={styles.row}>
          {CarouselData.map((_, index) => (
            <View style={styles.dotStyle} key={index} />
          ))}
          <Animated.View style={[styles.ActiveDotStyle, animStyles]} />
        </View>
      </View>
    </View>
  );
};

export default CarouselScroll;
