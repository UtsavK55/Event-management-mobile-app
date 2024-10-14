import {Alert, Text, TextInput, View} from 'react-native';

import { styles } from './styles';

const Input = ({label, invalid, style, textInputConfig}:InputProps) => {
  const inputStyles = [styles.input];

  if (invalid) {
    Alert.alert("Enter correct value ");
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;
