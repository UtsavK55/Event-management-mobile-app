import {Text, TextInput, View} from 'react-native';

import {styles} from './styles';

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
  
  const inputStyles = [styles.input];

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
      {invalid && <Text style={styles.invalidLabel}>{errorMessage}</Text>}
    </View>
  );
};

export default Input;
