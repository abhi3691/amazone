import {View, Text, TextInput, StatusBar, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';

const Header = () => {
  const [isKeybordShow, setIsKeybordShow] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setIsKeybordShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setIsKeybordShow(false);
    });
    return Keyboard.dismiss();
  }, [Keyboard]);
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[colors.gradintBlue1, colors.gradintBlue2, colors.gradintBlue3]}
        style={styles.container}>
        <View style={styles.qrcodeContainer}>
          {isKeybordShow && (
            <Feather name="arrow-left" size={25} color={colors.black} />
          )}
        </View>
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name="search" size={22} color="#1f1f1f" />
            <TextInput
              placeholder="Search Amazon.in"
              placeholderTextColor="#848484"
              style={styles.textInput}
            />
          </View>
          <View style={styles.row}>
            {!isKeybordShow && (
              <MaterialIcons
                name="center-focus-weak"
                size={22}
                color={colors.iconGray}
              />
            )}
            <View style={{marginLeft: 20}}>
              <Feather name="mic" size={20} color={colors.iconGray} />
            </View>
          </View>
        </View>
        {!isKeybordShow && (
          <View style={styles.qrcodeContainer}>
            <MaterialIcons
              name="qr-code-scanner"
              size={20}
              color={colors.black}
            />
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

export default Header;
