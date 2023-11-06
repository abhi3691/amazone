import {View, Text, Pressable} from 'react-native';
import React, {FC, useCallback, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import styles from './styles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SingleCard from '../../molecules/SingleCard';

import AmzonPayIcon from '../../../../assets/images/amazon-pay.png';
import tvIcon from '../../../../assets/images/minitv.jpeg';
import SingleScanQr from '../../molecules/SingleScsnQr';
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
          snapPoints={['40%']}
          enablePanDownToClose
          onClose={onClose}
          handleIndicatorStyle={styles.handleIndicatorStyle}>
          <View style={styles.contentContainer}>
            <Text style={styles.infoText}>Do more with Amazon</Text>
            {/* scan qr */}
            <SingleScanQr />
            {/* bottom Card */}
            <View style={styles.row}>
              <SingleCard
                title="Pay Bill, Send Mony & more"
                image={AmzonPayIcon}
              />
              <SingleCard title="Watch Free Web Search & Show" image={tvIcon} />
            </View>
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
