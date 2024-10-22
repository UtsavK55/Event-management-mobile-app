import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import { colors } from '@src/theme/ColorStyles';

const Input = ({
  label,
  invalid,
  style,
  value,
  onChangeText,
  textInputConfig,
  required,
  errorMessage = 'Please enter a valid value',
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputStyles = [styles.input];

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label]}>
        {label}
        {required && <Text style={styles.invalidLabel}> *</Text>}
      </Text>
      <TextInput
        style={inputStyles}
        value={value}
        onChangeText={onChangeText}
        {...textInputConfig}
      />
      {/* {label === 'Password' && (
        <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.icon} >
          <Icon
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={20}
            color={colors.iconColor}
            // style={styles.icon}
          />
        </TouchableOpacity>
      )} */}
      {invalid && <Text style={styles.invalidLabel}>{errorMessage}</Text>}
    </View>
  );
};

export default Input;
