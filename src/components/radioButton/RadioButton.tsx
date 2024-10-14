import {Pressable, Text, View} from 'react-native';

import {styles} from './styles';

const RadioButton = ({
  radioOption,
  setRadioOption,
  data,
  label,
}: RadioButtonProps) => {
  const handlePress = (value: string) => {
    setRadioOption(value);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}*</Text>
      <View style={styles.options}>
        {data.map(item => (
          <View key={item.id} style={styles.radioButtonContainer}>
            <Pressable
              style={styles.radioButton}
              onPress={() => handlePress(item.title)}>
              {radioOption === item.title && (
                <View style={styles.radioButtonIcon} />
              )}
            </Pressable>
            <Pressable onPress={() => handlePress(item.title)}>
              <Text style={styles.radioButtonText}>{item.title}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RadioButton;
