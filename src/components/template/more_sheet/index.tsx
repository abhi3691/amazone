import {View, Text, Pressable} from 'react-native';
import React, {FC, useCallback, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import styles from './styles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

interface props {
  onClose: () => void;
}
const MoreSheet: FC<props> = ({onClose}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={['45%']}
          enablePanDownToClose
          onClose={onClose}
          handleIndicatorStyle={styles.handleIndicatorStyle}>
          <View style={styles.contentContainer}>
            <Text style={styles.infoText}>Do more with Amazon</Text>
          </View>
        </BottomSheet>
      </GestureHandlerRootView>
      <View style={styles.bottm}>
        <View style={styles.cureve} />
      </View>
    </View>
  );
};

export default MoreSheet;
