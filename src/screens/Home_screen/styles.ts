import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenRatio from '../../components/constants/ScreenRatio';
import colors from '../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  bottom: {
    height: ScreenRatio.height / 5,
    backgroundColor: colors.white,
  },
});

export default styles;
