import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 3.8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
