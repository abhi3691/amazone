import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';

interface props {
  title: string;
  image: ImageSourcePropType;
}

const SingleCard: FC<props> = ({title, image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default SingleCard;
