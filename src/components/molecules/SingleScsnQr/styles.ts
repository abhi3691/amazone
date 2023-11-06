import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenRatio from '../../constants/ScreenRatio';
import colors from '../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 6,
    width: ScreenRatio.width / 1.1,
    backgroundColor: colors.bgColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  infoContaer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  info: {
    fontSize: RFValue(9),
    color: colors.tabColor,
    marginTop: 10,
  },

  subContaer: {
    height: ScreenRatio.height / 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lingthBlue,
  },
});

export default styles;
