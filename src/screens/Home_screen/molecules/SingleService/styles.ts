import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../../components/constants/colors';
import {FONTS} from '../../../../components/constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  serviceImg: {
    width: '100%',
    height: 130,
  },
  outerContainer: {
    backgroundColor: 'white',
    marginLeft: 8,
    borderRadius: 5,
    elevation: 5,
    padding: 5,
    width: 140,
  },
  recentSearch: {
    fontSize: RFValue(12),
    color: colors.black,
    fontFamily: FONTS.AmazonEmber_Rg,
    marginBottom: 8,
  },
});

export default styles;
