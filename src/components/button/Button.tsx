import {Pressable, Text, View} from 'react-native';

import {styles} from './styles';

function Button({label, onPress, mode}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.button, mode === 'flat' && styles.flat]}>
        <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

export default Button;
