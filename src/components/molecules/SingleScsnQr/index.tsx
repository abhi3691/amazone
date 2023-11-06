import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const SingleScanQr = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContaer}>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="black" />
        <Text style={styles.info}>Tab to enable Your Camera</Text>
      </View>
      <View style={styles.subContaer}>
        <Text>Scan an QR to Pay</Text>
      </View>
    </View>
  );
};

export default SingleScanQr;
