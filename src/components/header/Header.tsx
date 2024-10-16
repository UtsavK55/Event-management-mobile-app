import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const CustomHeader = ({title, onBackPress, children}: HeaderProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightComponent}>{children}</View>
    </View>
  );
};

export default CustomHeader;
