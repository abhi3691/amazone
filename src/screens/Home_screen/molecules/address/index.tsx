import {View, Text} from 'react-native';
import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import colors from '../../../../components/constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

interface props {
  layoutY: SharedValue<number>;
  headerTop: number;
}

const Address: FC<props> = ({layoutY, headerTop}) => {
  const stickyElement = useAnimatedStyle(() => {
    const translateY = interpolate(
      layoutY.value,
      [-headerTop / 8, headerTop],
      [0, -headerTop, -headerTop], // Corrected values for translateY
      Extrapolate.CLAMP,
    );
    const scaleY = interpolate(
      layoutY.value,
      [0, headerTop / 2, headerTop],
      [1, 0, 0.9], // Corrected values for scaleY
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      layoutY.value,
      [0, headerTop / 2, headerTop],
      [1, 0.95, 0.95], // Corrected values for scaleY
      Extrapolate.CLAMP,
    );

    return {
      transform: [
        {
          translateY,
        },

        {
          scaleY,
        },
      ],
      opacity,
    };
  });

  return (
    <Animated.View style={[stickyElement, styles.absolute]}>
      <LinearGradient
        style={styles.container}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={[colors.gradintBlue4, colors.gradintBlue5]}>
        <Feather name="map-pin" color={colors.black} size={RFValue(15)} />
        <Text style={styles.addresText}>Deliver to Aswin - Mumbi - 400001</Text>
        <View style={styles.downContaer}>
          <Feather
            name="chevron-down"
            color={colors.black}
            size={RFValue(12)}
          />
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

export default Address;
