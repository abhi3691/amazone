import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import ScreenRatio from '../../constants/ScreenRatio';
import colors from '../../constants/colors';
import {FONTS} from '../../constants/fonts';
import {Platform} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    position: 'absolute',
    zIndex: 2,
    bottom: Platform.OS == 'android' ? '6.8%' : '8.9%',
  },
  contentContainer: {
    flex: 1,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    alignItems: 'center',
  },

  handleIndicatorStyle: {
    width: ScreenRatio.width / 6,
    backgroundColor: colors.borderColor,
  },
  infoText: {
    fontSize: RFValue(15),
    fontFamily: FONTS.AmazonEmber_Bd,
    color: colors.black,
    marginVertical: ScreenRatio.height / 50,
  },
  bottm: {
    height: 10,
    width: '100%',
    bottom: -5,
    position: 'absolute',
    alignItems: 'center',
  },
  cureve: {
    height: ScreenRatio.height / 90,
    backgroundColor: colors.white,
    width: ScreenRatio.width / 4.5,
    left: 1,
    top: -ScreenRatio.height * 0.003,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default styles;
