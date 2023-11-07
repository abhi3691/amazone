import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 3,
  },
  containerStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width,
  },
  row: {
    flexDirection: 'row',
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  ActiveDotStyle: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'green',
    marginLeft: 10,
    position: 'absolute',
  },
});

export default styles;
