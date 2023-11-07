import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import {FONTS} from '../../../../components/constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../../../components/constants/colors';

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
  title: {
    fontFamily: FONTS.AmazonEmber_Rg,
    fontSize: RFValue(10),
    color: colors.black,
  },
});

export default styles;
