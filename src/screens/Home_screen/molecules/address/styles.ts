import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS} from '../../../../components/constants/fonts';
import colors from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  container: {
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  addresText: {
    fontSize: RFValue(10),
    fontFamily: FONTS.AmazonEmber_Rg,
    marginLeft: 10,
    color: colors.black,
  },
  downContaer: {
    marginTop: 5,
    justifyContent: 'flex-end',
  },
});

export default styles;
