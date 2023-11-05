import {StyleSheet} from 'react-native';
import ScreenRatio from '../../constants/ScreenRatio';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  tabBarIndicatorStyle: {
    position: 'absolute',
    top: 0,
    backgroundColor: colors.tabColor,
    width: ScreenRatio.width / 10,
    height: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
export default styles;
