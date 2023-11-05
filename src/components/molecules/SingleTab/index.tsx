import {View, Text, ColorValue, Pressable} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';
interface props {
  color: ColorValue;
  icon: string;
  name: string;
  onPress: () => void;
}

const SingleTab: FC<props> = ({color, icon, name, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Feather name={icon} color={color} size={RFValue(18)} />
      <Text style={[styles.nameStyle, {color: color}]}>{name}</Text>
    </Pressable>
  );
};

export default SingleTab;
