import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenRatio from '../../../../components/constants/ScreenRatio';

const styles = StyleSheet.create({
  container: {
    width: ScreenRatio.width / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default styles;
