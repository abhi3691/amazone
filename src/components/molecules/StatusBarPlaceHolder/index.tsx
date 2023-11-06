import {Platform, StatusBar, View} from 'react-native';
import colors from '../../constants/colors';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight;

function StatusBarPlaceHolder() {
  return (
    <View
      style={{
        width: '100%',
        height: STATUS_BAR_HEIGHT,
        backgroundColor: 'transprent',
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
    </View>
  );
}

export default StatusBarPlaceHolder;
