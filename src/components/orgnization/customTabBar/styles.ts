import {StyleSheet} from 'react-native';
import ScreenRatio from '../../constants/ScreenRatio';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 12,
    width: ScreenRatio.width,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 10,
  },
  itemContaer: {
    flex: 1,
  },
  curveConter: {
    position: 'absolute',
    alignItems: 'center',
    width: ScreenRatio.width - 40,
  },
});

export default styles;
