import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {AdditionalParallaxProps} from 'react-native-snap-carousel';

interface props {
  item: CarouselDataProps;
  index: number;
}

const SingleCarouselSlider: FC<props> = ({item, index}) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.imgStyle} />
    </View>
  );
};

export default SingleCarouselSlider;
