import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import AmazonPay from '../../../../../assets/images/amazon-pay.png';
import SendMoney from '../../../../../assets/images/send-money.jpg';
import PayBills from '../../../../../assets/images/pay-bills.jpeg';
import ScanQR from '../../../../../assets/images/scan-qr.jpeg';
import {RecentSearchData} from '../../../../components/data/RecentSearchData';
import colors from '../../../../components/constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import SingleService from '../../molecules/SingleService';

const Service = () => {
  return (
    <View style={{backgroundColor: colors.bgColor}}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <LinearGradient
          style={styles.serviceContainer}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          colors={[colors.gradintYellow1, colors.graintYellow2]}>
          <View style={styles.row}>
            <View style={styles.innerContainer}>
              <Image style={styles.imgStyle} source={AmazonPay} />
              <Text style={styles.title}>Amazon Pay</Text>
            </View>
            <View style={styles.innerContainer}>
              <Image style={styles.imgStyle} source={SendMoney} />
              <Text style={styles.title}>Send Money</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.innerContainer}>
              <Image style={styles.imgStyle} source={ScanQR} />
              <Text style={styles.title}>Scan QR</Text>
            </View>
            <View style={styles.innerContainer}>
              <Image style={styles.imgStyle} source={PayBills} />
              <Text style={styles.title}>Pay Bills</Text>
            </View>
          </View>
        </LinearGradient>
        {RecentSearchData.map((item, index) => (
          <SingleService item={item} index={index} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Service;
