import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React, {useCallback} from 'react';
import Routes from './src/routes';
import MoreSheet from './src/components/template/more_sheet';
import {useShowBottomSheet} from './src/components/zstand/showBottmSheet/useShowBottomSheet';
import colors from './src/components/constants/colors';
import StatusBarPlaceHolder from './src/components/molecules/StatusBarPlaceHolder';

const App = () => {
  const isMoreBottomSheetVisible = useShowBottomSheet(
    state => state.isMoreBottomSheetVisible,
  );

  const setIsMoreBottomSheetVisible = useShowBottomSheet(
    state => state.setIsMoreBottomSheetVisible,
  );

  const onClose = useCallback(() => {
    setIsMoreBottomSheetVisible(false);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Routes />
      {isMoreBottomSheetVisible && <MoreSheet onClose={onClose} />}
    </View>
  );
};

export default App;
