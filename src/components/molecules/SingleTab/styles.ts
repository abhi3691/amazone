import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import ScreenRatio from '../../constants/ScreenRatio';
import {FONTS} from '../../constants/fonts';
const styles = StyleSheet.create({
  container: {
    width: ScreenRatio.width / 10,
    alignItems: 'center',
  },
  nameStyle: {
    fontSize: RFValue(10),
    fontFamily: FONTS.AmazonEmber_Rg,
  },
});

export default styles;
