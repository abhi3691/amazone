import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';

interface props {
  item: CategoriesProps;
  index: number;
}

const SingleService: FC<props> = ({index, item}) => {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.recentSearch}>{item.title}</Text>
      <Image source={item.image} style={styles.serviceImg} />
    </View>
  );
};

export default SingleService;
