import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({title, onBackPress, children}: HeaderProps) => {
  const navigation = useNavigation()
  const _onBack = () => {
    onBackPress && navigation.goBack()
  }
  return (
    <View style={styles.header}>
      {onBackPress && (
        <TouchableOpacity onPress={_onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightComponent}>{children}</View>
    </View>
  );
};

export default CustomHeader;
