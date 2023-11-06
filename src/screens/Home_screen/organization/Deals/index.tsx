import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import onplusAdd from '../../../../../assets/images/onplus_add.jpeg';
const Deals = () => {
  return (
    <View style={styles.container}>
      <Image source={onplusAdd} style={styles.image} />
    </View>
  );
};

export default Deals;
