import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenRatio from '../../constants/ScreenRatio';
import colors from '../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS} from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 9,
    width: ScreenRatio.width / 2.2,
    borderRadius: 10,
    marginLeft: 10,
    backgroundColor: colors.bgColor,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: colors.borderColor,
    shadowOffset: {height: 5, width: 0},
    shadowOpacity: 1,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  title: {
    fontSize: RFValue(10),
    color: colors.black,
    fontFamily: FONTS.AmazonEmber_Rg,
    textAlign: 'center',
    paddingHorizontal: 25,
    marginTop: 10,
  },
});

export default styles;
