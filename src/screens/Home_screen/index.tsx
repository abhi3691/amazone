import React from 'react';
import {View} from 'react-native';
import Header from '../../components/orgnization/header';
import Address from './molecules/address';
import styles from './styles';
import Category from './organization/Category';
import Service from './organization/service';
import Deals from './organization/Deals';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../components/constants/colors';
import CarouselScroll from './organization/CarouselScroll';
import ScreenRatio from '../../components/constants/ScreenRatio';

const headerTop = 35;
const HomeScreen = () => {
  const inset = useSafeAreaInsets();
  const layoutY = useSharedValue<number>(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      layoutY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={styles.container}>
      <Header />
      <View style={{backgroundColor: colors.gradintBlue2, overflow: 'hidden'}}>
        <Animated.ScrollView
          onScroll={scrollHandler}
          contentContainerStyle={{paddingTop: headerTop}}
          bounces={false}
          scrollEventThrottle={1}
          showsVerticalScrollIndicator={false}>
          {/* deals */}
          <Category />
          {/* carousel */}
          <CarouselScroll />
          {/* service */}
          <Service />
          {/* deals */}
          <Deals />
          <View style={styles.bottom} />
        </Animated.ScrollView>

        {/* address */}
        <Address headerTop={headerTop} layoutY={layoutY} />
      </View>
    </View>
  );
};

export default HomeScreen;
