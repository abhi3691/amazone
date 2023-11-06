import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenRatio from '../../../../components/constants/ScreenRatio';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 2.5,
    width: '100%',
    backgroundColor: 'green',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
