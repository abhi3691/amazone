import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';

interface props {
  item: CategoriesProps;
  index: number;
}

const SingleCategory: FC<props> = ({item, index}) => {
  return (
    <View key={index} style={styles.container}>
      {item.image && <Image source={item.image} style={styles.image} />}
      <Text>{item.title}</Text>
    </View>
  );
};

export default SingleCategory;
