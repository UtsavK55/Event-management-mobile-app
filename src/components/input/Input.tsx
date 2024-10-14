import {Text, TextInput, View} from 'react-native';

import {styles} from './styles';

const Input = ({label, invalid, style, textInputConfig}: InputProps) => {
  const inputStyles = [styles.input];

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label]}>{label}*</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
      {invalid && (
        <Text style={styles.invalidLabel}>Please enter correct value</Text>
      )}
    </View>
  );
};

export default Input;
