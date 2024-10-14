import {Pressable, Text, View} from 'react-native';

import {styles} from './styles';

function Button({children, onPress, mode}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.button, mode === 'flat' && styles.flat]}>
        <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

export default Button;
