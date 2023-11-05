import {View, Text} from 'react-native';
import React, {FC, useEffect} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styles from './styles';
import SingleTab from '../../molecules/SingleTab';
import colors from '../../constants/colors';
import {useShowBottomSheet} from '../../zstand/showBottmSheet/useShowBottomSheet';
import TabBarIndicator from '../../molecules/tabBarIndicator';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Curve from '../../../../assets/svg/curve.svg';
const CustomTabBar: FC<BottomTabBarProps> = ({
  navigation,
  state,
  descriptors,
}) => {
  const isMoreBottomSheetVisible = useShowBottomSheet(
    state => state.isMoreBottomSheetVisible,
  );
  const setIsMoreBottomSheetVisible = useShowBottomSheet(
    state => state.setIsMoreBottomSheetVisible,
  );

  const activeIndex = useSharedValue(0);

  // Define a shared value for opacity
  const opacity = useSharedValue(isMoreBottomSheetVisible ? 1 : 0);

  // Update the opacity value when isMoreBottomSheetVisible changes
  useEffect(() => {
    opacity.value = withTiming(isMoreBottomSheetVisible ? 1 : 0, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    });
  }, [isMoreBottomSheetVisible]);

  useEffect(() => {
    activeIndex.value = withTiming(state.index);
  }, [state]);

  const animStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      {!isMoreBottomSheetVisible && (
        <TabBarIndicator activeIndex={activeIndex} />
      )}
      <Animated.View style={[styles.curveConter, animStyles]}>
        <Curve height={55} width={85} />
      </Animated.View>
      {state.routes.map((route, index) => {
        const isFocused = !isMoreBottomSheetVisible
          ? state.index === index
          : false;
        const {name, icon}: any = route.params;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (route.name == 'more') {
            setIsMoreBottomSheetVisible(!isMoreBottomSheetVisible);
          } else {
            if (isMoreBottomSheetVisible) {
              setIsMoreBottomSheetVisible(false);
            }
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          }
        };

        return (
          <View key={index} style={styles.itemContaer}>
            <SingleTab
              color={
                isFocused
                  ? colors.tabColor
                  : route.name == 'more' && isMoreBottomSheetVisible
                  ? colors.tabColor
                  : colors.black
              }
              name={
                route.name == 'more' && isMoreBottomSheetVisible ? '' : name
              }
              icon={icon}
              onPress={onPress}
            />
          </View>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
