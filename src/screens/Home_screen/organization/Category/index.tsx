import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../../components/constants/colors';
import {Categories} from '../../../../components/data/Categories';
import SingleCategory from '../../molecules/SingleCategory';

const Category = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[colors.gradintOrange, colors.gradintPink]}
      style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Categories.map((item, index) => (
          <SingleCategory item={item} index={index} key={index} />
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default Category;
