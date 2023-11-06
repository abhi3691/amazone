import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingRight: 20,
  },
  container: {
    marginTop: -20,
    paddingHorizontal: 10,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceContainer: {
    borderRadius: 5,
    elevation: 8,
    shadowColor: colors.iconGray,
    shadowOffset: {height: 10, width: 10},
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  innerContainer: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 15,
  },
  title: {
    fontSize: 10,
    color: 'black',
    marginTop: 2,
  },
  serviceImg: {
    width: '100%',
    height: 130,
  },
});

export default styles;
